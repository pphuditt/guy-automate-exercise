const Page = require('./Page')

class CartPage extends Page {
    static cart = '#cart_info_table > tbody'
    static quantity = '#product-1 > td.cart_quantity'
    
    static total = '#product-1 > td.cart_total'

    static checkOutButton = '#do_action > div.container > div > div > a'

    static registerLogin = '#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a'

    static removeProduct = '#product-1 > td.cart_delete > a'

    static cartEmpty = '#empty_cart'

    static isNotCartEmpty() {
        cy.get(this.cart).children().should('not.be.empty')
    }
    
    static isQuantityEmpty() {
        cy.get(this.quantity).should('not.be.empty')
    }

    static isTotalEmpty() {
        cy.get(this.total).should('not.be.empty')
    }

    static verifyProductQuantity(amt) {
        cy.get(this.quantity).should('contain', amt)
    }

    static clickCheckOut() {
        cy.get(this.checkOutButton).click()
    }

    static clickRegisterLogin() {
        cy.get(this.registerLogin).click()
    }

    static clickRemoveProduct() {
        cy.get(this.removeProduct).click()
    }

    static isCartEmpty() {
        cy.get(this.cartEmpty).should('be.visible')
    }

}

module.exports = CartPage