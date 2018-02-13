@regression @amazonlogin
Feature: Amazon login feature

    Background:
      Given I am on home page of Amazon


@amazon-login
Scenario: Verify user should not be able to login using invalid credentials

  When I Hover over to Accounts & List
  And I click on Sign in button on home screen
  And I enter sometext into username on amazon sign in page
  And I enter test into password on amazon sign in page
  And I click on log in button on home screen
  Then I verify invalid error message


