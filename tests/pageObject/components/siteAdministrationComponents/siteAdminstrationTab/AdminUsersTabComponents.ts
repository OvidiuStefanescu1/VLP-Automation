import { Page, Locator } from '@playwright/test';
import { ElementInteractions } from '../../../../../utils/element-interactions';
export class AdminUsersTabComponents {
    constructor(private page: Page) {
        this.elementInteractions = new ElementInteractions(page);
    }

    elementInteractions: ElementInteractions;

    get browseListOfUsersButton() {
        return this.page.getByRole('link', { name: 'Browse list of users' });
    }

    get addUserButton() {
        return this.page.getByRole('link', { name: 'Add a new user' });
    }

}