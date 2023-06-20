const HomePage = require('../page-objects/HomePage');
const Page = require('../page-objects/Page')

describe('Test Case 25: Verify Scroll Up using "Arrow" button and Scroll Down functionality', () => {
    
    it('verify scrolling', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4-5
        HomePage.scrollToFooter()
        HomePage.isTextSubscription()

        // No.6
        HomePage.clickArrowUp()

        // No.7
        HomePage.isScrollToTop()
    });
});