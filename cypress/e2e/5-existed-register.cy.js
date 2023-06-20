const HomePage = require('../page-objects/HomePage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')

describe('Test Case 5: Register User with existing email', () => {
    beforeEach(() => {
      cy.fixture('data.json').as('data')
    });
  
    it('sign up with already existed email', function()  {
      // No. 2-3
      HomePage.navigateToURL('/')
      HomePage.webLoadSuccessfully()
  
      // No. 4-5
      HomePage.clickLoginButton()
      HomePage.verifyNewUserSignUp()
  
  
      // No. 6
      SignUpPage.fillName(this.data.Name)
      SignUpPage.fillEmail(this.data.Email)
      
      // No. 7
      SignUpPage.clickSignUpButton()
  
      // No. 8
      SignUpPage.accountIsAlreadyExisted()
    });
  
     
  
  });