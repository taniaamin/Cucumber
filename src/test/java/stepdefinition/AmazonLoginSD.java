package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.AmazonHomePage;
import framework.AmazonLoginPage;
import org.testng.Assert;

/**
 * Created by taniaamin on 2/10/18.
 */
public class AmazonLoginSD {


    private AmazonHomePage AmazonHomePage  = new AmazonHomePage();
    private AmazonLoginPage AmazonLoginPage = new AmazonLoginPage();





// Amazon home page activities:


    @Given("^I am on home page of Amazon$")
    public void iAmOnHomePageOfAmazon() {
        Assert.assertEquals(SharedSD.getDriver().getTitle(), "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", "Invalid Home Page");
    }

    @When("^I Hover over to (Accounts & List|Departments|Try prime)$")
    public void hoverOverOnHomePage(String textFields) {

        switch (textFields) {
            case "Accounts & List":
                AmazonHomePage.mouseOver();
                break;
            case "Departments":
                AmazonHomePage.mouseOver();
                break;
            case "Try prme":
                AmazonHomePage.mouseOver();
                break;
        }
    }

    @When("^I click on (Sign in|log in) button on home screen$")
    public void clickOnSignInButton(String button) {

        switch (button) {
            case "Sign in":
                AmazonHomePage.clickOnSigninButton();
                break;
            case "log in":
                AmazonLoginPage.clickOnAmazonLoginButton();
                break;
        }
    }




// Amazon log in page activities:

    @When("^I enter (.+) into (username|password) on amazon sign in page$")
    public void enterDataIntoTextFields(String anyText, String textFields) {

        switch (textFields) {
            case "username":
                AmazonLoginPage.enterAmazonEmail(anyText);
                break;
            case "password":
                AmazonLoginPage.enterAmazonPassword(anyText);
                break;
        }
    }


    @Then("^I verify invalid error message$")
    public void verifySignUpErrorMessage() {
        Assert.assertEquals(AmazonLoginPage.getAmazonErrorMessage(), "There was a problem");
    }
}


