$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 21,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 7568336524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 760736933,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027search\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHIRAAAAG\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Windows\\TEMP\\scoped_dir1...}, goog:chromeOptions: {debuggerAddress: localhost:56478}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 78a8d5de671d6e4c805fe92dd8ae7113\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027search\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.HomePage.getSearch(HomePage.java:31)\r\n\tat stepDefinations.MyStepDefinitions.user_searched_for_something_vegetable(MyStepDefinitions.java:36)\r\n\tat ✽.When User searched for Brinjal Vegetable(search.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "stepDefination.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 290365967,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 6972671816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 34643515,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027search\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHIRAAAAG\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Windows\\TEMP\\scoped_dir7...}, goog:chromeOptions: {debuggerAddress: localhost:56495}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 260975cb37462a487240077928db2178\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027search\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.HomePage.getSearch(HomePage.java:31)\r\n\tat stepDefinations.MyStepDefinitions.user_searched_for_something_vegetable(MyStepDefinitions.java:36)\r\n\tat ✽.When User searched for Beetroot Vegetable(search.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "stepDefination.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 47850650,
  "status": "passed"
});
});