describe('API 13: PUT METHOD To Update User Account', () => {
	it('PUT to update user', () => {
		cy.request({
			method: 'PUT',
			url: Cypress.config().baseUrl + 'api/updateAccount',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: {
				name: 'guyguy',
				email: 'gautomatetest@gail.com',
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
		}).as('update')

		cy.get('@update')
			.its('body')
			.then(res => {
				let data = JSON.parse(res)
				expect(data.responseCode).to.equal(200)
				expect(data.message).to.equal('User updated!')
			})
	})
})
