describe('Table test', function(){
  it('Validating value in table', function(){
    cy.visit('http://testautomationpractice.blogspot.com/')

    //To check whether value presend any where in the table or not
    cy.get('table[name=BookTable]').contains('td', 'Javascript').should('be.visible') //td is the tag name. It can be child or inside sub child of matching get elements

    //To check whether value present in specific row and column
    cy.get('table[name=BookTable]>tbody>tr:nth-child(5)>td:nth-child(3)').contains('Selenium').should('be.visible')  //tr:nth-child(5) - it is 5th row. td:nth-child(3) - it is 3rd column

    //Check whether author Amod bookname is Master in Java or // NOTE:
      cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e1, index, $list) => {
      var text = $e1.text()
      if(text.includes('Amod')){
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bnam){
          var book = bnam.text()
          expect(book).to.equal('Master In Java')
        })
      }
    })


  })
})
