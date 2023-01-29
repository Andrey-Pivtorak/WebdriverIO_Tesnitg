import Page from "../../pages/Page.js";

class NumberLookup extends Page {

  urlPath = 'number-lookup';
  internationalTitle = 'h1.hPTaXJ';
  countrySelect = 'div.dCDohY';
  country = '//div[contains(text(),"Ukraine")]';
  phoneInput = '#number-lookup-input';
  phone = '+380679453829';
  termsCheckBox = '#numberLookup-termsCheckbox';
  lookupNumberButton = 'button.itIjRb';

  lookupAPITitle = 'h2.dPYvdb';
  contactCenterLink = '//li/a[contains(@href,"contact-center")]';
  callTrackingLink = '//li/a[contains(@href,"call-tracking")]';

  frequentlyTitle = 'h2.jCdDd';
  secondQuestion = 'button[data-faq-question="1"]';
  lastQuestion = 'button[data-faq-question="6"]';
}

export default new NumberLookup();
