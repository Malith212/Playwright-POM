Feature: Login Feature

  Scenario: Successful login
    Given user navigates to login page
    When user enters valid email and password
    And clicks on login button
    Then user should be redirected to dashboard