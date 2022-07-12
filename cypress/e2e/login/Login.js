import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor/steps"

Given(/^A user open website/, function () { cy.visit("https://www.saucedemo.com/") })

When(/^A user enter username {string}/, (username) => {
    cy.get('#user-name').type(username)

})

And(/^A user enters the password {string}/, (password) => {
    cy.get('#password').type(password)

})
And(/^A user clicks on login button/, ()=>{
    cy.get('#login-button').click()

})
Then(/^A user will be logged in/, ()=> {
    cy.url().should("contains", '/inventory.html')
});
  
 
