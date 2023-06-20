const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const AllProductPage = require('../page-objects/AllProductPage.js');

describe('Test Case 19: View & Cart Brand Products', () => {
    it('verify brand', () => {
        // No. 2
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.3
        HomePage.clickProductButton()

        // No.4
        AllProductPage.isBrandColumnVisible()

        // No.5
        AllProductPage.clickOnAnyBrandButton()

        // No.6
        AllProductPage.isNavigateToBrandPage()

        // No.7
        AllProductPage.clickOnOtherBrand()

        // No.8
        AllProductPage.isNavigateToBrandPage()
    });
});