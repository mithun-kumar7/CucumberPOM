package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.SearchCarsPageActions;
import utils.SeleniumDriver;

public class SearchCarsSteps {

	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	SearchCarsPageActions searchCarsPageActions= new SearchCarsPageActions();

	@Given("^I am on the home page \"([^\"]*)\" of carsGuide Website$")
	public void i_am_on_the_home_page_of_carsGuide_Website(String websiteUrl) throws Throwable {
		SeleniumDriver.openPage(websiteUrl);
	}	

	@When("^I move to Menu$")
	public void i_move_to_Menu(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Menu selected: " + menu);
		carsGuideHomePageActions.moveToBuyPlusSellmenu();
	}

	@Then("^I click on \"([^\"]*)\" link$")
	public void i_click_on_link(String searchCars) throws Throwable {
		carsGuideHomePageActions.clickOnSearchCarsMenu();
	}

	@And("^I select carbrand as \"([^\"]*)\" from AnyMake dropdown$")
	public void i_select_carbrand_as_from_AnyMake_dropdown(String carsBrand) throws Throwable {
		searchCarsPageActions.selectAnyMake(carsBrand);
	}

	@And("^I select carmodel as \"([^\"]*)\" from selectModel dropDown$")
	public void i_select_carmodel_as_from_selectModel_dropDown(String carModel) throws Throwable {
		searchCarsPageActions.selectAnyModel(carModel);
	}

	@And("^I select location as \"([^\"]*)\" from select location dropDown$")
	public void i_select_location_as_from_select_location_dropDown(String anyLocation) throws Throwable {
		searchCarsPageActions.selectAnyLocation(anyLocation);
	}

	@And("^I select price as \"([^\"]*)\" from price  dropDown$")
	public void i_select_price_as_from_price_dropDown(String carPrice) throws Throwable {
		searchCarsPageActions.selectPrice(carPrice);
	}

	@And("^I click on \"([^\"]*)\" button$")
	public void i_click_on_button(String findMycars) throws Throwable {
		searchCarsPageActions.clickOnFindMyCars();
	}

	@Then("^I should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
		System.out.println("car list found");
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String expected_title) throws Throwable {
		String actual_title=SeleniumDriver.getDriver().getTitle();
		Assert.assertEquals(actual_title, expected_title);
	}

}
