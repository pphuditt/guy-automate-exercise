describe('API 15: GET user account detail by email but no user account', () => {
	it('GET user detail', () => {
		cy.request({
			method: 'GET',
			url:
				Cypress.config().baseUrl +
				'api/getUserDetailByEmail?email=Maprang210801@gmail.com',
			headers: { 'Content-Type': 'application/json' },
			// form: true,
			// body: { email: '' },
		}).as('detail')

		cy.get('@detail')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(404)
			})
	})
})
