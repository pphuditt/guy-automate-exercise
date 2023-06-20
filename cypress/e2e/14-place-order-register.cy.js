const HomePage = require('../page-objects/HomePage.js')
const RegisterPage = require('../page-objects/RegisterPage.js')
const SignUpPage = require('../page-objects/SignUpPage.js')
const AllProductPage = require('../page-objects/AllProductPage.js')
const CartPage = require('../page-objects/CartPage.js');
const CheckOutPage = require('../page-objects/CheckOutPage.js')
const PaymentPage = require('../page-objects/PaymentPage.js')

describe('Test Case 14: Place Order: Register while Checkout', () => {
    beforeEach(() => {
        cy.fixture('data.json').as('data')
    });

    it('register while checkout', function() {
         // No. 2-3
        HomePage.navigateToURL('/')
        HomePage.webLoadSuccessfully()

        //No. 4 Add product to cart
        AllProductPage.clickAddFirstProductToCartButton()

        // No. 5 Click Cart button
        AllProductPage.clickViewCart()

        // No. 6 View cart page display
        HomePage.isNavigateTo('view_cart')

        // No.7
        CartPage.clickCheckOut()

        // No. 8 Click register/login
        CartPage.clickRegisterLogin()

        // No. 9
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

        // No. 10
        RegisterPage.verifyCreateAccount() // verity account created text
        RegisterPage.clickContinue()

        // No. 11
        RegisterPage.verifyLoginAsUsername()

        // No. 12
        HomePage.clickCartIcon()

        // No. 13
        CartPage.clickCheckOut()

        //No. 14
        CheckOutPage.verifyAddressDetailHead()
        CheckOutPage.verifyReviewOrderHead()

        // No. 15
        CheckOutPage.fillCommentForm(this.data.Comment)
        CheckOutPage.clickPlaceOrder()

        // No. 16
        PaymentPage.fillNameOnCard(this.data.NameOnCard)
        PaymentPage.fillCardNo(this.data.CardNo)
        PaymentPage.fillCVC(this.data.cvc)
        PaymentPage.fillExpiration(this.data.ExpirationMonth, this.data.ExpirationYear)

        // No. 17
        PaymentPage.clickPayButton()

        // No. 18
        // PaymentPage.verifyPlaceOrderSuccess()
        // No. 19
        RegisterPage.clickDeleteAccButton()

        // No. 20
        RegisterPage.verifyAccDeleted()
        RegisterPage.clickContinue()
    });
});