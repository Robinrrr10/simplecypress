class HomePage {

  nopCommerceLocator = "#nopcommerce-news-box > div.card-body > div > div:nth-child(1) > div > div.card-header.clearfix > a"

  clickNopCommerce(){
    cy.get('#nopcommerce-news-box > div.card-body > div > div:nth-child(1) > div > div.card-header.clearfix > a').click({force: true})
    return this
  }

}

export default HomePage
