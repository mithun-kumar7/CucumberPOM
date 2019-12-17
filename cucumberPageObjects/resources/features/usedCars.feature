@Used-Cars-Search
Feature: Title of your feature
  I want to use this template for my feature file

  @Used-Cars-Search-Positive
  Scenario: Validate used cars page
    Given I am on the home page "https://www.carsguide.com.au/" of carsGuide Website
    When I move to Menu
    				|Menu					|
    				|Buy sale			|
    				|Reviews			|
    Then I click on "used" link for used cars
    And I select carbrand as "Audi" from AnyMake dropdown in used cars page				
    And I select carmodel in used cars page
    				|cars      |
    				|A4				|
    				|A3				|
    And I select location as "NSW - All" from select location dropDown in used cars page
    And I select price as "$2,000" from price  dropDown in used cars page
    And I click on "Find_My_Next_car" button in used cars page
    Then I should see list of searched cars in used cars page
    And the page title should be "Used Audi A4 Under 2000 for Sale NSW | carsguide"  in used cars page
    				