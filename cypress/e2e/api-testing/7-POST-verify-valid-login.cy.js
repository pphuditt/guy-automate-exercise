describe('API 7: POST To Verify Login with valid details', () => {
	it('valid login with email and password', () => {
		cy.request({
			method: 'POST',
			url: Cypress.config().baseUrl + 'api/verifyLogin',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { email: 'gautomatetest@gmail.com', password: '123456' },
		}).as('validLogin')

		// cy.get('@validLogin').its('status').should('equal', 200)

		cy.get('@validLogin')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(200)
			})
	})
})
