import FaxApiProductPage from "../pageobjects/productsPages/faxApi.page.js";
import Base from "../pages/Base.js";

before('Open the fax-api product page', async () => {
    await FaxApiProductPage.openUrl('/', FaxApiProductPage.urlPath);
    await Base.closePopUpWindow();
    await browser.pause(2000);
  });

describe('Check ways to fax', () => {
  it('Scroll to the "Explore the docs" link', async () => {
    FaxApiProductPage.scrollElementIntoViewTop(FaxApiProductPage.exploreDocsLink);
  });

  const links = FaxApiProductPage.links;
  const linksText = FaxApiProductPage.linksText;
  const currentUrls = ['programmable-fax', 'fax-service'];
  for (let i = 0; i < links.length; i++) {
    it(`Click the "${linksText[i]}" link`, async () => {
      FaxApiProductPage.click(links[i]);
      await browser.pause(3000);
      const currentUrl = await browser.getUrl();
      if (!currentUrl.includes(currentUrls[i])) {
        throw new Error("The page is incorrect!");
      }
      await browser.back();
    });
  };
});

