const { Then, When } = require('@cucumber/cucumber');
const assert = require('assert');
const CreateAccount = require('../pageobjects/create-account-screen');
const WelcomeScreen = require("../pageobjects/welcome-screen");
const expectChai = require("chai");

When(/^I fill phone number field$/, async () => {
  await CreateAccount.enterPhoneNo('555369864');
});

When(/^I click on Sign Up Button$/, async () => {
  await CreateAccount.clickOnSignUpButton();
});

When(/^I enter valid OTP$/, async () => {
  await CreateAccount.fillOtp('1231');
});

When(/^I click on Verify$/, async () => {
  await CreateAccount.clickOnVerifyButton();
});

When(/^I click on Enter Password Field$/, async () => {
  await CreateAccount.enterPassword('101010');
});

When(/^I click on Repeat Password Field$/, async () => {
  await CreateAccount.repeatPassword('101010');
});

When(/^I click on Next Button$/, async () => {
  await CreateAccount.clickOnNextButton();
});

When(/^I click on Name Field$/, async () => {
  await CreateAccount.enterName('Zubair');
});

When(/^I click on Surname Field$/, async () => {
  await CreateAccount.enterSurname('Alam');
});

When(/^I click on Birth Date Field$/, async () => {
  await CreateAccount.enterBirth('1031995');
});

When(/^I click on Email Field$/, async () => {
  await CreateAccount.enterEmail('syedzubairalam123@gmail.com');
});

Then(/^I should see profile info form fields$/, async () => {
  assert.ok(await CreateAccount.checkCreateAccountTextDisplayed(), 'Create Accounts');
});

When(/^I click on Go to Profile Button$/, async () => {
  await CreateAccount.clickOnGotoProfile();
});

Then(/^I should see Google option$/, async () => {
  await CreateAccount.checkGoogleOptionIsDisplayed();
});

Then(/^I should see Facebook option$/, async () => {
  await CreateAccount.checkFacebookOptionIsDisplayed();
});

When(/^I press sign in with password$/, async () => {
  await CreateAccount.clickOnSignInwithPassword();
});

When(/^I fill password field$/, async () => {
  await CreateAccount.enterSigninPassword('42494');
});

When(/^I press Sign In Button$/, async () => {
  await CreateAccount.clickSignIn();
});
