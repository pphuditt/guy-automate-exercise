const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')

describe('Test Case 10: Verify Subscription in home page', () => {
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('verifying subscription', function()  {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()
        
        // No. 4
        HomePage.scrollToFooter()

        // No. 5
        HomePage.isTextSubscription()

        // No. 6
        HomePage.fillSubscriptEmail(this.data.Email)
        HomePage.clickSubscribeButton()

        // No. 7
        HomePage.verifySubscriptAlert()

    });
});