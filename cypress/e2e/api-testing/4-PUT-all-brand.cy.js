describe('API 4: PUT To All Brands List', () => {
    it('PUT', () => {
        cy.request({
            method: 'PUT',
            url: Cypress.config().baseUrl+'api/brandsList',
            headers: { 'Content-Type': 'application/json' },
            form: true,
            body: { search_product: 'jean' },
           }).as('brandList')

           cy.get('@brandList').its('body').then(res => {
            let data = JSON.parse(res)
            expect(data.responseCode).to.equal(405) 
            expect(data.message).to.equal('This request method is not supported.')
           })
    });
});