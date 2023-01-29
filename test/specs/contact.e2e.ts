import ContactPage from "../pageobjects/contact.page.js";
import Base from "../pages/Base.js";

before('Open the page', async () => {
  await ContactPage.openUrl(ContactPage.url);
  await Base.closePopUpWindow();
  await browser.pause(2000);
})

describe('Check activity the countries phones', () => {
  it('Scroll to the "Calling from overseas?" title', () => {
    ContactPage.scrollElementIntoViewBottom(ContactPage.countriesTitle);
  });

  const countries = ContactPage.countries;
  const phones = ContactPage.phones;
  for (let i = 0; i < phones.length; i++) {
    it(`Scroll to the "${countries[i]}" phone`, () => {
      ContactPage.scrollElementIntoViewTop(phones[i]);
    });

    it(`Click phone number of "${countries[i]}"`, async () => {
      await ContactPage.click(phones[i]);
    });
  };
})
