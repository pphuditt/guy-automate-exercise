const Page = require('./Page')
const Register = require('./RegisterPage')

class SignUpPage extends Page {
    static nameInput = '#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)'
    static emailInput = '#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)'
    static signupButton = '#form > div > div > div:nth-child(3) > div > form > button'

    static signupText = '#form > div > div > div > div > h2'

    static user = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)'
    static pwd = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)'
    static loginButton = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button'

    static loginFail = '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p'

    static alreadyExisted = '#form > div > div > div:nth-child(3) > div > form > p'

    static fillName(nameData) {
        cy.get(this.nameInput).type(nameData)
    }

    static fillEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    static clickSignUpButton() {
        cy.get(this.signupButton).click()
        cy.get(this.signupText).should('be.visible')
    }

    static fillUsername(data) {
        cy.get(this.user).type(data)
    }

    static fillPassword(data) {
        cy.get(this.pwd).type(data)
    }

    static clickLoginButton() {
        cy.get(this.loginButton).click()
        // Register.verifyLoginAsUsername()
    }

    static verifyLoginFail() {
        cy.get(this.loginFail).should('be.visible')
    }

    static accountIsAlreadyExisted() {
        cy.get(this.alreadyExisted).should('be.visible')
    }
}

module.exports = SignUpPage



