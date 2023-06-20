const Page = require('./Page')

class AllProductPage extends Page {
    static productLists = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div'

    static viewFirstProduct = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a'

    static saerchInput = '#search_product'

    static searchButton = '#submit_search'

    static searchedProduct = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div'

    static searchResult = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div.col-sm-4 > div > div.single-products > div.productinfo.text-center > p'

    static addFirstProductToCart = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a'

    static addSecondProductToCart = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center > a'

    static continueShoppingButton = '#cartModal > div > div > div.modal-footer > button'

    static viewCart = '#cartModal > div > div > div.modal-body > p:nth-child(2) > a'

    static categoryColumn = 'body > section > div > div.row > div.col-sm-3'

    static womenCat = '#accordian > div:nth-child(1) > div.panel-heading > h4 > a'

    static menCat = '#accordian > div:nth-child(2) > div.panel-heading > h4 > a'    

    static menSubCat = '#Men > div > ul > li:nth-child(1) > a'

    static womenTopSubCat = '#Women > div > ul > li:nth-child(2) > a'

    static catText = 'body > section > div > div.row > div.col-sm-9.padding-right > div > h2'

    static brandColumn = 'body > section > div > div.row > div.col-sm-3 > div > div.brands_products'

    static brandButton = 'body > section > div > div.row > div.col-sm-3 > div > div.brands_products > div > ul > li:nth-child(1) > a'

    static otherBrandButton = 'body > section > div > div.row > div.col-sm-3 > div > div.brands_products > div > ul > li:nth-child(2) > a'

    static isProductListVisible() {
        cy.get(this.productLists).should('be.visible')
    }

    static clickOnFirstViewProduct() {
        cy.get(this.viewFirstProduct).click()
    }

    static fillSearchBar(data) {
        cy.get(this.saerchInput).type(data)
    }
    static clickSearchButton() {
        cy.get(this.searchButton).click()
    }

    static isSearchedProductVisible() {
        cy.get(this.searchedProduct).should('not.be.empty')
    }

    static verifySearchResult(data) {
        cy.get(this.searchResult).should('contain', data, {matchCase: false})
    }

    static clickAddFirstProductToCartButton() {
        cy.get(this.addFirstProductToCart).click()
    }

    static clickAddSecondProductToCartButton() {
        cy.get(this.addSecondProductToCart).click()
    }

    static clickContinueShoppingButton() {
        cy.get(this.continueShoppingButton).click()
    }

    static clickViewCart() {
        cy.get(this.viewCart).click()
    }

    static isCategoryVisible() {
        cy.get(this.categoryColumn).should('be.visible')
    }
        
    static clickWomenCat() {
        cy.get(this.womenCat).click()
    }
        
    static clickTopSubCat() {
        cy.get(this.womenTopSubCat).click()
    }

    static verifyCategoryText() {
        cy.get(this.catText).should('contain', "Women - Tops Products")
    }

    static clickOnMenCat() {
        cy.get(this.menCat).click()
    }

    static clickOnMenSubCat() {
        cy.get(this.menSubCat).click()
    }

    static isNavigateToCategory() {
        cy.url().should('contain', Cypress.config().baseUrl+"category_products")
    }

    static isBrandColumnVisible() {
        cy.get(this.brandColumn).should('be.visible')
    }

    static clickOnAnyBrandButton() {
        cy.get(this.brandButton).click()
    }

    static isNavigateToBrandPage() {
        cy.url().should('contain', Cypress.config().baseUrl+'brand_products/')
    }

    static clickOnOtherBrand() {
        cy.get(this.otherBrandButton).click()
    }
} 

module.exports = AllProductPage