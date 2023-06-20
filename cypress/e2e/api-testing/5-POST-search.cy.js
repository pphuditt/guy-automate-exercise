describe('API 5: POST To Search Product', () => {
    it('POST', () => {
        cy.request({
            method: 'POST',
            url: Cypress.config().baseUrl+'api/searchProduct',
            headers: { 'Content-Type': 'application/json' },
            form: true,
            body: { search_product: 'jean' },
           }).as('searchProduct')

           cy.get('@searchProduct').its('body').then(res => {
            let data = JSON.parse(res)
            expect(data.responseCode).to.equal(200)
           })
    });
});