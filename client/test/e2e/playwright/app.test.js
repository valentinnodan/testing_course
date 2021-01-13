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
        await page.goto(PAGE_URL + '/register');
        await page.fill('#registration-login', testLogin);
        await page.fill('#registration-name', testName);
        await page.click('#registration-button');

        await page.click('#App-header-button')

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        expect(await page.innerText('#greeting')).toBe('Hello, Tester!')
    })

    test('Home page personalized for authorized user', async () => {
        await page.goto(PAGE_URL)
        expect(await page.innerText('#home-greeting')).toBe('Hello, guest!')

        await page.goto(PAGE_URL + '/register');
        await page.fill('#registration-login', testLogin);
        await page.fill('#registration-name', testName);
        await page.click('#registration-button');

        await page.click('#App-header-link')
        expect(await page.innerText('#home-greeting')).toBe('Hello, Tester!')
        expect(await page.innerText('#link-to-budget')).toBe('To budget')
    })

    test('Coins page personalized for authorized user', async () => {
        await page.goto(PAGE_URL + '/budget')
        expect(await page.innerText('#budget-empty')).toBe('You need to authorize')

        await page.goto(PAGE_URL + '/register');
        await page.fill('#registration-login', testLogin);
        await page.fill('#registration-name', testName);
        await page.click('#registration-button');

        await page.click('#App-header-link')
        await page.click('#link-to-budget')
        expect(await page.innerText('#budget-greeting')).toBe('Insert new coin, Tester!')
    })
});

//уже залогиненный логинится - скриншот тестирование
//у залогиненного пользователя на домашней страничке есть приветствие
//у залогиненного пользователя есть своя страничка с коинами
//можем добавлять коины
