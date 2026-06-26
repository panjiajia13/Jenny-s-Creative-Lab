/*
 * Renders pawtune_instagram_post.html → pawtune_instagram_post.png at exactly
 * 1080×1350 (Instagram 4:5). Supersamples at 2× then downscales (lanczos3) for
 * crisp type and linework.
 *
 *   cd design && npm install playwright sharp && node render.js
 *
 * Chromium is expected at /opt/pw-browsers/chromium (Claude Code web env). Adjust
 * `executablePath` below, or remove it to use a locally installed Chromium.
 */
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CHROMIUM = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';

(async () => {
  const dir = __dirname;
  const htmlPath = path.join(dir, 'pawtune_instagram_post.html');
  const launchOpts = fs.existsSync(CHROMIUM) ? { executablePath: CHROMIUM } : {};

  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,
  });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
  await page.waitForTimeout(350);

  const hi = path.join(dir, '_hi.png');
  await (await page.$('#stage')).screenshot({ path: hi });      // 2160 × 2700

  await sharp(hi)
    .resize(1080, 1350, { fit: 'fill', kernel: 'lanczos3' })
    .png({ quality: 100 })
    .toFile(path.join(dir, 'pawtune_instagram_post.png'));

  fs.unlinkSync(hi);
  await browser.close();
  console.log('rendered pawtune_instagram_post.png (1080×1350)');
})().catch((e) => { console.error(e); process.exit(1); });
