const HomePage = require('../page-objects/HomePage');
const Page = require('../page-objects/Page')

describe('Test Case 26: Verify Scroll Up without "Arrow" button and Scroll Down functionality', () => {
    

    it('scroll without arrow up', () => {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4-5
        HomePage.scrollToFooter()
        HomePage.isTextSubscription()

        // No.6
        HomePage.scrollToTop

        // No.7
        HomePage.isScrollToTop()
    });
});