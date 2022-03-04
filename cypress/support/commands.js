// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Below I have created new command doLogin. Now I can use this doLogin in any of the test using cy.doLogin(email, password)
Cypress.Commands.add('doLogin', function(email, pass){
  cy.visit('https://admin-demo.nopcommerce.com/login')
  cy.get('input[name="Email"]').clear().type(email)
  cy.get('input[name="Password"]').clear().type(pass)
  cy.get('button[type="submit"]').click()
})
