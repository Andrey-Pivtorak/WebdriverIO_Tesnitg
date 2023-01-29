import Page from "../pages/Page.js";

class LoginPage extends Page {

  url = 'https://portal.telnyx.com/#/login/sign-in';

  emailInput = 'div.fCOoik input[name="email"]';
  passwordInput = 'input[name="password"]';
  rememberCheckBox = 'span.CheckboxField_customCheck-tx-RLOSN';
  loInBtn = 'button.gBCTym[type="submit"]';
  email = 'testerlqcompany@gmail.com';
  password = 'qwerty#123';
}

export default new LoginPage();
