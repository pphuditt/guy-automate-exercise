describe('API 8: POST To Verify Login without email parameter', () => {
	it('login with password only', () => {
		cy.request({
			method: 'POST',
			url: Cypress.config().baseUrl + 'api/verifyLogin',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { password: '123456' },
		}).as('login')

		cy.get('@login')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(400)
				expect(data.message).to.equal(
					'Bad request, email or password parameter is missing in POST request.'
				)
			})
	})
})
