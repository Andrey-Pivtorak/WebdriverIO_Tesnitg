import ProductPortalPage from "../pageobjects/productsPages/productPortal.page.js";

before('Open the "Developer Community" page', async () => {
  await ProductPortalPage.openUrl(ProductPortalPage.url);
  await browser.pause(2000);
});

describe('Check opening the information pop up windows of the "Elastic SIP Trunking" section', () => {
  it('Scroll to the "Elastic SIP Trunking" section', async () => {
    ProductPortalPage.scrollElementIntoViewBottom(ProductPortalPage.trunkingTitle);
    await browser.pause(2000);
  });

  it('Should click the "Trunking" items', async () => {
    const items = await $$(ProductPortalPage.trunkingItemLocator);
    for (let i = 0; i < items.length; i++) {
      await items[i].click();
      await browser.pause(2000);
      await ProductPortalPage.isElementDisplayed('.uO7EXKnb24RbOlSyulqc');
      ProductPortalPage.click(ProductPortalPage.closeBtn);
      await browser.pause(1000);
    };
  });
})

describe('Check changing the "Telnyx Product Portal" tabs', () => {
  it('Should click the header tabs of the page', async () => {
    const tabs = await $$(ProductPortalPage.tabsLocator);
    for (let i = tabs.length-1; i >= 0; i--) {
      await tabs[i].click();
      await browser.pause(1000);

      const currentUrl = await browser.getUrl();
      const text = await (await tabs[i].getText()).toLowerCase();
      const equalText = text.split(' ');
      if (!currentUrl.includes(equalText[1] || equalText[0])) {
        throw new Error("Incorrect tabs page");
      };
    };
  });
})

