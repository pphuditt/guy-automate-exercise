describe('API 3: Get All Brands List', () => {
    it('Get', () => {
        cy.request({
            method: "GET",
            url: Cypress.config().baseUrl+"api/brandsList"
        }).as('res')

        cy.get('@res').its('status').should('equal', 200)
    });
});