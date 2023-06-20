describe('API 2: POST To All Products List', () => {

    const data = {
        id: 44,
    }
    
    it('Post to all products list', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            body: data
        }).then((data) => {
            expect(JSON.parse(data).responseCode).to.eq(200)
            expect(JSON.parse(data).products.id).to.eq(33)
      })

    });
});