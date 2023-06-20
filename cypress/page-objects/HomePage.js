const Page = require('./Page')

class HomePage extends Page {
    
    static loginIcon = ".fa.fa-lock"
    static contactUs = ".fa.fa-envelope"
    static testCase = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a'
    static cartIcon = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a'

    static productButton = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a'

    static footer = '#footer > div.footer-widget'

    static subscriptionText = '#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2'

    static emailSubscript = '#susbscribe_email'

    static subscribeButton = '#subscribe'

    static subscribeAlert = '#success-subscribe > div'

    static recommendProduct = 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.recommended_items > h2'

    static addFromRecommend = '#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > a'

    static arrowUp = '#scrollUp'

    static topPageText = '#slider-carousel > div > div.item.active > div:nth-child(1) > h2'

    static clickLoginButton() {
        cy.get(this.loginIcon).click()
    }

    static clickCartIcon() {
        cy.get(this.cartIcon).click()
    }

    static verifyNewUserSignUp() {
        cy.contains('New User Signup!').should('be.visible')
    }

    static verifyLogintoYourAccount() {
        cy.contains('Login to your account').should('be.visible')
    }

    static clickLogOutButton() {
        cy.get(this.loginIcon).click()
    }

    static clickContactUs() {
        cy.get(this.contactUs).click()
    }

    static clickTestCase() {
        cy.get(this.testCase).click()
    }

    static clickProductButton() {
        cy.get(this.productButton).click()
    }

    static scrollToFooter() {
        cy.get(this.footer).scrollIntoView()
    }

    static isTextSubscription() {
        cy.get(this.subscriptionText).should('have.text', 'Subscription')
    }

    static fillSubscriptEmail(data) {
        cy.get(this.emailSubscript).type(data)
    }

    static clickSubscribeButton() {
        cy.get(this.subscribeButton).click()
    }

    static verifySubscriptAlert() {
        cy.get(this.subscribeAlert).should('be.visible')
    }

    static scrollToRecommendProduct() {
        cy.get(this.recommendProduct).scrollIntoView()
    }

    static isRecommendProductVisible() {
        cy.get(this.recommendProduct).should('be.visible')
    }

    static clickAddRecommendProduct() {
        cy.get(this.addFromRecommend).click()
    }

    static clickArrowUp() {
        cy.get(this.arrowUp).click()
    }

    static isScrollToTop() {
        cy.get(this.topPageText).should('be.visible')
    }

    static scrollToTop() {
        cy.get(this.topPageText).scrollIntoView()
    }
} 

module.exports = HomePage