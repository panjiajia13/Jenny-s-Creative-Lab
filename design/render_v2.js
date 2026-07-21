const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs'); const path = require('path');
const CHROMIUM = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';

const JOBS = [
  ['arctic_cover_v2.html', 'arctic_cover_v2.png'],
  ['arctic_timeline_v2.html', 'arctic_timeline_v2.png'],
];

(async () => {
  const dir = __dirname;
  const browser = await chromium.launch(fs.existsSync(CHROMIUM) ? { executablePath: CHROMIUM } : {});
  for (const [html, out] of JOBS) {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
    await page.goto('file://' + path.join(dir, html), { waitUntil: 'networkidle' });
    await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
    await page.waitForTimeout(500);
    const hi = path.join(dir, '_hi_' + out);
    await (await page.$('#stage')).screenshot({ path: hi });
    await sharp(hi).resize(1600, 900, { fit: 'fill', kernel: 'lanczos3' }).png({ quality: 100 }).toFile(path.join(dir, out));
    fs.unlinkSync(hi);
    await page.close();
    console.log('rendered', out);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
