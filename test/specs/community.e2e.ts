import CommunityPage from "../pageobjects/developersPages/community.page.js";

before('Open the "Developer Community" page', async () => {
  await CommunityPage.openUrl(CommunityPage.url);
  await browser.pause(2000);
});

describe('Check opening the "Популярные темы" sections', () => {
  it('Scroll to the "Популярные темы" title', async () => {
    CommunityPage.scrollElementIntoViewBottom(CommunityPage.popularThemesLink);
    await browser.pause(2000);
  });

  const links = CommunityPage.links;
  const linkNames = ['firstLink', 'middleLink', 'lastLink'];
  for (let i = 0; i < links.length; i++) {
    it(`Click the "${linkNames[i]}" link`, async () => {
      const linkText = await (await $(links[i])).getText();
      CommunityPage.click(links[i]);
      await browser.pause(2000);
      const title = await (await $('#name')).getText();
      if (title.includes(linkText)) {
        console.log('IT THIS TEXT = ', linkText);
        browser.back();
      }
      await browser.pause(2000);
    });
  };
})

describe('Check switching pages', () => {
  it('Scroll to the page numbers section', async () => {
    CommunityPage.scrollElementIntoViewBottom(CommunityPage.paginationBlock);
    await browser.pause(2000);
  });

  const pages = CommunityPage.pages;
  const pagesText = CommunityPage.pagesText;
  for (let i = 0; i < pages.length; i++) {
    it(`Should open the page № ${pagesText[i]}`, async () => {
      CommunityPage.click(pages[i]);
      await browser.pause(3000);
      const url = await browser.getUrl();
      if (!(url.includes(`page=${pagesText[i]}`))) {
        throw new Error("The current page doesn't match to the chosen number!");
      };
    });
  };
})

