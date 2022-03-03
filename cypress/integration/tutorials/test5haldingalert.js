/// <reference types="cypress" />

describe('Alert Handling', function(){
  it('Handling normal alert', function(){
    cy.visit('/cypress/downloads/alert.html')
    cy.get('button').click()
    cy.on('window:alert', (message) => {  //To get normal alert message use window:alert
      expect(message).to.equal('this is my alert') //Validating message
    })
  })

  it('Handling confirmation alert', function(){
    cy.visit('http://testautomationpractice.blogspot.com')
    cy.get('#HTML9 > div.widget-content > button').click()
    cy.on('window:confirm', (message) => {  //To get confirmation alert message use window:confirm
      expect(message).to.equal('Press a button!') //validating message
    })
  })
})
