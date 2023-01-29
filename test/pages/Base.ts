import Page from "../pages/Page.js";

class Base {
  closePopUpButton = '.jRrWoh';
  page = new Page();

  public async closePopUpWindow() {
    await this.page.click(this.closePopUpButton);
  }
}

export default new Base();
