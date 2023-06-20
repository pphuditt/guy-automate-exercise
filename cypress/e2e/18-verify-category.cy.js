const Page = require('../page-objects/Page.js')
const AllProductPage = require('../page-objects/AllProductPage.js');

describe('Test Case 18: View Category Products', () => {
    
    it('verify view category', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4
        AllProductPage.isCategoryVisible()

        // No.5
        AllProductPage.clickWomenCat()
        AllProductPage.clickTopSubCat()

        // No.6
        AllProductPage.verifyCategoryText()

        // No.7
        AllProductPage.clickOnMenCat()
        AllProductPage.clickOnMenSubCat()

        // No.8
        AllProductPage.isNavigateToCategory()
    });
});