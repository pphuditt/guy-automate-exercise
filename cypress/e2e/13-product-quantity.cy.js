const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')
const ProductDetailPage = require('../page-objects/ProductDetailPage.js');
const CartPage = require('../page-objects/CartPage.js');

describe('Test Case 13: Verify Product quantity in Cart', () => {
    
    it('Increase quantity of adding product', () => {
         // No. 2-3
         Page.navigateToURL('/')
         Page.webLoadSuccessfully()
 
         // No. 4
         HomePage.clickProductButton()
 
         // No. 5
         Page.isNavigateToAllProductPage()
         AllProductPage.isProductListVisible()
         AllProductPage.clickOnFirstViewProduct()
         Page.isNavigateProductDetail()
         ProductDetailPage.isProductDetailVisible()

         // No. 6
         ProductDetailPage.increaseProductQuantity(4)

         // No. 7
         ProductDetailPage.clickAddToCartButton()

         // No. 8
         ProductDetailPage.clickViewCart()

         // No. 9
         CartPage.verifyProductQuantity(4)
    });
});