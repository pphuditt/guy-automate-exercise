describe('API 17: POST To Create/Register User Account with missing field', () => {
	it('POST', () => {
		cy.request({
			method: 'POST',
			url: Cypress.config().baseUrl + 'api/createAccount',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: {
				name: 'guyguy',
				email: 'gautomatetest@gmail.com',
				password: '123456',
				title: 'Mr',
				birth_date: '3',
				birth_month: '8',
				birth_year: '2001',
				firstname: 'Phudit',
				lastname: 'Tanaworawarit',
				address1: '349, SJ Infinite 1 Business Complex',
				address2: 'Vibhavadi Rangsit Rd, Chom Phon',
				country: 'Canada',
				zipcode: '10700',
				state: 'Bangkok',
				city: 'Chatuchak',
			},
		}).as('register')

		cy.get('@register')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(400)
			})
	})
})
