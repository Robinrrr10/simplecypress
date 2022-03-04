class LoginPage {

  url = "https://admin-demo.nopcommerce.com/login"
  emailLocator = "#Email"
  passwordLocator = "#Password"
  submitLocator = "button[type=submit]"

  openLoginPage(){
    cy.visit(this.url)
    return this
  }

  giveEmail(email){
    cy.get(this.emailLocator).clear().type(email)
    return this
  }

  givePassword(password){
    cy.get(this.passwordLocator).clear().type(password)
    return this
  }

  submitLogin(){
    cy.get(this.submitLocator).click()
    return this
  }
}

export default LoginPage
