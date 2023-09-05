
class WelcomeScreen {

  startBtn = "//android.widget.ImageView[@content-desc='Get Started']";
  selectLangNextBtn = '//android.widget.Button[@content-desc="Next"]';
  earnRewardsNextBtn = '//android.widget.Button[@content-desc="Next"]';
  specialDiscountNextBtn = '//android.widget.Button[@content-desc="Next"]';
  createAccountScreenHeading = '//android.view.View[@content-desc="Create Account"]';


  get getStartedButton() {
    return $(this.startBtn);
  }

  get getSelectLanguageNextButton() {
    return $(this.selectLangNextBtn);
  }

  get getEarnRewardsNextButton() {
    return $(this.earnRewardsNextBtn);
  }

  get getSpecialDiscountNextButton() {
    return $(this.specialDiscountNextBtn);
  }

  get getCreateAccountScreen() {
    return $(this.createAccountScreenHeading);
  }

  async clickOnGetStartedBtn() {
    await this.getStartedButton.click();
    console.log("Get Started button Is clicked");
  }

  async clickOnSelectLang() {
    await this.getSelectLanguageNextButton.click();
    console.log("Next button on Select Language Screen clicked")
  }

  async clickOnEarnRewardNextBtn() {
    await this.getEarnRewardsNextButton.click();
    console.log("Earn Reward Next button clicked")
  }

  async clickOnSpecialDiscountBtn() {
    await this.getSpecialDiscountNextButton.click();
    console.log("Special Discount Next button clicked");
  }

  async isCreateAccountScreenDisplayed() {
    let createAccountHeading = await this.getCreateAccountScreen.isDisplayed();
    console.log("Create Account heading is Displayed");
    return createAccountHeading;
  }

}
module.exports = new WelcomeScreen();
