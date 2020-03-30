const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('creating browser');
    const browser = await puppeteer.launch({args: ['--no-sandbox']});

    console.log('creating page');
    const page = await browser.newPage();

    console.log('going to page');
    console.log(path.resolve(__dirname, 'test.html'));
    await page.goto(`file://${path.resolve(__dirname)}/test.html`);

    console.log('creating pdf');
    await page.pdf({path: 'test.pdf', format: 'A4'});

    console.log('closing browser');
    await browser.close();
})();