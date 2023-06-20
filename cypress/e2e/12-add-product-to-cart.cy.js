const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const CartPage = require('../page-objects/CartPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js');


describe('Test Case 12: Add Products in Cart', () => {
    
    it('adding first product to cart', () => {
         // No. 2-3
         Page.navigateToURL('/')
         Page.webLoadSuccessfully()

         // No. 4
        HomePage.clickProductButton()
        Page.isNavigateToAllProductPage()

        // No. 5
        AllProductPage.clickAddFirstProductToCartButton()

        // No. 6
        AllProductPage.clickContinueShoppingButton()

        // No. 7
        AllProductPage.clickAddSecondProductToCartButton()

        // No. 8
        AllProductPage.clickViewCart()

        // No. 9
        CartPage.isNotCartEmpty()

        // No. 10
        CartPage.isQuantityEmpty()
        CartPage.isTotalEmpty()
    });
});