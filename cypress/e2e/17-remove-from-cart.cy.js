const CartPage = require('../page-objects/CartPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js');
const HomePage = require('../page-objects/HomePage.js');

describe('Test Case 17: Remove Products From Cart', () => {
    it('add product and then remove', () => {
        // No. 2-3
        HomePage.navigateToURL('/')
        HomePage.webLoadSuccessfully()

        // No.4
        AllProductPage.clickAddFirstProductToCartButton()

        // No.5
        AllProductPage.clickViewCart()

        // No.6
        HomePage.isNavigateTo('view_cart')

        // No.7
        CartPage.clickRemoveProduct()

        // No.8
        CartPage.isCartEmpty()

    });
});