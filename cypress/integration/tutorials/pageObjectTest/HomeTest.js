import HomePage from '../pageObject/HomePage'
import LoginPage from '../pageObject/LoginPage'

describe('Home page test', function(){
  it('Click nop commerce link and verify', function(){
    var hm = new HomePage()
    login()
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    hm.clickNopCommerce()
    cy.title().should('be.equal', 'Copyright removal key - nopCommerce')
  })
})

function login(){
  var lp = new LoginPage()
  lp.openLoginPage()
  lp.giveEmail('admin@yourstore.com')
  lp.givePassword('admin')
  lp.submitLogin()
}
