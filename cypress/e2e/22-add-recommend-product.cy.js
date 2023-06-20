const Page = require('../page-objects/Page')
const AllProductPage = require("../page-objects/AllProductPage");
const CartPage = require("../page-objects/CartPage");
const HomePage = require("../page-objects/HomePage");

describe('Test Case 22: Add to cart from Recommended items', () => {
    it('add recommend product to cart', () => {
        // No. 2
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.3
        HomePage.scrollToRecommendProduct()

        // No.4
        HomePage.isRecommendProductVisible

        // No.5
        HomePage.clickAddRecommendProduct()

        // No.6
        AllProductPage.clickViewCart()

        // No.7
        CartPage.isNotCartEmpty()
    });
});