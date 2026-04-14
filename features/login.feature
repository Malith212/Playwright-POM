Feature: Login Feature

  Scenario: Successful login
    Given user is on the login page
    When user enters valid credentials
    Then user should be redirected to dashboard

  Scenario: Invalid login Credentials
    Given user is on the login page
    When user enters invalid credentials
    Then user should see an error message