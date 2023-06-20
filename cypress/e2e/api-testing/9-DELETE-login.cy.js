describe('API 9: DELETE To Verify Login', () => {
    it('delete', () => {
        cy.request({
            method: 'DELETE',
            url: Cypress.config().baseUrl+'api/verifyLogin'
        }).as('login')

        cy.get('@login').its('body').then(res => {
            let data = JSON.parse(res)
            expect(data.responseCode).to.equal(405)
           })
    });
});