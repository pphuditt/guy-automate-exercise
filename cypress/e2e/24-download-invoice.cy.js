const AllProductPage = require('../page-objects/AllProductPage');
const CartPage = require('../page-objects/CartPage');
const CheckOutPage = require('../page-objects/CheckOutPage');
const HomePage = require('../page-objects/HomePage');
const Page = require('../page-objects/Page');
const PaymentPage = require('../page-objects/PaymentPage');
const RegisterPage = require('../page-objects/RegisterPage');
const SignUpPage = require('../page-objects/SignUpPage');

describe('Test Case 24: Download Invoice after purchase order', () => {
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('download invoice', function()  {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No.4
        AllProductPage.clickAddFirstProductToCartButton()
        AllProductPage.clickContinueShoppingButton()

        // No.5
        HomePage.clickCartIcon()

        // No.6
        Page.isNavigateToCart()

        // No.7
        CartPage.clickCheckOut()

        // No.8
        CartPage.clickRegisterLogin()

        // No.9
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
  
        // No.10
        RegisterPage.verifyCreateAccount() // verity account created text
        RegisterPage.clickContinue()

        // No.11
        RegisterPage.verifyLoginAsUsername()

        // No.12
        HomePage.clickCartIcon()

        // No.13
        CartPage.clickCheckOut()

        // No.14
        CheckOutPage.verifyAddressDetailHead()
        CheckOutPage.verifyReviewOrderHead()

        // No.15
        CheckOutPage.fillCommentForm(this.data.Comment)
        CheckOutPage.clickPlaceOrder()

        // No.16
        PaymentPage.fillNameOnCard(this.data.NameOnCard)
        PaymentPage.fillCardNo(this.data.CardNo)
        PaymentPage.fillCVC(this.data.cvc)
        PaymentPage.fillExpiration(this.data.ExpirationMonth, this.data.ExpirationYear)

        // No.17
        PaymentPage.clickPayButton()

        // No.18
        // PaymentPage.verifyPlaceOrderSuccess()

        // No.19
        PaymentPage.clickDownloadInvoice()
        PaymentPage.verifyInvoiceDownload()

        // No.20
        PaymentPage.clickContinueButton()

        // No.21-22
        RegisterPage.clickDeleteAccButton()

        RegisterPage.verifyAccDeleted()
        RegisterPage.clickContinue()
    });
});