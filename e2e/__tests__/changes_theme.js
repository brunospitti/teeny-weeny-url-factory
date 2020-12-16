describe('Theme change', () => {
  it('Changes theme on click', () => {
    cy.visit('/');
    cy.contains('☀️').click();
    cy.get('#app div')
      .first()
      .should('have.css', 'background-color', 'rgb(245, 245, 245)');
    cy.contains('🌚').click();
    cy.get('#app div').first().should('have.css', 'background-color', 'rgb(25, 33, 37)');
  });
});
