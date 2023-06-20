const HomePage = require('../page-objects/HomePage.js')

describe('Test Case 11: Verify Subscription in Cart page', () => {

    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });
    it('verify in cart page', function() {
       // No. 2-3
       HomePage.navigateToURL('/')
       HomePage.webLoadSuccessfully()
       
       // No. 4-5
       HomePage.clickCartIcon()
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