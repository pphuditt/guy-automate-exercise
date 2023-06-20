const Page = require('../page-objects/Page.js')
const CartPage = require('../page-objects/CartPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js');

describe('Test Case 17: Remove Products From Cart', () => {
    it('add product and then remove', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4
        AllProductPage.clickAddFirstProductToCartButton()

        // No.5
        AllProductPage.clickViewCart()

        // No.6
        Page.isNavigateToCart()

        // No.7
        CartPage.clickRemoveProduct()

        // No.8
        CartPage.isCartEmpty()

    });
});