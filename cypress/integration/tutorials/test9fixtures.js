describe('Fixtures', function(){

  var loginData

  before(function(){
    cy.fixture('logindata').then(function(data){ //We should give fixture file name same as file name in fixture directory. If the file is available other than fixtures then give full path
      this.loginData = data      //Passing the local data to class variable loginData
    })
  })

  it('Login', function(){

    cy.visit('https://admin-demo.nopcommerce.com/login')

    cy.get('input[name="Email"]').clear().type(this.loginData.email)  //Using the fixture data here. Here we give same field namme in json
    cy.get('input[name="Password"]').clear().type(this.loginData.password)

    cy.get('button[type="submit"]').click()

  })
})
