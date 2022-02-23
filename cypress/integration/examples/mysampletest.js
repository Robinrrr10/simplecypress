describe('Sample Tests', function(){
  it('First Test to open the page', function(){
    //expect(true).to.equal(true);
    cy.visit("https://nellaicrafts.in/")
    cy.contains('Our Products').click()
    cy.url().should('include', '/shop')
    cy.get('.header-search-icon').click()
    cy.get('#woocommerce-product-search-field-3').type('shoe').should('have.value', 'shoe')

  })
})
