describe('API 16: DELETE METHOD To Delete User Account but no user account', () => {
	it('delete user', () => {
		cy.request({
			method: 'DELETE',
			url: Cypress.config().baseUrl + 'api/deleteAccount',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { email: '1234abcd5678@gmail.com', password: '123456' },
		}).as('delete')

		cy.get('@delete')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(404)
			})
	})
})
