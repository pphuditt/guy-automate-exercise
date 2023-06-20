const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js');
const AllProductPage = require('../page-objects/AllProductPage.js');
const CartPage = require('../page-objects/CartPage.js');
const SignUpPage = require('../page-objects/SignUpPage.js');

describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('related search products', function()  {
        // No. 2
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.3
        HomePage.clickProductButton()
        // No.4
        Page.isNavigateToAllProductPage()

        // No.5
        AllProductPage.fillSearchBar(this.data.SearchKeyword)
        AllProductPage.clickSearchButton()
        // No.6
        AllProductPage.isSearchedProductVisible()
        
        // No.7
        AllProductPage.verifySearchResult(this.data.SearchKeyword)

        // No.8
        AllProductPage.clickAddFirstProductToCartButton()
        AllProductPage.clickContinueShoppingButton()
        AllProductPage.clickAddSecondProductToCartButton()

        // No.9
        HomePage.clickCartIcon()
        CartPage.isNotCartEmpty()

        // No.10
        HomePage.clickLoginButton()
        SignUpPage.fillUsername(this.data.Email)
        SignUpPage.fillPassword(this.data.Password)
        SignUpPage.clickLoginButton()

        // No.11
        HomePage.clickCartIcon()

        // No.12
        CartPage.isNotCartEmpty()
    });
});