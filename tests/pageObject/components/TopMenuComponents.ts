import { Page, Locator, BrowserContext } from '@playwright/test';
import { ElementInteractions } from '../../../utils/element-interactions';

export class TopMenuComponents {
    constructor(private page: Page) {
        this.elementInteractions = new ElementInteractions(page);
    }

    elementInteractions: ElementInteractions;

    get homeButton() {
        return this.page.locator('.nav-item').nth(0);
    }

    get dashboardButton() {
        return this.page.locator('.nav-item').nth(1);
    }

    get myCoursesButton() {
        return this.page.locator('.nav-item').nth(2);
    }

    get siteAdministrationButton() {
        return this.page.locator('.nav-item').nth(3);
    }

    async clickHomeButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.homeButton);
    }

    async clickDashboardButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.dashboardButton);
    }

    async clickMyCoursesButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.myCoursesButton);
    }

    async clickSiteAdministrationButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.siteAdministrationButton);
    }

}