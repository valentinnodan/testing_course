const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';
const delay = ms => new Promise(res => setTimeout(res, ms));

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

    test('Should log in', async () => {
        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');
        await delay(100);

        expect(await page.innerText('#greeting')).toBe(`Hello, ${testName}!`)
    })

    test('Home page personalized for authorized user', async () => {
        await page.goto(PAGE_URL)
        expect(await page.innerText('#home-greeting')).toBe('Hello, guest!')

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        await page.click('#App-header-link')
        await delay(100);

        expect(await page.innerText('#home-greeting')).toBe(`Hello, ${testName}!`)
        expect(await page.innerText('#link-to-budget')).toBe('To budget')

    })

    test('Coins page personalized for authorized user', async () => {
        await page.goto(PAGE_URL + '/budget')
        expect(await page.innerText('#budget-empty')).toBe('You need to authorize')

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        await page.click('#App-header-link')
        await page.click('#link-to-budget')
        await delay(100);

        expect(await page.innerText('#budget-greeting')).toBe(`Insert new coin, ${testName}!`);
    })

    test('Authorized user can add coins', async () => {
        const coinDate = '2000-01-01';
        const coinName = 'Test';
        const coinValue = '100';
        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        await page.click('#App-header-link')
        await page.click('#link-to-budget')
        const currAmountText = await page.innerText('#budget-amount')
        const currAmount = parseInt(currAmountText.slice(9))

        await page.fill('#budget-coin-date', coinDate);
        await page.fill('#budget-coin-name', coinName);
        await page.fill('#budget-coin-value', coinValue);
        await page.click('#budget-coin-submit');
        await delay(100);
        expect(await page.innerText('#budget-amount')).toBe(`Amount = ${currAmount + 1}`)
    })

});
