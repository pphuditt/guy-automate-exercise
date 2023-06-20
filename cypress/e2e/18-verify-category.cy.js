const AllProductPage = require('../page-objects/AllProductPage.js');
const HomePage = require('../page-objects/HomePage.js');

describe('Test Case 18: View Category Products', () => {
    
    it('verify view category', () => {
        // No. 2-3
        HomePage.navigateToURL('/')
        HomePage.webLoadSuccessfully()

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