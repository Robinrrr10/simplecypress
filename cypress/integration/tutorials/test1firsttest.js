describe('Flipkart', function(){ //This is to create suite. It takes suite name and function
  it('Launch flipkart and verify title', function(){ //This is to create suite. It takes test name and function
    cy.visit('https://flipkart.com') //This is to open this url in browser
    cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!') //cy.title() to get title of current webpage. should() is the assertion. 'eq' means equal to. then we are giving expected
  })
  it('This test is created for failing', function(){
    cy.visit('https://flipkart.com')
    cy.title().should('eq', 'my title')
  })
})
