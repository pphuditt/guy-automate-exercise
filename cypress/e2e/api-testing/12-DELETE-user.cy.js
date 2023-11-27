describe('API 12: DELETE METHOD To Delete User Account', () => {
	it('delete user', () => {
		cy.request({
			method: 'DELETE',
			url: Cypress.config().baseUrl + 'api/deleteAccount',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { email: 'gautomatetest@gmail.com', password: '123456' },
		}).as('delete')

		cy.get('@delete')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(200)
				expect(data.message).to.equal('Account deleted!')
			})
	})
})
