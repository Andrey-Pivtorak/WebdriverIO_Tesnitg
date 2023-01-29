import BookDemoPage from "../pageobjects/bookDemo.page.js";
import Base from "../pages/Base.js";

describe('Check "Book a demo" form using valid credentials', () => {
  it('Open the page', async () => {
    await BookDemoPage.openUrl('/', BookDemoPage.urlPath);
    await Base.closePopUpWindow();
    await browser.pause(2000);
  });

  it('Scroll to the "Book a demo" form', async () => {
    BookDemoPage.scrollElementIntoViewBottom(BookDemoPage.bookDemoForm);
  });

  it('Enter all the credentials', async () => {
    const inputs = await BookDemoPage.getInputsArray();
    const values = BookDemoPage.getInputValues();
    for (let i = 0; i < inputs.length; i++) {
      BookDemoPage.setValue(inputs[i], values[i]);
      await browser.pause(1000);
      const value = await (await $(inputs[i])).getValue();
      if (value != values[i]) {
        throw new Error("Incorrect value!");
      };
    };

    const selects = [BookDemoPage.countrySelect, BookDemoPage.primaryProductSelect];
    const selectValues = [BookDemoPage.country, BookDemoPage.primaryProduct];
    for (let i = 0; i < selects.length; i++) {
      await $(selects[i]).selectByAttribute('value', selectValues[i]);
      await browser.pause(2000);
      const value = await $(selects[i]).getValue();
      if (value != selectValues[i]) {
        throw new Error("Incorrect value!");
      };
    };
  });

  it('Click the "I want to receive…" check box', async () => {
    BookDemoPage.click(BookDemoPage.emailsCheckBox);
    await browser.pause(1000);
  });

  it('Click the "Apply" button', async () => {
    BookDemoPage.click(BookDemoPage.applyBtn);
    await browser.pause(3000);
    await BookDemoPage.isElementDisplayed(BookDemoPage.thanksMessage);
  });
})

describe('Check displaying the "Recommended for you" materials', () => {
  // it('Open the page', async () => {
  //   await BookDemoPage.openUrl('/', BookDemoPage.urlPathDemo);
  //   await Base.closePopUpWindow();
  //   await browser.pause(2000);
  // });

  it('Scroll to the "Recommended for you" title', async () => {
    BookDemoPage.scrollElementIntoViewBottom(BookDemoPage.recommendedTitle);
    await browser.pause(2000);
    await expect(await $('h2.edeEGK')).toHaveTextContaining('for you');
  });

  const recommendations = BookDemoPage.recommendations;
  const recommendationNames = ['G2 names Telnyx...', 'How can Branded Calling...', 'PSTN vs. VoIP...'];
  const urls = ['landing/g2', 'call-completion', 'telephony-solution'];
  for (let i = 0; i < recommendations.length; i++) {
    it(`Click the "${recommendationNames[i]}" recommendation`, async () => {
      BookDemoPage.click(recommendations[i]);
      await browser.pause(2000);

      const currentUrl = await browser.getUrl();
      if (!currentUrl.includes(urls[i])) {
        throw new Error("Incorrect page!");
      };
      await browser.back();
      await browser.pause(1000);
    });
  };
})

