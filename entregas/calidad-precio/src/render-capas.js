// Exporta capas transparentes de las slides 01–04 para montarlas en Canva sobre las imágenes generadas en alta resolución.
const { chromium } = require('playwright-core');
const path = require('path');
const jobs = [
  ['top', 's1', 'calidad-01-hook-capa.png'],
  ['bottom', 's2', 'calidad-02-sol-fondo.png'],
  ['top', 's2', 'calidad-02-sol-capa.png'],
  ['top', 's3', 'calidad-03-salitre-capa.png'],
  ['top', 's4', 'calidad-04-noche-capa.png'],
];
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 } });
  for (const [capa, id, file] of jobs) {
    await page.goto('file://' + path.resolve(__dirname, 'carrusel.html') + '?capa=' + capa);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);
    const out = path.resolve(__dirname, '..', 'canva', file);
    await (await page.$('#' + id)).screenshot({ path: out, omitBackground: true });
    console.log(out);
  }
  await browser.close();
})();
