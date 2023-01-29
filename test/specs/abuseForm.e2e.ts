import ContactPage from "../pageobjects/contact.page.js";
import Base from "../pages/Base.js";

before('Open the page', async () => {
  await ContactPage.openUrl(ContactPage.url);
  await Base.closePopUpWindow();
  await browser.pause(2000);
})

describe('Check filling "Report abuse" form using valid credentials', () => {
  it('Scroll to the "Report abuse" title', async () => {
    ContactPage.scrollElementIntoViewTop(ContactPage.reportAbuseTitle);
    ContactPage.isElementDisplayed(ContactPage.reportAbuseTitle);
  });

  it('Click the "Report Abuse form" link', async () => {
    ContactPage.click(ContactPage.abuseFromLink);
    await browser.pause(2000);
    await expect(browser).toHaveUrl('https://telnyx.com/report-abuse');
  });

  const fieldNames = ContactPage.fieldNames;
  const fieldInputs = ContactPage.fieldInputs;
  const inputData = ContactPage.data;
  for (let i = 0; i < fieldInputs.length; i++) {
    it(`Enter the "${fieldNames[i]}" value`, async () => {
      ContactPage.setValue(fieldInputs[i], inputData[i]);
      await browser.pause(1000);
      const currentValue = await $(fieldInputs[i]).getValue();
      if (currentValue != inputData[i]) {
        throw new Error("Entered incorrect value!");
      };
    });
  }

  it('Click the "SMS" to choose this value', () => {
    ContactPage.click(ContactPage.smsCheckBox);
  });

  it('Click the "Submit" button', async () => {
    ContactPage.click(ContactPage.submitBtn);
    // await ContactPage.isElementDisplayed('p.fgqchZ');
    await browser.pause(5000);
  });
})
