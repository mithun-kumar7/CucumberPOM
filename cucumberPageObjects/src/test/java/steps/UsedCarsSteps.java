package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.Then;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarsSearchPageActions;
import utils.SeleniumDriver;

public class UsedCarsSteps {
	
	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	UsedCarsSearchPageActions  usedCarsSearchPageActions=new UsedCarsSearchPageActions();
	
	@Then("^I click on \"([^\"]*)\" link for used cars$")
	public void i_click_on_link_for_used_cars(String arg1) throws Throwable {
	    carsGuideHomePageActions.clickOnUsedCarsMenu();
	}

	@Then("^I select carbrand as \"([^\"]*)\" from AnyMake dropdown in used cars page$")
	public void i_select_carbrand_as_from_AnyMake_dropdown_in_used_cars_page(String CarBrand) throws Throwable {
	    usedCarsSearchPageActions.selectAnyMake(CarBrand);
	}

	@Then("^I select carmodel in used cars page$")
	public void i_select_carmodel_in_used_cars_page(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Model selected: " + menu);
		usedCarsSearchPageActions.selectAnyModel(menu);
	}

	@Then("^I select location as \"([^\"]*)\" from select location dropDown in used cars page$")
	public void i_select_location_as_from_select_location_dropDown_in_used_cars_page(String Location) throws Throwable {
	    usedCarsSearchPageActions.selectAnyLocation(Location);
	}

	@Then("^I select price as \"([^\"]*)\" from price  dropDown in used cars page$")
	public void i_select_price_as_from_price_dropDown_in_used_cars_page(String Price) throws Throwable {
	    usedCarsSearchPageActions.selectPrice(Price);
	}

	@Then("^I click on \"([^\"]*)\" button in used cars page$")
	public void i_click_on_button_in_used_cars_page(String arg1) throws Throwable {
	    usedCarsSearchPageActions.clickOnFindMyCars();
	}

	@Then("^I should see list of searched cars in used cars page$")
	public void i_should_see_list_of_searched_cars_in_used_cars_page() throws Throwable {
	    System.out.println("I see a list of used cars");
	}

	@Then("^the page title should be \"([^\"]*)\"  in used cars page$")
	public void the_page_title_should_be_in_used_cars_page(String expected_title) throws Throwable {
		String actual_title=SeleniumDriver.getDriver().getTitle();
		Assert.assertEquals(actual_title, expected_title);
	}

}
