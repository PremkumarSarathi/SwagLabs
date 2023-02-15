/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"

describe("Login suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData.json").then(function (logindata) {this.logindata = logindata})
    })

    it("verify login", function () {

        const productPage = new ProductPage()
        cy.Login(this.logindata.Username, this.logindata.Password)
        productPage.ValidateProductPage(this.logindata.SuccessMessage)
       
    })
  
    
})