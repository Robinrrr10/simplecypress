///<reference types="cypress" />  //This is to show

describe('Meesho', function(){
  it('Search the product and add to cart and verify', function(){

    cy.visit('https://meesho.com') //Go to this url

    cy.get('.search-input-elm').type('Shoe').type('{enter}') //Search Shoe

    cy.wait(5000)  //waiting for 5 sec

    cy.get('#__next > div.sc-bdvvtL.ProductListingSearchDesktop__ContainerStyled-sc-7ofwvj-1.byHcNc.gzSScG > div > div.sc-bdvvtL.ProductList__PLPContainer-sc-8lnc8o-1.byHcNc.eVzmpH > div > div:nth-child(2) > a > div > div.Card__BaseCard-sc-b3n78k-0.dUNFgg.NewProductCard__DetailCard_Desktop-sc-j0e7tu-2.fqvaeS.NewProductCard__DetailCard_Desktop-sc-j0e7tu-2.fqvaeS > p').click() //Clicking one of the shoe

    cy.get('#__next > div.sc-bdvvtL.Pagestyled__ContainerStyled-sc-ynkej6-0.byHcNc.eVBxUC > div > div.sc-dkPtRN.kfnIzE > div:nth-child(2) > div > div > span:nth-child(3) > span').click() //click on size

    cy.get('#__next > div.sc-bdvvtL.Pagestyled__ContainerStyled-sc-ynkej6-0.byHcNc.eVBxUC > div > div.sc-dkPtRN.kfnIzE > div.Card__BaseCard-sc-b3n78k-0.irlVhK.ShippingInfo__DetailCard-sc-dflqn4-0.cYnJAT.ShippingInfo__DetailCard-sc-dflqn4-0.cYnJAT > div.Card__BaseCard-sc-b3n78k-0.ftaSSh.ShippingInfo__PriceRow-sc-dflqn4-2.TEOer.ShippingInfo__PriceRow-sc-dflqn4-2.TEOer > h4').contains('398') //Validate price

    cy.get('.caYqEj').click() //Click add cart

    cy.get('[placeholder="Try Saree, Kurti or Search by Product Code"]>input').type('hey hey') //Type in search

    cy.wait(5000) //Waiting for 5 sec

    cy.get('[placeholder="Try Saree, Kurti or Search by Product Code"]>input').clear()  //Clear the search

  })

})
