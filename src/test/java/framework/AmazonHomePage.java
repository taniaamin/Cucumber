package framework;

import org.openqa.selenium.By;

/**
 * Created by taniaamin on 2/10/18.
 */
public class AmazonHomePage extends BasePage {


    private By signinButton = By.linkText("Sign in");
    private By accountsAndList = By.id("nav-link-accountList");

    public void mouseOver() {
        handleMouseOver(accountsAndList);
    }

     public void clickOnSigninButton() {
         clickOn(signinButton);

    }
}
