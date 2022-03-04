import LoginPage from '../pageObject/LoginPage'

describe('All Login Test', function(){
  it('Valid login and verify', function(){
    var lp = new LoginPage()
    lp.openLoginPage()
    lp.giveEmail('admin@yourstore.com')
    lp.givePassword('admin')
    lp.submitLogin()
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
  })
})
