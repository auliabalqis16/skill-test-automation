const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 20});
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1000});
    const timeout = 15000;
    page.setDefaultTimeout(timeout);

    await page.goto("https://www.service.nsw.gov.au/");

    await page.waitForSelector('input[name="q"]');
    await page.click('input[name="q"]');
    await page.keyboard.type('apply for a number plate')
    await page.keyboard.press('Enter')

    await page.waitForSelector('a[href="https://www.service.nsw.gov.au/service-centre"]')
    await page.click('a[href="https://www.service.nsw.gov.au/service-centre"]')

    await page.waitForSelector('#locatorTextSearch')
    await page.click('#locatorTextSearch')
    await page.keyboard.type('Sydney 2000')
    await page.keyboard.press('Enter')

    for (let i of 'Sydney 2000     ') {
      await page.keyboard.press('Backspace')
    }
    await page.keyboard.type('Sydney Domestic Airport 2020')
    await page.keyboard.press('Enter')

    await browser.close()
})();
