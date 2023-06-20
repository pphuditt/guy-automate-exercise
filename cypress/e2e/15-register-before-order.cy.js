const Page = require('../page-objects/Page.js')
const HomePage = require('../page-objects/HomePage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')
const CartPage = require('../page-objects/CartPage.js');
const CheckOutPage = require('../page-objects/CheckOutPage.js')
const PaymentPage = require('../page-objects/PaymentPage.js')

describe('Test Case 15: Place Order: Register before Checkout', () => {

    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });
    it('register and place order', function()  {
        // No. 2-3
        Page.navigateToURL('/')
        Page.webLoadSuccessfully()

        // No. 4
        HomePage.clickLoginButton()

        // No. 5
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

        // No. 6
        RegisterPage.verifyCreateAccount() // verity account created text
        RegisterPage.clickContinue()

        // No.7
        RegisterPage.verifyLoginAsUsername()

        // No. 8
        AllProductPage.clickAddFirstProductToCartButton()

        // No. 9
        AllProductPage.clickViewCart()

        // No. 10
        Page.isNavigateToCart()

        // No. 11
        CartPage.clickCheckOut()

        // No. 12
        CheckOutPage.verifyAddressDetailHead()
        CheckOutPage.verifyReviewOrderHead()

        // No. 13
        CheckOutPage.fillCommentForm(this.data.Comment)
        CheckOutPage.clickPlaceOrder()

        // No. 14
        PaymentPage.fillNameOnCard(this.data.NameOnCard)
        PaymentPage.fillCardNo(this.data.CardNo)
        PaymentPage.fillCVC(this.data.cvc)
        PaymentPage.fillExpiration(this.data.ExpirationMonth, this.data.ExpirationYear)

        // No. 15
        PaymentPage.clickPayButton()

        // No. 18
        RegisterPage.clickDeleteAccButton()

        // No. 19
        RegisterPage.verifyAccDeleted()
        RegisterPage.clickContinue()
        
    
    });
});