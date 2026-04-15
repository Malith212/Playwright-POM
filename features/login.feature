Feature: Login Feature

  Scenario: Successful login
    Given user is on the login page
    When user enters valid credentials
    Then user should be redirected to dashboard

  Scenario: Invalid login Credentials
    Given user is on the login page
    When user enters invalid credentials
    Then user should see an error message

  Scenario: Empty credentials
    Given user is on the login page
    When user leaves the username and password fields empty
    Then user should see a validation message

  Scenario: Empty password
    Given user is on the login page
    When user leaves the password field empty
    Then user should see a password validation message

  Scenario: Empty email
    Given user is on the login page
    When user leaves the email field empty
    Then user should see an email validation message


