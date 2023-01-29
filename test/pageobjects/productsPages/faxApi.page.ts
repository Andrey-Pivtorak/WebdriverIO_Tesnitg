import Page from "../../pages/Page.js";

class FaxApiProductPage extends Page {

  urlPath = 'products/fax-api';
  exploreDocsLink = 'ul.kAYDUo > :first-child a';
  getSetUpLink = 'ul.kAYDUo > :last-child a';
  links = [this.exploreDocsLink, this.getSetUpLink];
  linksText = ['Explore the docs', 'Get set up'];
  programmableFaxTitle = '#programmable-fax';
  faxServiceTitle = 'h1.t__h1';
}

export default new FaxApiProductPage();
