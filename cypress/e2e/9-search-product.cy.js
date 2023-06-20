const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')

describe('Test Case 9: Search Product', () => {

    beforeEach(() => {
        cy.fixture('data.json').as('data')
      });
    
    it('test product searching', function() {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No. 4
        HomePage.clickProductButton()

        // No. 5
        Page.isNavigateToAllProductPage()

        // No. 6
        AllProductPage.fillSearchBar(this.data.ProductName)
        AllProductPage.clickSearchButton()

        // No. 7
        AllProductPage.isSearchedProductVisible(this.data.ProductName)

        // No.8
        AllProductPage.verifySearchResult(this.data.ProductName)
    });
});