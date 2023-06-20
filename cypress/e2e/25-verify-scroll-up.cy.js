const HomePage = require('../page-objects/HomePage');

describe('Test Case 25: Verify Scroll Up using "Arrow" button and Scroll Down functionality', () => {
    
    it('verify scrolling', () => {
        // No. 2-3
        HomePage.navigateToURL('/')
        HomePage.webLoadSuccessfully()

        // No.4-5
        HomePage.scrollToFooter()
        HomePage.isTextSubscription()

        // No.6
        HomePage.clickArrowUp()

        // No.7
        HomePage.isScrollToTop()
    });
});