import MainPage from "../pageobjects/main.page.js";
import Base from "../pages/Base.js";

before('Open the page', async () => {
  await MainPage.openUrl('/');
  await Base.closePopUpWindow();
  await browser.pause(1000);
})

describe('Сheck drop down menu appearances', () => {
  const tabs = MainPage.arrayTabs;
  const tabNames = MainPage.arrayTabNames;
  for (let i = 0; i < tabs.length; i++) {
    it(`Hover the "${tabNames[i]}" tab`, async () => {
      MainPage.hoverElement(tabs[i]);
      await browser.pause(1000);
    });
  };

  it('==> Stop hover tabs <==', async () => {
    await $('header div.dpYsNo').moveTo({ xOffset: 0, yOffset: 0 });
  });
})

describe('Check clickability the main page application', async () => {
  const apps = MainPage.arrayApps;
  const appNames = MainPage.arrayAppNames;
  const urls = ['sip-trunks', 'international-numbers', 'iot-sim-card'];
  for (let i = 0; i < apps.length; i++) {
    it(`Scroll to the "${appNames[i]}" application`, () => {
      MainPage.scrollElementIntoViewTop(apps[i]);
      MainPage.isElementDisplayed(apps[i]);
    });

    it(`Click the "${appNames[i]}" application link`, async () => {
      MainPage.click(apps[i]);
      await browser.pause(2000);
      const currentUrl = await browser.getUrl();
      if (!currentUrl.includes(urls[i])) {
        throw new Error("Incorrect page!");
      }
      browser.back();
    });
  };
})

describe('Check opening the "Compare us with…" page', () => {
  it('Scroll the page to the "Momentum leader and..." title', async () => {
    MainPage.scrollElementIntoViewTop(MainPage.momentumLeaderTitile);
  });

  it('Click the "Compare us with the competition" link', async () => {
    MainPage.click(MainPage.compareUsLink);
    await browser.pause(3000);
    browser.switchWindow('/');
  });
})

describe('Check the main page slider', () => {
  it('Scroll to the main page slider', () => {
    MainPage.scrollElementIntoViewTop(MainPage.slider);
  });

  const buttonsLabel = ['>', '<'];
  const buttons = [MainPage.prevSliderBtn, MainPage.nextSliderBtn];
  const sliders = ['ul.eZYKCX > :last-child', 'ul.eZYKCX > :first-child'];
  for (let i = 0; i < buttons.length; i++) {
    it(`Click the "${buttonsLabel[i]}" button`, async () => {
      MainPage.click(buttons[i]);
      await browser.pause(2000);
      await MainPage.isElementDisplayed(sliders[i]);
    });
  };
})

describe('Сheck "Call Us" dialog menu appearances', () => {
  it('Scroll to the "Call Us" header menu', () => {
    MainPage.scrollElementIntoViewTop(MainPage.callUsLink);
  });

  it('Click the "Call Us" header menu', async () => {
    MainPage.click(MainPage.callUsLink);
    await browser.pause(2000);
    await MainPage.isElementDisplayed('#telnyx-click2call-dialog');
  });
})








