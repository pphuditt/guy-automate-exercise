const HomePage = require('../page-objects/HomePage');
const Page = require('../page-objects/Page');
const SignUpPage = require('../page-objects/SignUpPage');
const RegisterPage = require('../page-objects/RegisterPage');
const AllProductPage = require('../page-objects/AllProductPage');
const CartPage = require('../page-objects/CartPage');
const CheckOutPage = require('../page-objects/CheckOutPage');

describe('Test Case 23: Verify address details in checkout page', () => {
    
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('verify address', function()  {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4
        HomePage.clickLoginButton()

        // No.5
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
  
        // No.6
        RegisterPage.verifyCreateAccount() // verity account created text
        RegisterPage.clickContinue()

        // No.7
        RegisterPage.verifyLoginAsUsername()

        // No.8
        AllProductPage.clickAddFirstProductToCartButton()
        AllProductPage.clickContinueShoppingButton()

        // No.9
        HomePage.clickCartIcon()

        // No.10
        CartPage.isNavigateToCart()
        
        // No.11
        CartPage.clickCheckOut()

        // No.12
        CheckOutPage.verifyDeliveryNameAddr(this.data.Firstname, this.data.Lastname)
        CheckOutPage.verifyDeliveryAddr1(this.data.Company)
        CheckOutPage.verifyDeliveryAddr2(this.data.Address1)
        CheckOutPage.verifyDeliveryAddr3(this.data.Address2)
        CheckOutPage.verifyDeliveryCityZip(this.data.City, this.data.State, this.data.Zipcode)
        CheckOutPage.verifyDeliveryCountry(this.data.Country)
        CheckOutPage.verifyDeliveryPhone(this.data.MobileNo)

        // No.13
        CheckOutPage.verifyBillNameAddr(this.data.Firstname, this.data.Lastname)
        CheckOutPage.verifyBillAddr1(this.data.Company)
        CheckOutPage.verifyBillAddr2(this.data.Address1)
        CheckOutPage.verifyBillAddr3(this.data.Address2)
        CheckOutPage.verifyBillCityZip(this.data.City, this.data.State, this.data.Zipcode)
        CheckOutPage.verifyBillCountry(this.data.Country)
        CheckOutPage.verifyBillPhone(this.data.MobileNo)

        // No.14
        RegisterPage.clickDeleteAccButton()

        // No.15
        RegisterPage.verifyAccDeleted()
        RegisterPage.clickContinue()
    });
});