class Page {
	static navigateToURL(url) {
		cy.visit(url)
	}

    static webLoadSuccessfully() {
        cy.url().should('exist')
    }

    static isNavigateTo(uri) {
        cy.url().should('contain', Cypress.config().baseUrl+uri)
    }

    static isNavigateToHomePage() {
        cy.url().should('equal', Cypress.config().baseUrl)
    }

}

module.exports = Page
