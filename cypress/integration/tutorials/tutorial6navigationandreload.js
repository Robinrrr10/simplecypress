describe('Navigate forward/backward. Reload page', function(){
  it('Navigate, reload', function(){
    cy.visit('https://www.amazon.com')
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')

    cy.get('#nav-xshop>a[data-csa-c-slot-id="nav_cs_0"]').click({force: true})
    cy.title().should('eq', "Amazon.com - Today's Deals")
    cy.url().should('include', 'goldbox')

    cy.go('back') //To move to previous screen
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')

    cy.go('forward') //To move to next screen
    cy.title().should('eq', "Amazon.com - Today's Deals")
    cy.url().should('include', 'goldbox')

    cy.go(-1) //To move to previous screen
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')

    cy.go(1) //To move to next screen
    cy.title().should('eq', "Amazon.com - Today's Deals")
    cy.url().should('include', 'goldbox')

    cy.reload()  //To reload

  })
})
