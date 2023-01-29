import Page from "../pages/Page.js";

class BookDemoPage extends Page {

  urlPath = 'book-a-demo';
  // urlPathDemo = 'demo-request-submission';

  bookDemoForm = '#mktoForm_2350';
  inputField = '//input[@type="text" or @type="email"]';
  countrySelect = '#Phone_Number_Extension__c';
  country = '+380';
  primaryProductSelect = '#Use_Case_Form__c';
  primaryProduct = 'Storage';
  emailsCheckBox = '#mktoCheckbox_12002_0';
  applyBtn = 'button.mktoButton';
  thanksMessage = 'h1.eCGKsC';

  inputValues = {
    firstName: 'Ivan',
    lastName: 'Sidorov',
    email: 'testlqtester@gmail.com',
    companyName: 'TestCompany LLC',
    jobTitle: 'AQA Engineer',
    phoneNumber: '956784325',
  }

  recommendedTitle = 'h2.edeEGK';
  firstRecommendation = 'ul.epRMTm > :nth-child(1) p.edVhEG';
  secondRecommendation = 'ul.epRMTm > :nth-child(2) p.edVhEG';
  thirdRecommendation = 'ul.epRMTm > :nth-child(3) p.edVhEG';
  recommendations = [this.firstRecommendation, this.secondRecommendation, this.thirdRecommendation];

  public async getInputsArray() {
    const inputs = await $$(this.inputField);
    const array = [];
    for (let i = 0; i < inputs.length; i++) {
      array.push('#' + await (inputs[i]).getAttribute('id'));
    }
    return array;
  }

  public getInputValues() {
    return [this.inputValues.firstName, this.inputValues.lastName, this.inputValues.email, this.inputValues.companyName, this.inputValues.jobTitle, this.inputValues.phoneNumber];;
  }
}

export default new BookDemoPage();
