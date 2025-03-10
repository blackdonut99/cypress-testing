describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home')
    cy.get('.brand').should("be.visible") //assertion
  })
})


// ID Selector
// Syntax: cy.get('#elementID')
// Example: cy.get('#loginForm')

// Class Selector
// Syntax: cy.get('.className')
// Example: cy.get('.btn.waves-effect')

// Attribute Selector
// Syntax: cy.get('[attribute="value"]')
// Example: cy.get('[type="submit"]')

// Tag Selector
// Syntax: cy.get('tagname')
// Example: cy.get('button')

// Name Attribute Selector
// Syntax: cy.get('[name="elementName"]')
// Example: cy.get('[name="j_username"]')

// XPath Selector (using plugin cypress-xpath)
// Syntax: cy.xpath('XPathExpression')
// Example: cy.xpath('//input[@id="j_username"]')

// Contains Text
// Syntax: cy.contains('text')
// Example: cy.contains('Login')

// Combination of Tag and Class
// Syntax: cy.get('tagname.className')
// Example: cy.get('a.btn')

// Child Element Selector
// Syntax: cy.get('parent child')
// Example: cy.get('form input')

// Descendant Selector
// Syntax: cy.get('parent > child')
// Example: cy.get('ul > li')

// Nth Child Selector
// Syntax: cy.get(':nth-child(n)')
// Example: cy.get('li:nth-child(2)')

// Attribute Contains Selector
// Syntax: cy.get('[attribute*="partialValue"]')
// Example: cy.get('[class*="waves-effect"]')