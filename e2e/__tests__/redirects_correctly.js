describe('Redirects Correctly', () => {
  beforeEach(async () => {
    await fetch('http://localhost:5555/api/clean-up-and-seed');
  });

  it('Goes back to homepage with param if not found', () => {
    cy.visit('/not-a-real-url');

    cy.url().should('equal', 'http://localhost:5555/?notFound=true');
  });

  it('Redirects correctly if found', () => {
    cy.visit('/bs');

    cy.url().should('equal', 'https://brunospitti.com/');
  });
});
