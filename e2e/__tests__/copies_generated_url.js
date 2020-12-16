describe('Copies generated URL', () => {
  beforeEach(async () => {
    await fetch('http://localhost:5555/api/clean-up-and-seed');
  });

  it('Copies generated URL by clicking the button', () => {
    cy.visit('/');

    cy.get('.url-label input')
      .type('mywebsite.com')
      .should('have.value', 'mywebsite.com');

    cy.get('.urlCode-label input').type('cypress').should('have.value', 'cypress');

    cy.contains('Submit').click();

    cy.contains('Copy Teeny-Weeny URL')
      .click()
      .then(() => {
        console.log('aaaaa');
        cy.task('getClipboard').should('equal', 'http://localhost:5555/cypress');
        cy.contains('Copied!').should('exist');
      });
  });
});
