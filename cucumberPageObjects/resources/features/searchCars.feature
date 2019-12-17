@Search-Cars
Feature: Title of your feature
  I want to use this template for my feature file

  @Search-Cars-Positive
  Scenario: Validate search cars page
    Given I am on the home page "https://www.carsguide.com.au/" of carsGuide Website
    When I move to Menu
    				|Menu					|
    				|Buy sale			|
    				|Reviews			|
    Then I click on "Search cars" link
    And I select carbrand as "BMW" from AnyMake dropdown 				
    And I select carmodel as "1 Series" from selectModel dropDown
    And I select location as "NSW - Far West" from select location dropDown
    And I select price as "$1,000" from price  dropDown
    And I click on "Find_My_Next_car" button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series nder 1000 for Sale Far West NSW | carsguide" 
    

