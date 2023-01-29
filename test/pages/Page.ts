const defaultTimeout: number = 10000; // 10sec

export default class Page {

  public openUrl(url: string, path: string = '') {
    return browser.url(`${url}${path}`);
  }

  public async getElement(element: string) {
    return await $(element);
  }

  public async getAllElements(element: string) {
    return (await $$(element));
  }

  public async getElementByIndex(element: string, index: number) {
    return (await this.getAllElements(element))[index];
  }

  public async isElementClickable(element: string) {
    return (await this.getElement(element)).isClickable();
  }

  public async isElementByIndexClickable(element: string, index: number) {
    return (await this.getElementByIndex(element, index)).isClickable();
  }

  public async waitUntilClickable(element: string, timeout: number = defaultTimeout) {
    await browser.waitUntil(async () => {
      return (await this.getElement(element)).isClickable();
    }, { timeout: timeout });
  }

  public async waitUntilClickableByIndex(element: string, index: number) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndex(element, index)).isClickable();
    });
  }

  public async isElementDisplayed(element: string) {
    return (await this.getElement(element)).isDisplayed();
  }

  public async isElementByIndexDisplayed(element: string, index: number) {
    return (await this.getElementByIndex(element, index)).isDisplayed();
  }

  public async waitUntilDisplayed(element: string, timeout: number = defaultTimeout) {
    await browser.waitUntil(async () => {
      return (await this.getElement(element)).isDisplayed();
    }, { timeout: timeout });
  }

  public async waitUntilNotDisplayed(element: string, timeout: number = defaultTimeout) {
    await browser.waitUntil(async () => {
      return !(await this.getElement(element)).isDisplayed();
    }, { timeout: timeout });
  }

  public async waitUntilDisplayedByIndex(element: string, index: number) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndex(element, index)).isDisplayed();
    });
  }

  public async isElementSelected(element: string) {
    return (await this.getElement(element)).isSelected();
  }

  public async isElementByIndexSelected(element: string, index: number) {
    return (await this.getElementByIndex(element, index)).isSelected();
  }

  public async waitUntilSelected(element: string) {
    await browser.waitUntil(async () => {
      return (await this.getElement(element)).isSelected();
    });
  }

  public async waitUntilSelectedByIndex(element: string, index: number) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndex(element, index)).isSelected();
    });
  }

  public async isElementExisting(element: string) {
    return (await this.getElement(element)).isExisting();
  }

  public async isElementNotExisting(element: string) {
    return !(await this.getElement(element)).isExisting();
  }

  public async isElementByIndexExisting(element: string, index: number) {
    return (await this.getElementByIndex(element, index)).isExisting();
  }

  public async waitUntilExists(element: string, timeout = defaultTimeout) {
    await browser.waitUntil(async () => {
      return (await this.getElement(element)).isExisting();
    }, { timeout: timeout });
  }

  public async waitUntilExistsByIndex(element: string, index: number) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndex(element, index)).isExisting();
    });
  }

  public async waitUntilExistsWithRefresh(element: string, timeout = defaultTimeout) {
    await browser.refresh();
    await this.waitUntilExists(element, timeout);
  }

  public async click(element: string) {
    await this.waitUntilClickable(element);
    await (await this.getElement(element)).click();
  }

  public async clickByIndex(element: string, index: number) {
    await this.waitUntilClickableByIndex(element, index);
    await (await this.getElementByIndex(element, index)).click();
  }

  public async clickDropdownItemByIndex(element: string, index: number) {
    await this.waitUntilClickable(element);
    await (await this.getElement(element)).selectByIndex(index);
  }

  public async clickDropdownItemByText(element: string, text: string) {
    await this.waitUntilClickable(element);
    await (await this.getElement(element)).selectByVisibleText(text);
  }

  public async getElementText(element: string) {
    await this.waitUntilDisplayed(element);
    return (await this.getElement(element)).getText();
  }

  public async getElementByIndexText(element: string, index: number) {
    await this.waitUntilDisplayedByIndex(element, index);
    return (await this.getElementByIndex(element, index)).getText();
  }

  public async waitUntilElementIncludesText(element: string, text: string) {
    await browser.waitUntil(async () => {
      return (await this.getElementText(element)).includes(text);
    });
  }

  public async waitUntilElementByIndexIncludesText(element: string, index: number, text: string, timeout = defaultTimeout) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndexText(element, index)).includes(text);
    }, { timeout: timeout });
  }

  public async getElementValue(element: string) {
    await this.waitUntilDisplayed(element, defaultTimeout);
    return (await this.getElement(element)).getValue();
  }

  public async getElementByIndexValue(element: string, index: number) {
    await this.waitUntilDisplayedByIndex(element, index);
    return (await this.getElementByIndex(element, index)).getValue();
  }

  public async waitUntilElementIncludesValue(element: string, value: any) {
    await browser.waitUntil(async () => {
      return (await this.getElementValue(element)).includes(value);
    });
  }

  public async waitUntilElementByIndexIncludesValue(element: string, index: number, value: any) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndexValue(element, index)).includes(value);
    });
  }

  public async getElementAttribute(element: string, attribute: string) {
    return await (await this.getElement(element)).getAttribute(attribute);
  }

  public async getElementCssProperty(element: string, attribute: string) {
    return await (await this.getElement(element)).getCSSProperty(attribute);
  }

  public async getElementByIndexAttribute(element: string, index: number, attribute: string) {
    await this.waitUntilExistsByIndex(element, index);
    return await (await this.getElementByIndex(element, index)).getAttribute(attribute);
  }

  public async waitUntilElementIncludesAttribute(element: string, attribute: string, text: string) {
    await browser.waitUntil(async () => {
      return (await this.getElementAttribute(element, attribute)).includes(text);
    });
  }

  public async waitUntilElementByIndexIncludesAttribute(element: string, index: number, attribute: string, text: string) {
    await browser.waitUntil(async () => {
      return (await this.getElementByIndexAttribute(element, index, attribute)).includes(text);
    });
  }

  public async scrollElementIntoViewTop(element: string) {
    await (await this.getElement(element)).scrollIntoView({behavior: 'smooth'});
  }

  public async scrollElementIntoViewBottom(element: string) {
    await (await this.getElement(element)).scrollIntoView(false);
  }

  public async scrollElementByIndexIntoViewTop(element: string, index: number) {
    await (await this.getElementByIndex(element, index)).scrollIntoView();
  }

  public async scrollElementByIndexIntoViewBottom(element: string, index: number) {
    await (await this.getElementByIndex(element, index)).scrollIntoView(false);
  }

  public async setValue(element: string, value: any) {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).setValue(value);
  }

  public async setValueByIndex(element: string, index: number, value: any) {
    await this.waitUntilDisplayedByIndex(element, index);
    await (await this.getElementByIndex(element, index)).setValue(value);
  }

  public async addValue(element: string, value: any) {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).addValue(value);
  }

  public async addValueByIndex(element: string, index: number, value: any) {
    await this.waitUntilDisplayedByIndex(element, index);
    await (await this.getElementByIndex(element, index)).addValue(value);
  }

  public async clearValue(element: string) {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).clearValue();
  }

  public async clearValueByIndex(element: string, index: number) {
    await this.waitUntilDisplayedByIndex(element, index);
    await (await this.getElementByIndex(element, index)).clearValue();
  }

  public async clearValueByBackspace(element: string) {
    await this.waitUntilDisplayed(element);
    const inputLength = (await this.getElementValue(element)).length;
    let i = 0
    for (i = 0; i <= inputLength; i++) {
      await this.addValue(element, 'Backspace');
    }
  }

  public async clickBackspace(element: string) {
    await this.addValue(element, 'Backspace');
  }

  public async switchToSsoMode(key: any, value: any) {
    await browser.execute(async function (key, value) {
      await this.localStorage.setItem(key, value)
    }, key, value)
    await browser.refresh();
  }

  public async getListSize(element: string) {
    return (await this.getAllElements(element)).length;
  }

  public async hoverElement(element: string) {
    await (await $(element)).moveTo();
  }

  public async clickEnterKey() {
    await browser.keys("\uE007")
  }
}
