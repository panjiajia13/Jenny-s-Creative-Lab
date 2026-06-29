const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs'); const path = require('path');
const CHROMIUM = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';
(async () => {
  const dir=__dirname; const htmlPath=path.join(dir,'arctic_timeline.html');
  const browser=await chromium.launch(fs.existsSync(CHROMIUM)?{executablePath:CHROMIUM}:{});
  const page=await browser.newPage({viewport:{width:1600,height:900},deviceScaleFactor:2});
  await page.goto('file://'+htmlPath,{waitUntil:'networkidle'});
  await page.evaluate(async()=>{if(document.fonts&&document.fonts.ready)await document.fonts.ready;});
  await page.waitForTimeout(400);
  const hi=path.join(dir,'_hi_tl.png');
  await (await page.$('#stage')).screenshot({path:hi});
  await sharp(hi).resize(1600,900,{fit:'fill',kernel:'lanczos3'}).png({quality:100}).toFile(path.join(dir,'arctic_timeline.png'));
  fs.unlinkSync(hi); await browser.close(); console.log('rendered arctic_timeline.png');
})().catch(e=>{console.error(e);process.exit(1);});
