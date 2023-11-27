describe('API 2: POST To All Products List', () => {
	it('Post to all products list', () => {
		cy.request({
			method: 'POST',
			url: Cypress.config().baseUrl + 'api/productsList',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { search_product: 'jean' },
		}).as('searchProduct')

		cy.get('@searchProduct')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(405)
				expect(data.message).to.equal('This request method is not supported.')
			})
	})
})
