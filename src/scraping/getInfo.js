const { chromium } = require('playwright');

const getInfo = async () => {
  const browser = await chromium.launch({
    headless: true,
    slowMo: 1000,
  });
  const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto('https://gruposayer.com/v2/index.php');

  await page.getByPlaceholder('Buscar producto').click();
  await page.getByPlaceholder('Buscar producto').fill('ex-0200');
  await page.getByPlaceholder('Buscar producto').press('ArrowDown');
  await page.getByPlaceholder('Buscar producto').press('Enter');

  const imageTag = page.locator('#zoom_03');
  const imageUrl = await imageTag.evaluate((element) => element.src);

  const name = await page.locator('h4').innerText();

  const sizeButtons = page.locator('.select-size > div#test.size > button');
  const sizesArray = await sizeButtons.evaluateAll((list) =>
    list.map((element) => element.innerText)
  );

  const featuresList = page.locator('.caracteristicasData');
  const featuresArray = await featuresList.evaluateAll((list) =>
    list.map((element) => element.innerText)
  );

  console.log(name.toLowerCase(), sizesArray, featuresArray, imageUrl);

  await page.screenshot({ path: 'sayer.png' });

  await context.close();
  await browser.close();

  return {
    image: imageUrl,
    name: name.toLowerCase(),
    sizes: sizesArray,
    features: featuresArray,
  };
};

module.exports = getInfo;
