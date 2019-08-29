// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
  });
  it('Should link to about page', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.contains('h1', 'yo! h1');
  });
});
