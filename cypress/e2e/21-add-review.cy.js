const Page = require('../page-objects/Page')
const HomePage = require("../page-objects/HomePage");
const AllProductPage = require('../page-objects/AllProductPage');
const ProductDetailPage = require('../page-objects/ProductDetailPage');


describe('Test Case 21: Add review on product', () => {
    
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('write review', function()  {
        // No. 2
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.3
        HomePage.clickProductButton()

        // No.4
        Page.isNavigateToAllProductPage()

        // No.5
        AllProductPage.clickOnFirstViewProduct()

        // No.6
        ProductDetailPage.isWriteReviewVisible()

        // No.7
        ProductDetailPage.fillNameReviewer(this.data.Name)
        ProductDetailPage.fillEmailReviewer(this.data.Email)
        ProductDetailPage.fillReview(this.data.ReviewText)

        // No.8
        ProductDetailPage.clickSubmitReviewButton()

        // No.9
        ProductDetailPage.isReviewSuccessVisible()
    });
});