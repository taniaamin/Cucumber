package framework;

import org.openqa.selenium.By;

/**
 * Created by taniaamin on 2/10/18.
 */
public class AmazonLoginPage extends BasePage {

    private By emailTextField = By.id("ap_email");
    private By passwordTextField = By.id("ap_password");
    private By amazonLoginButton = By.id("signInSubmit");
    private By errorMessage = By.xpath("//h4[@class='a-alert-heading']");

    public void clickOnAmazonLoginButton() {
        clickOn(amazonLoginButton);
    }

    public void enterAmazonEmail(String enterEmail) {
        sendText(emailTextField, enterEmail);
    }

    public void enterAmazonPassword(String enterPassword) {
        sendText(passwordTextField, enterPassword);
    }

    public String getAmazonErrorMessage() {
        return getTextFromElement(errorMessage);
    }

}
