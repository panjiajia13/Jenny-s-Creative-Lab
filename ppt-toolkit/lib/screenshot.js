// screenshot.js — QA channel. Renders slide*.html to qa*.png with the
// pre-installed Chromium (PLAYWRIGHT_BROWSERS_PATH). We use Chromium because
// this environment's LibreOffice cannot convert/render (missing headless 'svp'
// VCL plugin), so the usual pptx->pdf->image path fails. See ppt-toolkit/README.
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function findChromium() {
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers"];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    // prefer headless_shell, fall back to chrome
    const stack = [root];
    const hits = [];
    while (stack.length) {
      const d = stack.pop();
      let ents;
      try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { continue; }
      for (const e of ents) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) stack.push(p);
        else if (e.name === "headless_shell" || e.name === "chrome") hits.push(p);
      }
    }
    hits.sort((a, b) => (a.includes("headless_shell") ? -1 : 1));
    if (hits.length) return hits[0];
  }
  throw new Error("Chromium not found under PLAYWRIGHT_BROWSERS_PATH");
}

// Screenshot slide1..slideN.html (in dir) to qa1..qaN.png. Returns the binary used.
function shoot(n, dir = ".") {
  const bin = findChromium();
  for (let i = 1; i <= n; i++) {
    const html = path.resolve(dir, `slide${i}.html`);
    execFileSync(bin, [
      "--headless", "--no-sandbox", "--hide-scrollbars",
      "--force-device-scale-factor=2", "--window-size=960,540",
      `--screenshot=${path.resolve(dir, `qa${i}.png`)}`, `file://${html}`,
    ], { stdio: "ignore" });
  }
  return bin;
}

module.exports = { shoot, findChromium };
