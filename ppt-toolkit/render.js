#!/usr/bin/env node
// render.js — one command to build a .pptx AND its Chromium QA previews.
//
//   cd into the folder that holds your deck module + its images/, then:
//   node /path/to/ppt-toolkit/render.js ./deck.js "My-Deck-Name"
//
// Produces (in the current dir):
//   <name>.pptx        the real deck
//   slide1..N.html     the HTML twins (same layout data)
//   qa1..N.png         Chromium screenshots for visual QA
//
// Image paths inside the deck module are resolved relative to the CURRENT DIR,
// so run this from the deck folder.
const path = require("path");
const { renderPptx } = require(path.join(__dirname, "lib", "engine-pptx.js"));
const { renderHtml } = require(path.join(__dirname, "lib", "engine-html.js"));
const { shoot } = require(path.join(__dirname, "lib", "screenshot.js"));

(async () => {
  const deckArg = process.argv[2] || "./deck.js";
  const outName = process.argv[3] || "deck";
  const mod = require(path.resolve(deckArg));
  const buildDeck = mod.buildDeck || mod.default || mod;
  if (typeof buildDeck !== "function") throw new Error(`${deckArg} must export buildDeck(api)`);

  await renderPptx(buildDeck, { fileName: `${outName}.pptx`, title: outName, author: "Jenny's Creative Lab" });
  const n = renderHtml(buildDeck, ".");
  const bin = shoot(n, ".");
  console.log(`✓ ${outName}.pptx  +  ${n} preview PNGs (qa1..qa${n}.png)`);
  console.log(`  rendered previews via ${path.basename(bin)}`);
})().catch((e) => { console.error(e); process.exit(1); });
