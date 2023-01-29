import Page from "../../pages/Page.js";

class ProductPortalPage extends Page {

  url = 'https://portal.productboard.com/telnyx/1-telnyx-product-portal/tabs/3-launched';

  trunkingTitle = 'div.sHqVbqydTtLgUVFfwUsw > :nth-child(7) > div';
  trunkingItemLocator = 'div.sHqVbqydTtLgUVFfwUsw > :nth-child(7) div[data-testid="PortalCard-Container"]';
  closeBtn = 'div.kBJneIS0EROW_6aXu8kv';
  tabsLocator = 'div.DPEtPs7mlmjOz8exAjwj';
}

export default new ProductPortalPage();
