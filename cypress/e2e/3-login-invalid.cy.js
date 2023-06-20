const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')


describe('Test Case 3: Login User with incorrect email and password', () => {
    beforeEach(() => {
      cy.fixture('data.json').as('data')
    });
  
    it('Create account', function() {
      // Before login we need to register account
      Page.navigateToURL('/')
      HomePage.clickLoginButton()
      SignUpPage.fillName(this.data.Name)
      SignUpPage.fillEmail(this.data.Email)
      SignUpPage.clickSignUpButton()
  
      RegisterPage.selectTitleGender()
      RegisterPage.fillPassword(this.data.Password)
      RegisterPage.selectDate(this.data.date)
      RegisterPage.selectMonth(this.data.month)
      RegisterPage.selectYear(this.data.year)
      
      RegisterPage.checkBoxTicking()
  
      RegisterPage.fillFirstname(this.data.Firstname)
      RegisterPage.fillLastname(this.data.Lastname)
      RegisterPage.fillCompany(this.data.Company)
      RegisterPage.fillAddress1(this.data.Address1)
      RegisterPage.fillAddress2(this.data.Address2)
      RegisterPage.selectCountry(this.data.Country)
      RegisterPage.fillState(this.data.State)
      RegisterPage.fillCity(this.data.City)
      RegisterPage.fillZipcode(this.data.Zipcode)
      RegisterPage.fillMobileNo(this.data.MobileNo)
  
      RegisterPage.clickCreateAccount()
  
      RegisterPage.verifyCreateAccount() // verity account created text
      RegisterPage.clickContinue()
      // then we have to log out before test login feature
      HomePage.clickLoginButton()
    });
  
    it('Login with invalid username', function() {
      // No. 2-3
      Page.navigateToURL('/')
      Page.webLoadSuccessfully()
      // No. 4-5
      HomePage.clickLoginButton()
      HomePage.verifyLogintoYourAccount()
      // No. 6-7
      SignUpPage.fillUsername(this.data.InvalidEmail)
      SignUpPage.fillPassword(this.data.Password)
      SignUpPage.clickLoginButton()
      // No. 8
      SignUpPage.verifyLoginFail()
      
    });
  
    it('Login with invalid password', function() {
      // No. 2-3
      Page.navigateToURL('/')
      Page.webLoadSuccessfully()
      // No. 4-5
      HomePage.clickLoginButton()
      HomePage.verifyLogintoYourAccount()
      // No. 6-7
      SignUpPage.fillUsername(this.data.Email)
      SignUpPage.fillPassword(this.data.InvalidPassword)
      SignUpPage.clickLoginButton()
      // No. 8
      SignUpPage.verifyLoginFail()
      
    });
  });