// Renderiza cada <section class="slide"> de carrusel.html como PNG 1080x1350.
// Uso: npm install && npm run render  (ajusta `names` al guion de cada carrusel)
const { chromium } = require('playwright-core');
const path = require('path');
const names = ['hook', 'sol', 'salitre', 'noche', 'cuenta', 'checklist', 'infinity', 'cta'];
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, 'carrusel.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  const slides = await page.$$('section.slide');
  for (let i = 0; i < slides.length; i++) {
    const file = path.resolve(__dirname, '..', `calidad-${String(i + 1).padStart(2, '0')}-${names[i]}.png`);
    await slides[i].screenshot({ path: file });
    console.log(file);
  }
  await browser.close();
})();
