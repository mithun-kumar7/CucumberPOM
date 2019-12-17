$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 21494028835,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate search cars page",
  "description": "",
  "id": "title-of-your-feature;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page \"https://www.carsguide.com.au/\" of carsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "Buy sale"
      ],
      "line": 10
    },
    {
      "cells": [
        "Reviews"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Search cars\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select carmodel as \"1 Series\" from selectModel dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select location as \"NSW - Far West\" from select location dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select price as \"$1,000\" from price  dropDown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"Find_My_Next_car\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the page title should be \"Bmw 1 Series nder 1000 for Sale Far West NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_home_page_of_carsGuide_Website(String)"
});
formatter.result({
  "duration": 25181141950,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 4500730924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search cars",
      "offset": 12
    }
  ],
  "location": "SearchCarsSteps.i_click_on_link(String)"
});
formatter.result({
  "duration": 2311305166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 18479639419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_carmodel_as_from_selectModel_dropDown(String)"
});
formatter.result({
  "duration": 317301168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far West",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_select_location_dropDown(String)"
});
formatter.result({
  "duration": 210067748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 19
    }
  ],
  "location": "SearchCarsSteps.i_select_price_as_from_price_dropDown(String)"
});
formatter.result({
  "duration": 1645460080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find_My_Next_car",
      "offset": 12
    }
  ],
  "location": "SearchCarsSteps.i_click_on_button(String)"
});
formatter.result({
  "duration": 9663883640,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 93598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series nder 1000 for Sale Far West NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 18511821,
  "error_message": "java.lang.AssertionError: expected [Bmw 1 Series nder 1000 for Sale Far West NSW | carsguide] but found [Bmw 1 Series Under 1000 for Sale Far West NSW | carsguide]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat steps.SearchCarsSteps.the_page_title_should_be(SearchCarsSteps.java:70)\r\n\tat ✽.And the page title should be \"Bmw 1 Series nder 1000 for Sale Far West NSW | carsguide\"(searchCars.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4552725684,
  "status": "passed"
});
formatter.uri("usedCars.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Cars-Search"
    }
  ]
});
formatter.before({
  "duration": 5405481296,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate used cars page",
  "description": "",
  "id": "title-of-your-feature;validate-used-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Used-Cars-Search-Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page \"https://www.carsguide.com.au/\" of carsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "Buy sale"
      ],
      "line": 10
    },
    {
      "cells": [
        "Reviews"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"used\" link for used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I select carbrand as \"Audi\" from AnyMake dropdown in used cars page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select carmodel in used cars page",
  "rows": [
    {
      "cells": [
        "cars"
      ],
      "line": 15
    },
    {
      "cells": [
        "A4"
      ],
      "line": 16
    },
    {
      "cells": [
        "A3"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select location as \"NSW - All\" from select location dropDown in used cars page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select price as \"$2,000\" from price  dropDown in used cars page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Find_My_Next_car\" button in used cars page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see list of searched cars in used cars page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the page title should be \"Used Audi A4 Under 2000 for Sale NSW | carsguide\"  in used cars page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_home_page_of_carsGuide_Website(String)"
});
formatter.result({
  "duration": 7633576865,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 5418933914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used",
      "offset": 12
    }
  ],
  "location": "UsedCarsSteps.i_click_on_link_for_used_cars(String)"
});
formatter.result({
  "duration": 2263876169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 22
    }
  ],
  "location": "UsedCarsSteps.i_select_carbrand_as_from_AnyMake_dropdown_in_used_cars_page(String)"
});
formatter.result({
  "duration": 4688294580,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_select_carmodel_in_used_cars_page(String\u003e)"
});
formatter.result({
  "duration": 216791594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 22
    }
  ],
  "location": "UsedCarsSteps.i_select_location_as_from_select_location_dropDown_in_used_cars_page(String)"
});
formatter.result({
  "duration": 175546613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 19
    }
  ],
  "location": "UsedCarsSteps.i_select_price_as_from_price_dropDown_in_used_cars_page(String)"
});
formatter.result({
  "duration": 519487003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find_My_Next_car",
      "offset": 12
    }
  ],
  "location": "UsedCarsSteps.i_click_on_button_in_used_cars_page(String)"
});
formatter.result({
  "duration": 1887924130,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_should_see_list_of_searched_cars_in_used_cars_page()"
});
formatter.result({
  "duration": 96882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Under 2000 for Sale NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "UsedCarsSteps.the_page_title_should_be_in_used_cars_page(String)"
});
formatter.result({
  "duration": 341905050,
  "status": "passed"
});
formatter.after({
  "duration": 2909240598,
  "status": "passed"
});
});