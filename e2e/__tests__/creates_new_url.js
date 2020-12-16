describe('Creates new URL', () => {
  beforeEach(async () => {
    await fetch('http://localhost:5555/api/clean-up-and-seed');
  });

  it('Creates new URL with custom code', () => {
    cy.visit('/');

    cy.get('.url-label input')
      .type('mywebsite.com')
      .should('have.value', 'mywebsite.com');

    cy.get('.urlCode-label input').type('cypress').should('have.value', 'cypress');

    cy.contains('Submit').click();

    cy.contains('.your-url', 'Your URL is: http://localhost:5555/cypress').should(
      'exist'
    );
  });

  it('Creates new URL with random code', () => {
    cy.visit('/');

    cy.get('.url-label input')
      .type('mywebsite.com')
      .should('have.value', 'mywebsite.com');

    cy.contains('Submit').click();

    cy.contains(
      '.your-url',
      /^Your URL is: http:\/\/localhost:5555\/(?=.{10}$).*/
    ).should('exist');
  });
});
