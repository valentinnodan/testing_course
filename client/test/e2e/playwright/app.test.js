const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';

describe(`UI Tests with Playwright`, () => {
    let browser = null;
    let page = null;

    beforeAll(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();

        if (!page) {
            throw new Error("Connection wasn't established");
        }

        // Open the page
        await page.goto(PAGE_URL);
    });

    afterAll(async () => {
        await browser.close();
    });

    test(`Should load page`, async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('Should register and login', async () => {
        const testLogin = 'tester';
        const testName = 'Tester';
        await page.goto(PAGE_URL + '/register');
        await page.fill('#registration-login', testLogin);
        await page.fill('#registration-name', testName);
        await page.click('#registration-button');

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        expect(await page.innerText('#greeting')).toBe('Hello, Tester!')
    })

});