import Page from "../../pages/Page.js";

class ContactCenterPage extends Page {

  url = 'https://telnyx.com/resources/ebook-how-to-build-a-customer-first-contact-center-platform';

  firstNameInput = '#FirstName';
  lastNameInput = '#LastName';
  companyNameInput = '#Company';
  emailAddressInput = '#Email';
  receiveEmailsCheckBox = '#mktoCheckbox_11113_0';
  sendContentBtn = 'button[type="submit"]';
  inputs = [this.firstNameInput, this.lastNameInput, this.companyNameInput, this.emailAddressInput];
  thanksMessage = '#innerWrapDiv';

  inputValues = {
    firstName: 'Ivan',
    lastName: 'Sidorov',
    companyName: 'TestCompany LLC',
    email: 'testlqtester@gmail.com'
  };
  values = [this.inputValues.firstName, this.inputValues.lastName, this.inputValues.companyName, this.inputValues.email];
}

export default new ContactCenterPage();
