const Page = require('./Page')

class RegisterPage extends Page {
    static titleGender = '#id_gender1'
    static password = '#password'
    static bdate = '#days'
    static bmonth = '#months'
    static byear = '#years'
    static checkNewsletter = '#newsletter'
    static checkSpecialOffer = '#optin'
    static firstName = '#first_name'
    static lastName = '#last_name'
    static company = '#company'
    static address1 = '#address1'
    static address2 = '#address2'
    static country = '#country'
    static state = '#state'
    static city = '#city'
    static zipcode = '#zipcode'
    static mobileNo = '#mobile_number'

    static createAccountButton = '#form > div > div > div > div > form > button'

    static createdText = '#form > div > div > div > h2'
    static continueButton = '#form > div > div > div > div > a'

    static loginAsUsername = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > i'

    static deleteAccButton = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a > i'
    static accDeleted = '#form > div > div > div > h2'


    static selectTitleGender() {
        cy.get(this.titleGender).check()
    }

    static fillPassword(data) {
        cy.get(this.password).type(data)
    }

    static selectDate(data) {
        cy.get(this.bdate).select(data)
    }

    static selectMonth(data) {
        cy.get(this.bmonth).select(data)
    }

    static selectYear(data) {
        cy.get(this.byear).select(data)
    }

    static checkBoxTicking() {
        cy.get(this.checkNewsletter).check()
        cy.get(this.checkSpecialOffer).check()
    }

    static fillFirstname(data) {
        cy.get(this.firstName).type(data)
    }

    static fillLastname(data) {
        cy.get(this.lastName).type(data)
    }

    static fillCompany(data) {
        cy.get(this.company).type(data)
    }

    static fillAddress1(data) {
        cy.get(this.address1).type(data)
    }

    static fillAddress2(data) {
        cy.get(this.address2).type(data)
    }

    static selectCountry(data) {
        cy.get(this.country).select(data)
    }

    static fillState(data) {
        cy.get(this.state).type(data)
    }

    static fillCity(data) {
        cy.get(this.city).type(data)
    }

    static fillZipcode(data) {
        cy.get(this.zipcode).type(data)
    }

    static fillMobileNo(data) {
        cy.get(this.mobileNo).type(data)
    }

    static clickCreateAccount() {
        cy.get(this.createAccountButton).click()
    }

    static verifyCreateAccount() {
        cy.get(this.createdText).should('be.visible')
    }

    static clickContinue() {
        cy.get(this.continueButton).click()
    }

    static verifyLoginAsUsername() {
        cy.get(this.loginAsUsername).should('be.visible')
    }

    static clickDeleteAccButton() {
        cy.get(this.deleteAccButton).click()
    }

    static verifyAccDeleted() {
        cy.get(this.accDeleted).should('be.visible')
    }


}

module.exports = RegisterPage