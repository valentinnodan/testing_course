const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';

describe(`UI Tests with Playwright`, () => {
    let browser = null;
    let page = null;
    const testLogin = 'tester';
    const testName = 'Tester';

    beforeAll(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();

        if (!page) {
            throw new Error("Connection wasn't established");
        }
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Hover on coin works', async () => {
        const coinDate = '2000-01-01';
        const coinName = 'Test';
        const coinValue = '100';
        // const capture = await saveVideo(page, 'test/e2e/playwright/recordings/recording.mp4');

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');
        await page.click('#App-header-link')

        await page.click('#link-to-budget')
        await page.fill('#budget-coin-date', coinDate);
        await page.fill('#budget-coin-name', coinName);
        await page.fill('#budget-coin-value', coinValue);
        await page.click('#budget-coin-submit');
        const hoverElem = await page.$('.budget-coins_item:last-child');
        await hoverElem.hover();
        await page.screenshot({ path: `test/e2e/playwright/screenshots/example.png` });
    })
});
