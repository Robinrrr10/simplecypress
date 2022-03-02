/// <reference types="cypress" />

describe('UI elements', function(){
  it('Validating UI elements', function(){
    cy.visit('https://demo.guru99.com/test/newtours/') //To go to webpage
    cy.title().should('eq', 'Welcome: Mercury Tours') //To validate title.
    cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury') //To check whether input  field is visible and enabled or not. then typed user name
    cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury') //To check whether input password field is visible and enabled or not. then typed password
    cy.get('input[name="submit"]').should('be.visible').should('be.enabled').click() //clicked submit button
    cy.get('h3').should('have.text', 'Login Successfully') //To validate the text after login
    cy.url().should('include', 'login_sucess') //To check the  url after login
    cy.get('a[href="reservation.php"]').click() //To click on the option
    cy.title().should('eq', 'Find a Flight: Mercury Tours:') //To check the title
    cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked') //To check the radio button is visible and checked or not
    cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click() //To check the radio button is enabled and not checked. then checked by clicking
    cy.get('input[value="oneway"]').should('be.visible').should('be.checked') //Then validating after checked
    cy.get('input[value="roundtrip"]').should('be.visible').should('not.be.checked') //Validating other value. it should uncheck
    cy.get('input[name="findFlights"]').should('be.visible').should('be.enabled').click() //Click button

  })
})
