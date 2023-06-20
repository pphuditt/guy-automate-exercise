const Page = require('./Page')

class ContactUsPage extends Page {
    static getInTouchText = '#contact-page > div.row > div.col-sm-8 > div > h2'
    static nameFillForm = '#contact-us-form > div:nth-child(2) > input'
    static emailFillForm = '#contact-us-form > div:nth-child(3) > input'
    static subjectFillForm = '#contact-us-form > div:nth-child(4) > input'
    static messageFillForm = '#message'

    static fileAttachForm = '#contact-us-form > div:nth-child(6) > input'

    static submitButton = '#contact-us-form > div:nth-child(7) > input'

    static successText = '#contact-page > div.row > div.col-sm-8 > div > div.status.alert.alert-success'

    static goHomeButton = '#form-section > a'

    static isGetInTouchVisible() {
        cy.get(this.getInTouchText).should('contain.html', 'Get In Touch')
    }

    static fillNameForm(data) {
        cy.get(this.nameFillForm).type(data)
    }

    static fillEmailForm(data) {
        cy.get(this.emailFillForm).type(data)
    }

    static fillSubjectForm(data) {
        cy.get(this.subjectFillForm).type(data)
    }

    static fillMessageForm(data) {
        cy.get(this.messageFillForm).type(data)
    }

    static attachingFile() {
        cy.get(this.fileAttachForm).selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'test.txt',
        })
    }

    static clickSubmitButton() {
        cy.get(this.submitButton).click()
    }

    static isSuccessTextVisible() {
        cy.get(this.successText).should('be.visible')
    }

    static clickHomeButtton() {
        cy.get(this.goHomeButton).click()
    }

} 

module.exports = ContactUsPage