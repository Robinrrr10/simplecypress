describe('Using custom command', function(){
  it('login and validate', function(){
    cy.doLogin('admin@yourstore.com', 'admin') //Here we are calling our own created doLogin method
    cy.log('....Test1...')
  })

  it('login and do somthing', function(){
    cy.doLogin('admin@yourstore.com', 'admin') //Here we are calling our own created doLogin method
    cy.log('....Test2...')
  })

  it('login and do different', function(){
    cy.doLogin('admin@yourstore.com', 'admin') //Here we are calling our own created doLogin method
    cy.log('....Test3...')
  })

  it('login with valid and invalid data', function(){
    cy.doLogin('admin@yourstore.com', 'admin') //Here we are calling our own created doLogin method
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

    cy.doLogin('invalid@yourstore.com', 'admininvalid') //Here we are calling our own created doLogin method
    cy.get('div.validation-summary-errors>ul>li').should('have.text', 'No customer account found')

    cy.doLogin('fdafadaaa', '2432432432') //Here we are calling our own created doLogin method
    cy.get('#Email-error').should('have.text', 'Wrong email')
  })
})
