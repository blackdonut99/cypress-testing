describe('disappear navbar', () => {
  it('passes', () => {
    cy.visit('https://www.joget.com/')
    
    cy.wait(2000)

    // Remove the navigation bar and the primary menu
    cy.document().then((doc) => {
      const navbar = doc.querySelector('.container-fluid.joget-container');
      const primaryMenu = doc.querySelector('.primary-menu-top');
      
      if (navbar) {
        navbar.remove();
      }

      if (primaryMenu) {
        primaryMenu.remove();
      }
    })
  })
})
