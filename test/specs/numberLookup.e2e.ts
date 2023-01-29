import NumberLookup from "../pageobjects/productsPages/numberLookup.page.js";
import Base from "../pages/Base.js";

before('Open the "look up" product page', async () => {
  await NumberLookup.openUrl('/', NumberLookup.urlPath);
  await Base.closePopUpWindow();
  await browser.pause(2000);
});

describe('Check working the "free International Lookup"', () => {
  it('Scroll to the "Try our free International..." title', async () => {
    NumberLookup.scrollElementIntoViewBottom(NumberLookup.internationalTitle);
    await browser.pause(2000);
  });

  it('Choose the country "Ukraine"', async () => {
    NumberLookup.click(NumberLookup.countrySelect);
    NumberLookup.click(NumberLookup.country);
    await browser.pause(2000);
  });

  it('Enter phone number', async () => {
    NumberLookup.setValue(NumberLookup.phoneInput, NumberLookup.phone);
    await browser.pause(2000);
    const currentPhoneInputValue = (await $(NumberLookup.phoneInput).getValue()).split(' ').join('');
    if (currentPhoneInputValue != NumberLookup.phone) {
      throw new Error("Incorrect phone number");
    }
  });

  it('Check the "I agree to the Terms…" check box', async () => {
    NumberLookup.click(NumberLookup.termsCheckBox);
  });

  it('Click the "Look up Number"', async () => {
    NumberLookup.click(NumberLookup.lookupNumberButton);
    await browser.pause(4000);
    NumberLookup.isElementDisplayed('section.ktsDtL');
    await browser.pause(2000);
  });
})

describe('Check displaying Telnyx Lookup API use cases', () => {
  it('Scroll to the "What can you build…" title', async () => {
    NumberLookup.scrollElementIntoViewBottom(NumberLookup.lookupAPITitle)
  });

  it('Click the "Learn more" link of "Contact Center" use case', async () => {
    NumberLookup.click(NumberLookup.contactCenterLink);
    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    if (!currentUrl.includes('contact-center')) {
      throw new Error("Incorrect page!");
    };
    browser.back();
  });

  it('Click the "Learn more" link of "Call Tracking" use case', async () => {
    NumberLookup.click(NumberLookup.callTrackingLink);
    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    if (!currentUrl.includes('call-tracking')) {
      throw new Error("Incorrect page!");
    };
  });
})

describe('Check displaying "Frequently Asked Questions"', () => {
  it('Scroll to the "Frequently Asked Questions" title', () => {
    NumberLookup.scrollElementIntoViewBottom(NumberLookup.frequentlyTitle);
  });

  it('Click "+" of "How do I get started…" question', async () => {
    NumberLookup.click(NumberLookup.secondQuestion);
    await browser.pause(2000);
    await (await $('dd[data-faq-answer="1"]')).isDisplayed();
  });

  it('Click "+" of "How to Search Phone Numbers" question', async () => {
    NumberLookup.click(NumberLookup.lastQuestion);
    await browser.pause(2000);
    await (await $('dd[data-faq-answer="6"]')).isDisplayed();
  });
})





