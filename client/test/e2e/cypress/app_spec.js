const PAGE_URL = 'http://localhost:3000';

const testLogin = 'tester';
const testName = 'Tester';

describe('Coin test', () => {
    it('visits home page', () => {
        cy.visit(PAGE_URL);
        cy.get('#home-greeting').should('be.visible');
        cy.get('#home-greeting').should('contain', 'Hello, guest!')
    })
    it ('logs in successfully', () => {
        cy.visit(PAGE_URL + '/authorize');
        cy.get('#greeting').should('contain', `Hello, guest!`);
        cy.get('#authorization-login').type(testLogin);
        cy.get('#authorization-button').click();
        cy.get('#greeting').should('contain', `Hello, ${testName}!`);
    })
    it ('home page of user should contain link to budget', () => {
        cy.visit(PAGE_URL);
        cy.get('#home-greeting').should('contain', `Hello, guest!`);
        cy.get('#App-header-link-auth').click();
        cy.get('#authorization-login').type(testLogin);
        cy.get('#authorization-button').click();
        cy.get('#App-header-link').click();
        cy.get('#home-greeting').should('contain', `Hello, ${testName}!`);
        cy.get('#link-to-budget').should('contain', 'To budget');
    })
})