const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')
const ProductDetailPage = require('../page-objects/ProductDetailPage.js')

describe('Test Case 8: Verify All Products and product detail page', () => {
    
    it('verifying all product', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No. 4
        HomePage.clickProductButton()

        // No. 5
        Page.isNavigateToAllProductPage()

        // No. 6
        AllProductPage.isProductListVisible()

        // No. 7
        AllProductPage.clickOnFirstViewProduct()

        // No. 8
        Page.isNavigateProductDetail()

        // No. 9
        ProductDetailPage.isProductDetailVisible()
    });
});