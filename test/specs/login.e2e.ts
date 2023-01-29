import LoginPage from "../pageobjects/login.page.js";

before('Open the fax-api product page', async () => {
  await LoginPage.openUrl(LoginPage.url);
  await browser.pause(4000);
});

describe('Check "Log in" using invalid credentials', () => {
  it('Enter invalid credentials', async () => {
    const inputs = [LoginPage.emailInput, LoginPage.passwordInput];
    const data = [LoginPage.email, LoginPage.password];
    for (let i = 0; i < inputs.length; i++) {
      LoginPage.setValue(inputs[i], data[i]);
      await browser.pause(1000);
      if (await $(inputs[i]).getValue() != data[i]) {
        throw new Error("Field filling error!");
      };
    };
  });

  it('Click the "Remember my email..." check box', async () => {
    LoginPage.click(LoginPage.rememberCheckBox);
  });

  it('Click the "Log in" button', async () => {
    LoginPage.click(LoginPage.loInBtn);
    await browser.pause(2000);
  });
})

