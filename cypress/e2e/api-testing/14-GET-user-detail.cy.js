describe('API 14: GET user account detail by email', () => {
	it('GET user detail', () => {
		cy.request({
			method: 'GET',
			url:
				Cypress.config().baseUrl +
				'api/getUserDetailByEmail?email=gautomatetest@gmail.com',
			headers: { 'Content-Type': 'application/json' },
			// form: true,
			// body: { email: '' },
		}).as('detail')

		cy.get('@detail')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(200)
			})
	})
})
