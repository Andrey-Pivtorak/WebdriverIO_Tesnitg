import ContactCenterPage from "../pageobjects/resourcesPages/contactCenter.page.js";
import Base from "../pages/Base.js";

before('Open the fax-api product page', async () => {
  await ContactCenterPage.openUrl(ContactCenterPage.url);
  await Base.closePopUpWindow();
  await browser.pause(2000);
});

describe('Check the "Download the Contact Center eBook" form using valid credentials', () => {
  it('Enter the valid credentials in the form', async () => {
    const inputs = ContactCenterPage.inputs;
    const values = ContactCenterPage.values;
    for (let i = 0; i < inputs.length; i++) {
      ContactCenterPage.setValue(inputs[i], values[i]);
      await browser.pause(1000);
      if (await $(inputs[i]).getValue() != values[i]) {
        throw new Error("Field filling error!");
      };
    };
  });

  it('Check the "I want to receive emails…" check box', async () => {
    await (await $(ContactCenterPage.receiveEmailsCheckBox)).click();
  });

  it('Click the "Send my Content" button', async () => {
    ContactCenterPage.click(ContactCenterPage.sendContentBtn);
    await browser.pause(4000);
    if(!ContactCenterPage.isElementDisplayed(ContactCenterPage.thanksMessage)) {
      throw new Error("Invalid credentials were entered!");
    };
    await browser.pause(2000);
  });
})

