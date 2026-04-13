Feature: Login Feature

  Scenario: Successful login
    Given user is on the login page
    When user enters valid credentials
    Then user should be redirected to dashboard