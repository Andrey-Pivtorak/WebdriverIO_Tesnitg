import IpNetworkPage from "../pageobjects/solutionsPages/ipNetwork.page.js";
import Base from "../pages/Base.js";

before('Open the page', async () => {
  await IpNetworkPage.openUrl('/', IpNetworkPage.urlPath);
  await Base.closePopUpWindow();
  await browser.pause(1000);
})

describe('Check "Telnyx Network FAQs" articles', () => {
  it('Scroll to the "Telnyx Network FAQs" title', async () => {
    IpNetworkPage.scrollElementIntoViewBottom(IpNetworkPage.networkFaqsTitle);
    IpNetworkPage.click(IpNetworkPage.firstQuestion);
  });

  const questions = IpNetworkPage.questions;
  const questionsText = IpNetworkPage.questionsText;
  const answers = IpNetworkPage.answers;
  for (let i = 0; i < questions.length; i++) {
    it(`Should click "+" of "${questionsText[i]}" article`, async () => {
      IpNetworkPage.click(questions[i]);
      await browser.pause(2000);
      await IpNetworkPage.isElementDisplayed(answers[i]);
    });
  };
})

