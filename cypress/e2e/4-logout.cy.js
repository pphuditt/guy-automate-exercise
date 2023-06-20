const HomePage = require('../page-objects/HomePage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')

describe('Test Case 4: Logout User', () => {
    beforeEach(() => {
      cy.fixture('data.json').as('data')
    });
  
    it('login and then logout', function()  {
      // No. 2-3
      HomePage.navigateToURL('/')
      HomePage.webLoadSuccessfully()
      // No. 4-5
      HomePage.clickLoginButton()
      HomePage.verifyLogintoYourAccount()
      
      // No. 6-8
      SignUpPage.fillUsername(this.data.Email)
      SignUpPage.fillPassword(this.data.Password)
      SignUpPage.clickLoginButton()
      RegisterPage.verifyLoginAsUsername()
      //No. 9
      HomePage.clickLogOutButton()
      // No.10
      HomePage.isNavigateTo('login')
  
    });
  
  });