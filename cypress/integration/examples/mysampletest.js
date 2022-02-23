describe('Sample Tests', function(){     //describe is  used to create test group
  it('First Test to open the page', function(){ //it is used create test
    //expect(true).to.equal(true); // just a sample assertion
    cy.visit("https://nellaicrafts.in/") //To open the web page
    //cy.pause() //To debug and go step by step by clicking.
    cy.contains('Our Products').click() //Used to find the  element using text and then clicking
    cy.url().should('include', '/shop')  //To get current url and to verify the  endpoint
    cy.get('.header-search-icon').click() //To get element using class namd and then clicking
    cy.get('#woocommerce-product-search-field-3').type('shoe').should('have.value', 'shoe') //To get element usind id and type text and verifying whether it shows typed text or // NOTE:

  })
})
