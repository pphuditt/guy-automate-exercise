const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const ContactUsPage = require('../page-objects/ContactUsPage.js')

describe('Test Case 6: Contact Us Form', () => {
  beforeEach(() => {
    cy.fixture('data.json').as('data')
    cy.fixture('test.txt').as('file')
  });

  it('Test on contact us filling form', function()  {
    // No. 2-3
    Page.navigateToURL('/')
    Page.webLoadSuccessfully()

    // No. 4-5
    HomePage.clickContactUs()
    ContactUsPage.isGetInTouchVisible()

    // No. 6
    ContactUsPage.fillNameForm(this.data.Name)
    ContactUsPage.fillEmailForm(this.data.Email)
    ContactUsPage.fillSubjectForm(this.data.Subject)
    ContactUsPage.fillMessageForm(this.data.Message)

    // No. 7
    
    ContactUsPage.attachingFile(this.file)

    // No. 8
    ContactUsPage.clickSubmitButton()

    // No. 9
    cy.on('window:confirm', str => {
      expect(str).to.equal('Press OK to proceed!')
      return true
    })

    // No. 10 - 11
    ContactUsPage.isSuccessTextVisible()
    ContactUsPage.clickHomeButtton()
    Page.isNavigateToHomePage()


  });

});