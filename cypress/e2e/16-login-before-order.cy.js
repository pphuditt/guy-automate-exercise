const HomePage = require('../page-objects/HomePage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')
const CartPage = require('../page-objects/CartPage.js');
const CheckOutPage = require('../page-objects/CheckOutPage.js')
const PaymentPage = require('../page-objects/PaymentPage.js')

describe('Test Case 16: Place Order: Login before Checkout', () => {
    
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('register in case does not have account', function() {
        HomePage.navigateToURL('/')
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
    });

    it('login then checkout', function()  {
        // No. 2-3
        HomePage.navigateToURL('/')
        HomePage.webLoadSuccessfully()

        // No. 4
        HomePage.clickLoginButton()

        // No.5-6
        SignUpPage.fillUsername(this.data.Email)
        SignUpPage.fillPassword(this.data.Password)
        SignUpPage.clickLoginButton()
        RegisterPage.verifyLoginAsUsername()

        // No.7 
        AllProductPage.clickAddFirstProductToCartButton()

        // No.8
        AllProductPage.clickViewCart()
        // No.9
        HomePage.isNavigateTo('view_cart')

        // No.10
        CartPage.clickCheckOut()

        // No.11
        CheckOutPage.verifyAddressDetailHead()
        CheckOutPage.verifyReviewOrderHead()

        // No.12
        CheckOutPage.fillCommentForm(this.data.Comment)
        CheckOutPage.clickPlaceOrder()

        // No.13
        PaymentPage.fillNameOnCard(this.data.NameOnCard)
        PaymentPage.fillCardNo(this.data.CardNo)
        PaymentPage.fillCVC(this.data.cvc)
        PaymentPage.fillExpiration(this.data.ExpirationMonth, this.data.ExpirationYear)

        // No.14
        PaymentPage.clickPayButton()

        // No.16-17
        RegisterPage.verifyAccDeleted()
        RegisterPage.clickContinue()
    });
});