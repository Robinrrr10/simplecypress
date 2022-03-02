describe('Check box and drop down', function(){
  it('check box validation', function(){
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket') //To check use check()
    cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies') //To validate multiple in should use add, to get values use have.value
    cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

    cy.get('#checkbox1').uncheck().should('not.be.checked') //to uncheck use uncheck()
    cy.get('#checkbox2').uncheck().should('not.be.checked')//Use not in should by adding not
    cy.get('#checkbox3').uncheck().should('not.be.checked')

    cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])  //This is to select multiple check bock
  })

  it('Normal select drop down', function(){
    cy.get('#Skills').select('Art Design').should('have.value', 'Art Design') //To select value from normal select. use select
  })

  it('Clicking multiple drop down one by one in the list', function(){
    cy.get('#msdd').click()                              //To check on input field which has different drop down
    cy.get('.ui-corner-all').contains('Danish').click()  //Clicking on values one by one
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Thai').click()
  })

  it('Type matching value in drop down and then select suggested one', function(){
      //cy.get('.control-label').contains('Languages').click()
      //cy.get('span[role="combobox"]').click()
      cy.get('span[role="combobox"]').click({force:true})   //This is to forcefully clicking. use {force: true}
      cy.get('.select2-search__field').type('Ind')  //type is used to type text
      cy.get('.select2-search__field').type('{enter}')  //This is to press enter key in keyboard. used {enter}
  })

})
