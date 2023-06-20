class Page {
	static navigateToURL(url) {
		cy.visit(url)
	}

    static webLoadSuccessfully() {
        cy.url().should('exist')
    }

    static isNavigateToLoginPage() {
        cy.url().should('equal', Cypress.config().baseUrl+'login')
    }

    static isNavigateToHomePage() {
        cy.url().should('equal', Cypress.config().baseUrl)
    }

    static isNavigateToTestCasesPage() {
        cy.url().should('equal', Cypress.config().baseUrl+'test_cases')
    }

    static isNavigateToAllProductPage() {
        cy.url().should('equal', Cypress.config().baseUrl+'products')
    }

    static isNavigateProductDetail() {
        cy.url().should('contain', Cypress.config().baseUrl+'product_details/')
    }

    static isNavigateToCart() {
        cy.url().should('equal', Cypress.config().baseUrl+'view_cart')
    }
}

module.exports = Page
