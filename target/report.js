$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.before({
  "duration": 4198723625,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4707265116,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1762518660,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_see_test_environment_page()"
});
formatter.result({
  "duration": 1909075626,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 21717910,
  "status": "passed"
});
formatter.after({
  "duration": 880417003,
  "status": "passed"
});
formatter.before({
  "duration": 3325959069,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4757697924,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1260164035,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 274403628,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 464703618,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 10686951,
  "status": "passed"
});
formatter.after({
  "duration": 806408560,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "test001@test.com",
        "test001"
      ],
      "line": 32,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3367476293,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4813979250,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1268850632,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enter username test001@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enter password test001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 252464518,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 462712466,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 9740924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2109078670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2058969698,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 2565458103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 1981638307,
  "status": "passed"
});
formatter.after({
  "duration": 827377578,
  "status": "passed"
});
});