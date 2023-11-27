describe('API 11: POST To Create/Register User Account', () => {
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
				company: 'Playtorium Solutions',
				address1: '349, SJ Infinite 1 Business Complex',
				address2: 'Vibhavadi Rangsit Rd, Chom Phon',
				country: 'Canada',
				zipcode: '10700',
				state: 'Bangkok',
				city: 'Chatuchak',
				mobile_number: '0912345678',
			},
		}).as('register')

		cy.get('@register')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(201)
				expect(data.message).to.equal('User created!')
			})
	})
})
