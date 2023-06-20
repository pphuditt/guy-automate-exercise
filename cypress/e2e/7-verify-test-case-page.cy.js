const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')

describe('Test Case 7: Verify Test Cases Page', () => {
    
    it('verify test case page', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No. 4
        HomePage.clickTestCase()

        //No. 5
        Page.isNavigateToTestCasesPage()
    });
});