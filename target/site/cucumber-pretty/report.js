$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazonlogin.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon login feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@amazonlogin"
    }
  ]
});
formatter.before({
  "duration": 49885303128,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of Amazon",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLoginSD.iAmOnHomePageOfAmazon()"
});
formatter.result({
  "duration": 739263666,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify user should not be able to login using invalid credentials",
  "description": "",
  "id": "amazon-login-feature;verify-user-should-not-be-able-to-login-using-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@amazon-login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I Hover over to Accounts \u0026 List",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Sign in button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter sometext into username on amazon sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter test into password on amazon sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on log in button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify invalid error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts \u0026 List",
      "offset": 16
    }
  ],
  "location": "AmazonLoginSD.hoverOverOnHomePage(String)"
});
formatter.result({
  "duration": 408828984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 11
    }
  ],
  "location": "AmazonLoginSD.clickOnSignInButton(String)"
});
formatter.result({
  "duration": 1138349297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sometext",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 519363025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 89229503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log in",
      "offset": 11
    }
  ],
  "location": "AmazonLoginSD.clickOnSignInButton(String)"
});
formatter.result({
  "duration": 2486079648,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSD.verifySignUpErrorMessage()"
});
formatter.result({
  "duration": 89576543,
  "error_message": "java.lang.AssertionError: expected [There was a problem] but found [Important Message!]\n\tat org.testng.Assert.fail(Assert.java:93)\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\n\tat org.testng.Assert.assertEquals(Assert.java:115)\n\tat org.testng.Assert.assertEquals(Assert.java:189)\n\tat org.testng.Assert.assertEquals(Assert.java:199)\n\tat stepdefinition.AmazonLoginSD.verifySignUpErrorMessage(AmazonLoginSD.java:81)\n\tat ✽.Then I verify invalid error message(amazonlogin.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 758671390,
  "status": "passed"
});
});