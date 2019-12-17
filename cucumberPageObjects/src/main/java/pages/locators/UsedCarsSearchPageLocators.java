package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UsedCarsSearchPageLocators {
	@FindBy(how=How.XPATH,using = "//select[@id='makes']")
	public WebElement anyMakeDpDown;
	
	@FindBy(how=How.XPATH,using = "//select[@id='models']")
	public WebElement anyModelDpDown;
	
	@FindBy(how=How.XPATH,using = "//select[@id='locations']")
	public WebElement locationDpDown;
	
	@FindBy(how=How.XPATH,using = "//select[@id='priceTo']")
	public WebElement priceDpDown;
	
	@FindBy(how=How.XPATH,using = "//input[@id='search-submit' and @type='submit']")
	public WebElement findMyNextCarBtn;

}
