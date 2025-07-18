import { Locator, Page } from "playwright";

export class ElementInteractions {
    constructor(private page: Page) { }

    async waitForDisplayedAndClick(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async waitForDisplayedAndType(locator: Locator, text: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
    }

    async scrollIntoViewIfNeeded(locator: Locator) {
    const isVisible = await locator.isVisible();
    if (!isVisible) {
        await locator.scrollIntoViewIfNeeded();
    }
}


}