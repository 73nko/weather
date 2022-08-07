describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('should render page title properly', () => {
    cy.get('h1').should('contain', "What's the Weather");
  });
});
