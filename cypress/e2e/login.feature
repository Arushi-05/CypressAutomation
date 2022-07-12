

Feature: user open the website

    Feature this is required to login for a user.
    Scenario: login
     
   Given A user open website 
   When A user enter username "standard_user"
    And A user enters the password "secret_sauce"
    And A user clicks on login button
    Then A user will be logged in