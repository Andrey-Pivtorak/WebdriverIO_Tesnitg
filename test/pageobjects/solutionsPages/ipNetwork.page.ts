import Page from "../../pages/Page.js";

class IpNetworkPage extends Page {

  urlPath = 'solutions/global-ip-network';

  networkFaqsTitle = 'h2.jCdDd';
  firstQuestion = 'dl.iJKvyK > :nth-child(1) button';
  secondQuestion = 'dl.iJKvyK > :nth-child(2) button';
  thirdQuestion = 'dl.iJKvyK > :nth-child(3) button';
  questions = [this.firstQuestion, this.secondQuestion, this.thirdQuestion];
  questionsText = ['"What is a PoP in…', 'What are benefits…', 'What makes private…'];
  answers = ['#faq1_description', '#faq2_description', '#faq3_description'];
}

export default new IpNetworkPage();
