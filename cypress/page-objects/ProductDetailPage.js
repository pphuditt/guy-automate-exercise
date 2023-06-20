const Page = require('./Page')

class ProductDetailPage extends Page {
    static productName = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2'
    static productCategory = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(3)'
    static productPrice = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span'
    static productAvailability = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(6)'
    static productCondition = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(7)'
    static productBrand = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(8)'

    static productQuantity = '#quantity'

    static addToCartButton = 'body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > button'

    static viewCart = '#cartModal > div > div > div.modal-body > p:nth-child(2) > a'

    static writeYourReview = 'body > section > div > div > div.col-sm-9.padding-right > div.category-tab.shop-details-tab > div.col-sm-12 > ul > li > a'

    static nameReviewer = '#name'

    static emailReviewer = '#email'

    static reviewField = '#review'

    static reviewSubmitButton = '#button-review'

    static reviewSubmitText = '#review-section > div > div > span'


    static isProductDetailVisible() {
        cy.get(this.productName).should('be.visible')
        cy.get(this.productCategory).should('be.visible')
        cy.get(this.productPrice).should('be.visible')
        cy.get(this.productAvailability).should('be.visible')
        cy.get(this.productCondition).should('be.visible')
        cy.get(this.productBrand).should('be.visible')
    }

    static increaseProductQuantity(amt) {
        cy.get(this.productQuantity).clear().type(amt)
    }

    static clickAddToCartButton() {
        cy.get(this.addToCartButton).click()
    }

    static clickViewCart() {
        cy.get(this.viewCart).click()
    }

    static isWriteReviewVisible() {
        cy.get(this.writeYourReview).should('be.visible')
    }

    static fillNameReviewer(nameData) {
        cy.get(this.nameReviewer).type(nameData)
    }

    static fillEmailReviewer(emailData) {
        cy.get(this.emailReviewer).type(emailData)
    }

    static fillReview(reviewText) {
        cy.get(this.reviewField).type(reviewText)
    }

    static clickSubmitReviewButton() {
        cy.get(this.reviewSubmitButton).click()
    }

    static isReviewSuccessVisible() {
        cy.get(this.reviewSubmitText).should('be.visible').and('contain', 'Thank you for your review.')
    }
}

module.exports = ProductDetailPage