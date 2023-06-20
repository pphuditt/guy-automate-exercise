const Page = require('./Page')

class CheckOutPage extends Page {
    static addressDetailHead = '#cart_items > div > div:nth-child(2) > h2'
    static reviewOrderHead = '#cart_items > div > div:nth-child(4) > h2'
    static commentForm = '#ordermsg > textarea'
    static placeOrderButton = '#cart_items > div > div:nth-child(7) > a'
    static placeOrderSuccessAlert = "#success_message > div"

    // Delivery Address
    static deliAddrName = '#address_delivery > li.address_firstname.address_lastname'
    static deliAddr1 = '#address_delivery > li:nth-child(3)'
    static deliAddr2 = '#address_delivery > li:nth-child(4)'
    static deliAddr3 = '#address_delivery > li:nth-child(5)'
    static deliAddrCityZip = '#address_delivery > li.address_city.address_state_name.address_postcode'
    static deliAddrCountry = '#address_delivery > li.address_country_name'
    static deliAddrPhone = '#address_delivery > li.address_phone'

    // Billing Address
    static billAddrName = '#address_invoice > li.address_firstname.address_lastname'
    static billAddr1 = '#address_invoice > li:nth-child(3)'
    static billAddr2 = '#address_invoice > li:nth-child(4)'
    static billAddr3 = '#address_invoice > li:nth-child(5)'
    static billAddrCityZip = '#address_invoice > li.address_city.address_state_name.address_postcode'
    static billAddrCountry = '#address_invoice > li.address_country_name'
    static billAddrPhone = '#address_invoice > li.address_phone'

    static verifyAddressDetailHead() {
        cy.get(this.addressDetailHead).should('have.text', 'Address Details')
    }

    static verifyReviewOrderHead() {
        cy.get(this.reviewOrderHead).should('have.text','Review Your Order')
    }

    static fillCommentForm(data) {
        cy.get(this.commentForm).type(data)
    }

    static clickPlaceOrder() {
        cy.get(this.placeOrderButton).click()
    }
    
    static verifyDeliveryNameAddr(name1Data, name2Data) {
        cy.get(this.deliAddrName).should('contain',"Mr. "+name1Data+" "+name2Data)
    }

    static verifyDeliveryAddr1(companyData) {
        cy.get(this.deliAddr1).should('contain', companyData)
    }

    static verifyDeliveryAddr2(addr1Data) {
        cy.get(this.deliAddr2).should('contain', addr1Data)
    }

    static verifyDeliveryAddr3(addr2Data) {
        cy.get(this.deliAddr3).should('contain', addr2Data)
    }

    static verifyDeliveryCityZip(cityData, stateData, zipData) {
        cy.get(this.deliAddrCityZip).should('contain', cityData+" "+stateData+"\n\t\t\t\t\t\t\t\t"+zipData)
    }

    static verifyDeliveryCountry(countryData) {
        cy.get(this.deliAddrCountry).should('contain', countryData)
    }

    static verifyDeliveryPhone(phoneData) {
        cy.get(this.deliAddrPhone).should('contain', phoneData)
    }

    // Billing

    static verifyBillNameAddr(name1Data, name2Data) {
        cy.get(this.billAddrName).should('contain',"Mr. "+name1Data+" "+name2Data)
    }

    static verifyBillAddr1(companyData) {
        cy.get(this.billAddr1).should('contain', companyData)
    }

    static verifyBillAddr2(addr1Data) {
        cy.get(this.billAddr2).should('contain', addr1Data)
    }

    static verifyBillAddr3(addr2Data) {
        cy.get(this.billAddr3).should('contain', addr2Data)
    }

    static verifyBillCityZip(cityData, stateData, zipData) {
        cy.get(this.billAddrCityZip).should('contain', cityData+" "+stateData+"\n\t\t\t\t\t\t\t\t"+zipData)
    }

    static verifyBillCountry(countryData) {
        cy.get(this.billAddrCountry).should('contain', countryData)
    }

    static verifyBillPhone(phoneData) {
        cy.get(this.billAddrPhone).should('contain', phoneData)
    }
}

module.exports = CheckOutPage