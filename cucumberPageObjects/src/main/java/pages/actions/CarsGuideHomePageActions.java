package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuildeHomePageLocators;
import utils.SeleniumDriver;

public class CarsGuideHomePageActions {
	
	CarsGuildeHomePageLocators carsGuildeHomePageLocators=null;
	
	public CarsGuideHomePageActions() {
		this.carsGuildeHomePageLocators=new CarsGuildeHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuildeHomePageLocators);
	}
	
	public void moveToBuyPlusSellmenu() {
		Actions action=new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuildeHomePageLocators.buyPlusSellLink).perform();
	}
	
	public void clickOnSearchCarsMenu() {
		//moveToBuyPlusSellmenu
		carsGuildeHomePageLocators.searchCarsLink.click();
	}
	
	public void clickOnUsedCarsMenu() {
		//moveToBuyPlusSellmenu
		carsGuildeHomePageLocators.usedCarsLink.click();
	}	
	
	public void clickOnReviewsMenu() {
		//moveToBuyPlusSellmenu
		carsGuildeHomePageLocators.newsLink.click();
	}
	
}
