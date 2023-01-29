import Page from "../pages/Page.js";

class MainPage extends Page {

  // url = 'https://telnyx.com/';
  closePopUpButton = '.jRrWoh';

  productsTab = 'ul.jgxzDd > :nth-child(1)';
  solutionsTab = 'ul.jgxzDd > :nth-child(3)';
  resourcesTab = 'ul.jgxzDd > :nth-child(6)';
  companyTab = 'ul.jgxzDd > :nth-child(8)';
  pricingTab = 'ul.jgxzDd > :nth-child(10)';
  arrayTabs = [this.productsTab, this.solutionsTab, this.resourcesTab, this.companyTab, this.pricingTab];
  arrayTabNames = ['products', 'solutions', 'resources', 'company', 'pricing'];

  elasticSipApp = 'ul.epRMTm > :nth-child(2)';
  internationalNumbersApp = 'ul.epRMTm > :nth-child(4)';
  wirelessApp = 'ul.epRMTm > :nth-child(6)';
  arrayApps = [this.elasticSipApp, this.internationalNumbersApp, this.wirelessApp];
  arrayAppNames = ['Elastic SIP Trunking', 'International Numbers', 'Wireless'];

  momentumLeaderTitile = 'div.bTpseA';
  compareUsLink = 'div.hpqDoH ~ p > a';

  slider = 'div.eLNpqA > button';
  prevSliderBtn = 'div.jtNMnD > button';
  nextSliderBtn = 'div.jtNMnD > button ~ button';

  callUsLink = 'div.biNvWx > button';

  public async closePopUpWindow() {
    this.click(this.closePopUpButton);
  }
}

export default new MainPage();
