const Page = require('./Page')

class PaymentPage extends Page {
    static nameOnCard = '#payment-form > div:nth-child(2) > div > input'
    static cardNo = '#payment-form > div:nth-child(3) > div > input'
    static cvc = '#payment-form > div:nth-child(4) > div.col-sm-4.form-group.cvc > input'
    static expirationMonth = '#payment-form > div:nth-child(4) > div:nth-child(2) > input'
    static expirationYear = '#payment-form > div:nth-child(4) > div:nth-child(3) > input'
    static payButton = '#submit'
    static invoiceButton = '#form > div > div > div > a'
    static continueButton = '#form > div > div > div > div > a'

    static fillNameOnCard(data) {
        cy.get(this.nameOnCard).type(data)
    }

    static fillCardNo(data) {
        cy.get(this.cardNo).type(data)
    }

    static fillCVC(data) {
        cy.get(this.cvc).type(data)
    }

    static fillExpiration(data1, data2) {
        cy.get(this.expirationMonth).type(data1)
        cy.get(this.expirationYear).type(data2)
    }

    static clickPayButton() {
        cy.get(this.payButton).click()
    }
    
    static verifyPlaceOrderSuccess() {
        cy.get(this.placeOrderSuccess).should('contain.text' ,'Your order has been placed successfully!' )
    }

    static clickDownloadInvoice() {
        cy.get(this.invoiceButton).click()
    }

    static verifyInvoiceDownload() {
        cy.verifyDownload('Guy-automation-exercise/cypress/downloads/invoice.txt')
    }

    static clickContinueButton() {
        cy.get(this.continueButton).click()
    }
}

module.exports = PaymentPage