
class CreateAccountScreen {

  createAccount = '//android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[1]';
  profileScreen = 'id:Fill Profile';
  signUpBtn = '//android.widget.Button[@content-desc="Sign Up"]';
  phoneNumberField = '//android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.EditText';
  otpField = '//android.view.View[2]/android.widget.EditText';
  verify = '//android.widget.Button[@content-desc="Verify"]';
  enterPasswordField = '//android.widget.EditText[1]';
  repeatPasswordField = '//android.widget.EditText[2]';
  nextBtn = '//android.widget.Button[@content-desc="Next"]';
  nameField = '//android.widget.EditText[1]';
  surNameField = '//android.widget.EditText[2]';
  birthField = '//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]';
  emailField = '//android.widget.ImageView[3]';
  gotoProfile = 'id:Go to my profile';
  googleOption = '//android.view.View[@content-desc="Google"]';
  facebookOption = '//android.view.View[@content-desc="Facebook"]';
  passwordField = '//android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText';
  signinBtn = '//android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button';
  signinWithPass = '//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button';

  get getSignUpButton() {
    return $(this.signUpBtn);
  }

  get getOtpField() {
    return $(this.otpField);
  }

  get getVerifyBtn() {
    return $(this.verify);
  }

  get getPhoneNumberField() {
    return $(this.phoneNumberField);
  }
  get getCreateAccount() {
    return $(this.createAccount);
  }

  get getProfileScreen() {
    return $(this.profileScreen);
  }

  get getEnterPasswordField() {
    return $(this.enterPasswordField);
  }

  get getRepeatPasswordField() {
    return $(this.repeatPasswordField);
  }

  get getNextBtn() {
    return $(this.nextBtn);
  }

  get getNameField() {
    return $(this.nameField);
  }

  get getSurNameField() {
    return $(this.surNameField);
  }

  get getBirthField() {
    return $(this.birthField);
  }

  get getEmailField() {
    return $(this.emailField);
  }

  get getGotoProfile() {
    return $(this.gotoProfile);
  }

  get getGoogleOption() {
    return $(this.googleOption);
  }

  get getFacebookOption() {
    return $(this.facebookOption);
  }

  get getPasswordField() {
    return $(this.passwordField);
  }
  get getSigninBtn() {
    return $(this.signinBtn);
  }

  get getSigninWithPass() {
    return $(this.signinWithPass);
  }

  async clickOnSignUpButton() {
    await this.getSignUpButton.click();
    console.log("SignUp Button Is clicked");
  }

  async fillOtp(otp) {
    await this.getOtpField.setValue(otp);
    console.log("Enter OTP");
  }

  async clickOnVerifyButton() {
    await this.getVerifyBtn.click();
    console.log("Clicked on Verify button");
  }

  async enterPassword(pass) {
    await this.getEnterPasswordField.setValue(pass);
    console.log("Enter password field: " + pass)
  }

  async repeatPassword(pass) {
    await this.getRepeatPasswordField.setValue(pass);
    console.log("Enter repeat password : " + pass);
  }

  async clickOnNextButton() {
    await this.getNextBtn.click();
    console.log("Clicked on Next btn")
  }

  async enterPhoneNo(phoneNo) {
    await this.getPhoneNumberField.setValue(phoneNo);
    console.log("Enter phone no: " + phoneNo);
  }

  async enterName(name) {
    await this.getNameField.click();
    console.log("Enter name : " + name);
  }

  async enterSurname(surname) {
    await this.getSurNameField.setValue(surname)
    console.log("Enter name : " + surname);
  }

  async enterBirth(birth) {
    await this.getBirthField.setValue(birth);
    console.log("Enter birth: " + birth);
  }

  async enterEmail(email) {
    await this.getEmailField.setValue(email);
    console.log("Enter email: " + email);
  }

  async clickOnGotoProfile() {
    await this.getGotoProfile.click();
    console.log("Clicked on goto profile");
  }

  async clickOnSignInwithPassword() {
    await this.getSigninWithPass.click();
    console.log("Clicked on sign in with password")
  }

  async clickSignIn() {
    await this.getSigninBtn.click();
    console.log("Clicked in sign in")
  }

  async enterSigninPassword(password) {
    await this.getSigninWithPass.setValue(password);
    console.log("Entered Signin password")
  }

  async checkCreateAccountTextDisplayed() {
    const text = await this.getCreateAccount.getText();
    return text;
  }

  async checkGoogleOptionIsDisplayed() {
    const text = await this.getGoogleOption.getText();
    return text;
  }

  async checkFacebookOptionIsDisplayed() {
    const text = await this.getFacebookOption.getText();
    return text;
  }

}
module.exports = new CreateAccountScreen();

