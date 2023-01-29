import Page from "../../pages/Page.js";

class CommunityPage extends Page {

  url = 'https://community.telnyx.com/spaces/8/index.html';

  popularThemesLink = '//h3[contains(text(),"темы")]';
  firstLink = 'div.topic-content > :nth-child(1)';
  middleLink = 'div.topic-content > :nth-child(15)';
  lastLink = 'div.topic-content > :last-child';
  links = [this.firstLink, this.middleLink, this.lastLink];

  paginationBlock = 'div.pagination';
  page3 = 'div.pagination ul > :nth-child(3) a';
  page5 = 'div.pagination ul > :nth-child(6) a';
  nextPage = 'li.next a';
  lastPage = 'li.last a';
  firstPage = 'li.first a';
  pages = [this.lastPage, this.firstPage, this.page3, this.page5, this.nextPage];
  pagesText = ['8', '1', '3', '5', '6'];
}

export default new CommunityPage();
