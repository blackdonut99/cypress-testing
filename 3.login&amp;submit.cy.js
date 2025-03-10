describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qainterview.on.joget.cloud/jw/web/userview/isr/isr/_/home') //add assertion

    cy.get('#sidebar-trigger').should("be.visible")
    cy.get('#sidebar-trigger').click(); 

    cy.get('.login_link').should("be.visible") 
    cy.get('.login_link').click();

    cy.get('#j_username').type('cat');
    cy.get('#j_password').type('password');
    cy.get('input[type="submit"][value="Login"]').click();

    cy.get('#sidebar-trigger').should("be.visible");
    cy.get('#sidebar-trigger').click(); 

    cy.get('a.dropdown').contains('Cat Grant').should("be.visible");
  })
})