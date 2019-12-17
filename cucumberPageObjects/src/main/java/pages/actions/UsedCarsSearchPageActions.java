package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedCarsSearchPageLocators;
import utils.SeleniumDriver;

public class UsedCarsSearchPageActions {

	UsedCarsSearchPageLocators usedCarsSearchPageLocators = null;

	public UsedCarsSearchPageActions() {
		this.usedCarsSearchPageLocators = new UsedCarsSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedCarsSearchPageLocators);
	}
	
	public void selectAnyMake(String Brand) {
		Select selectAnyMake = new Select(usedCarsSearchPageLocators.anyMakeDpDown);
		selectAnyMake.selectByVisibleText(Brand);
	}

	public void selectAnyModel(String Model) {
		Select selectAnyModel = new Select(usedCarsSearchPageLocators.anyModelDpDown);
		selectAnyModel.selectByVisibleText(Model);
	}

	public void selectAnyLocation(String Location) {
		Select selectAnyLocation = new Select(usedCarsSearchPageLocators.locationDpDown);
		selectAnyLocation.selectByVisibleText(Location);
	}

	public void selectPrice(String Price) {
		Select selectPrice = new Select(usedCarsSearchPageLocators.priceDpDown);
		selectPrice.selectByVisibleText(Price);
	}

	public void clickOnFindMyCars() {
		usedCarsSearchPageLocators.findMyNextCarBtn.click();
	}

}
