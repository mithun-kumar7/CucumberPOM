package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.SearchCarsPageLocators;
import utils.SeleniumDriver;

public class SearchCarsPageActions {
	SearchCarsPageLocators searchCarsPageLocators=null;
	
	public SearchCarsPageActions() {
		this.searchCarsPageLocators=new SearchCarsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), searchCarsPageLocators);
	}
	
	public void selectAnyMake(String Brand) {
		Select selectAnyMake=new Select(searchCarsPageLocators.anyMakeDpDown);
		selectAnyMake.selectByVisibleText(Brand);		
	}
	
	public void selectAnyModel(String Model) {
		Select selectAnyModel=new Select(searchCarsPageLocators.anyModelDpDown);
		selectAnyModel.selectByVisibleText(Model);
	}
	
	public void selectAnyLocation(String Location) {
		Select selectAnyLocation=new Select(searchCarsPageLocators.locationDpDown);
		selectAnyLocation.selectByVisibleText(Location);
	}
	
	public void selectPrice(String Price) {
		Select selectPrice=new Select(searchCarsPageLocators.priceDpDown);
		selectPrice.selectByVisibleText(Price);
	}
	
	public void clickOnFindMyCars() {
		searchCarsPageLocators.findMyNextCarBtn.click();
	}

}
