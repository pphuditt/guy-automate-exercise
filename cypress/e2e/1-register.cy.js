const HomePage = require('../page-objects/HomePage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')

describe('Test case 1: Register User', () => {

      beforeEach(() => {
        cy.fixture('data.json').as('data')
      });

    //No.2-3
    it('registering user', function() {
      HomePage.navigateToURL('/')
      HomePage.webLoadSuccessfully()

      // No.4-5
      HomePage.clickLoginButton()
      HomePage.verifyNewUserSignUp()

      //No.6-8
      HomePage.clickLoginButton()
      SignUpPage.fillName(this.data.Name)
      SignUpPage.fillEmail(this.data.Email)
      SignUpPage.clickSignUpButton()
      //No.9-18
  
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
  
      RegisterPage.verifyLoginAsUsername()
  
      RegisterPage.clickDeleteAccButton()
      RegisterPage.verifyAccDeleted()
      RegisterPage.clickContinue()
    });
})
