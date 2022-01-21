var args = process.argv.slice(2)[0];
const puppeteer = require('puppeteer');

async function scrape() {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto('https://codequiz.azurewebsites.net/');
  await page.click('body > input[type=button]');

  for (let index = 2; index < 6; index++) {
    var element = await page.waitForSelector(
      `body > table > tbody > tr:nth-child(${index}) > td:nth-child(1)`
    );
    var text = await page.evaluate((element) => element.textContent, element);
    if (text === args) {
      var nav = await page.waitForSelector(
        `body > table > tbody > tr:nth-child(${index}) > td:nth-child(2)`
      );
      var navValue = await page.evaluate((element) => element.textContent, nav);
      console.log(navValue);
      break;
    }
  }

  browser.close();
}
scrape();
