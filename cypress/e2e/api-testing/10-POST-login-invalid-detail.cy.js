describe('API 10: POST To Verify Login with invalid details', () => {
    it('login with invalid detail', () => {
        cy.request({
            method: 'POST',
            url: Cypress.config().baseUrl+'api/verifyLogin',
            headers: { 'Content-Type': 'application/json' },
            form: true,
            body: { email: "gautomatetesting@gmail.com", password: "123" },
           }).as('login')

           cy.get('@login').its('body').then(res => {
            let data = JSON.parse(res)
            expect(data.responseCode).to.equal(404)
           })   
    });
});