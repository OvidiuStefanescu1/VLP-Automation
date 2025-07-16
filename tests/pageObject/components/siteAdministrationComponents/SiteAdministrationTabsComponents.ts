import { Page, Locator } from '@playwright/test';
import { ElementInteractions } from '../../../../utils/element-interactions';
export class SiteAdministrationComponents {
    constructor(private page: Page) {
        this.elementInteractions = new ElementInteractions(page);
    }

    elementInteractions: ElementInteractions;

    get generalTabButton() {
        return this.page.locator('.nav-link.active.active_tree_node').nth(0);
    }

    get usersTabButton() {
        return this.page.locator('.nav-link').nth(8);
    }

    get coursesTabButton() {
        return this.page.locator('.nav-link').nth(9);
    }

    get gradesTabButton() {
        return this.page.locator('.nav-link').nth(10);
    }

    get pluginsTabButton() {
        return this.page.locator('.nav-link').nth(11);
    }

    get appearanceTabButton() {
        return this.page.locator('.nav-link').nth(12);
    }

    get serverTabButton() {
        return this.page.locator('.nav-link').nth(13);
    }

    get reportsTabButton() {
        return this.page.locator('.nav-link').nth(14);
    }

    get developmentTabButton() {
        return this.page.locator('.nav-link').nth(15);
    }

    async clickGeneralTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.generalTabButton);
    }

    async clickUsersTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.usersTabButton);
    }

    async clickCoursesTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.coursesTabButton);
    }

    async clickGradesTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.gradesTabButton);
    }

    async clickPluginsTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.pluginsTabButton);
    }

    async clickAppearanceTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.appearanceTabButton);
    }

    async clickServerTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.serverTabButton);
    }

    async clickReportsTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.reportsTabButton);
    }

    async clickDevelopmentTabButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.developmentTabButton);
    }

}