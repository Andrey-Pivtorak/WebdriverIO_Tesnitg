import Page from "../pages/Page.js";

class ContactPage extends Page {

  url = 'https://telnyx.com/contact-us';
  countriesTitle = 'h2.edeEGK';
  estoniaPhone = 'ul.ezNsfJ > :nth-child(1) > a';
  newZealandPhone = 'ul.ezNsfJ > :nth-child(7) > a';
  otherCountriesPhone = 'ul.ezNsfJ > :last-child > a';
  phones = [this.estoniaPhone, this.newZealandPhone, this.otherCountriesPhone];
  countries = ['Estonia', 'New Zealand', 'All other countries'];

  reportAbuseTitle = 'div.jQuQwe > ul > :last-child > p';
  abuseFromLink = 'div.jQuQwe > ul > :last-child > :last-child > a';
  subjectInput = 'input[name="shortDescription"]';
  phoneInput = 'input[name="abusivePhoneNumber"]';
  phoneInputReceived = 'input[name="abusedPhoneNumber"]';
  fullNameInput = 'input[name="reporterName"]';
  emailInput = 'input[name="reporterEmail"]';
  addDetailsInput = 'input[name="longDescription"]';

  inputData = {
    subject: "too many calls during one day",
    phoneAbusive: '+34864080322',
    phoneAbuse: '+34865276987',
    fullName: 'Sidorov Ivan',
    email: 'testlqtester@gmail.com',
    additionDetails: 'there is a call every five minutes'
  }

  fieldNames = ['Subject', 'Phone Number (Abusive)', 'Phone Number (Received Abuse)', 'Full Name', 'Email', 'Additional Details'];
  fieldInputs = [this.subjectInput, this.phoneInput, this.phoneInputReceived, this.fullNameInput, this.emailInput, this.addDetailsInput];
  data = [this.inputData.subject, this.inputData.phoneAbusive, this.inputData.phoneAbuse, this.inputData.fullName, this.inputData.email, this.inputData.additionDetails];

  smsCheckBox = 'label[for="serviceAbusedSms"]';
  submitBtn = 'button.hBNXWZ';
}

export default new ContactPage();
