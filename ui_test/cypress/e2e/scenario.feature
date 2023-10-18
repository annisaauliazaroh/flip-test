Feature: UI test Flip

  Background: Open homepage
    Given I open Flip home page
    Then I will see the home page has loaded

  Scenario: Switch Languange to English
    When I click toggle language
    Then I will see the text in page change to English

   Scenario: find out cellular providers supported by Flip
    When I scroll to flip FAQ about cellular providers
    Then I will see Telkomsel Indosat Ooredoo and XL provider supported by Flip
  
  Scenario: sending money to Poundsterling
    When I click send money aboard
    And I click dropdown select the destination country
    And I input "gbp" as currency code
    And I input nominal currency "1000000" on IDR field
    Then I will see current rate and transfer fee