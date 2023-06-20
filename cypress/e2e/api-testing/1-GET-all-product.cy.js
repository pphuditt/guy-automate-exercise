describe('API 1: Get All Products List', () => {
    it('Get all products list', () => {
        cy.request({
            method: "GET",
            url: "https://automationexercise.com/api/productsList"
        }).as('res')

        // get status code
        cy.get('@res').its('status').should('equal', 200)

    });
});

