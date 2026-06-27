/*
 * Renders arctic_monkeys_feature.html → arctic_monkeys_feature.png at 1600×900
 * (16:9 feature image). Supersamples at 2× then downscales (lanczos3).
 *   cd design && node render_arctic.js
 */
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CHROMIUM = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';

(async () => {
  const dir = __dirname;
  const htmlPath = path.join(dir, 'arctic_monkeys_feature.html');
  const launchOpts = fs.existsSync(CHROMIUM) ? { executablePath: CHROMIUM } : {};

  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({
    viewport: { width: 1600, height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
  await page.waitForTimeout(400);

  const hi = path.join(dir, '_hi_am.png');
  await (await page.$('#stage')).screenshot({ path: hi });  // 3200 × 1800

  await sharp(hi)
    .resize(1600, 900, { fit: 'fill', kernel: 'lanczos3' })
    .png({ quality: 100 })
    .toFile(path.join(dir, 'arctic_monkeys_feature.png'));

  fs.unlinkSync(hi);
  await browser.close();
  console.log('rendered arctic_monkeys_feature.png (1600×900)');
})().catch((e) => { console.error(e); process.exit(1); });
