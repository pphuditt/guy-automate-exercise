describe('API 6: POST To Search Product without search_product parameter', () => {
	it('POST without seach parameter', () => {
		cy.request({
			method: 'POST',
			url: Cypress.config().baseUrl + 'api/searchProduct',
			headers: { 'Content-Type': 'application/json' },
			form: true,
		}).as('searchProduct')

		cy.get('@searchProduct')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(400)
				expect(data.message).to.equal(
					'Bad request, search_product parameter is missing in POST request.'
				)
			})
	})
})
