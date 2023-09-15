const { Given, When, Then } = require('@cucumber/cucumber');
const WelcomeScreen = require('../pageobjects/welcome-screen');
const expectChai = require('chai');

Given(/^I opened the App$/, async () => {

  console.log("Loyalty app is opened.");
  // browser.reset();
});


When(/^I click on Get Started Button$/, async () => {
  await WelcomeScreen.clickOnGetStartedBtn();
});


When(/^I select the language$/, async () => {
  await WelcomeScreen.clickOnSelectLang();
});

When(/^I press the next button on Earn Rewards screen$/, async () => {

  await WelcomeScreen.clickOnEarnRewardNextBtn();
});

When(/^I press the next button on Get Special Discounts$/, async () => {

  await WelcomeScreen.clickOnSpecialDiscountBtn();
});

Then(/^I should see Create Account Screen$/, async () => {

  let result = await WelcomeScreen.isCreateAccountScreenDisplayed();
  expectChai.expect(result).to.equal(true);
});
