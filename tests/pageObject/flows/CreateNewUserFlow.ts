import { Page } from '@playwright/test';
import { AdminUsersTabComponents } from '../components/siteAdministrationComponents/siteAdminstrationTab/AdminUsersTabComponents';
import { CreateUserComponents } from '../components/siteAdministrationComponents/siteAdminstrationTab/CreateUserComponents';
import { CreateUserPage } from '../pages/CreateUserPage';
import { TopMenuComponents } from '../components/TopMenuComponents';
import { SiteAdministrationComponents } from '../components/siteAdministrationComponents/SiteAdministrationTabsComponents';

export class CreateNewUserFlow {
    constructor(private page: Page) {
        this.adminUsersTab = new AdminUsersTabComponents(page);
        this.createUserComponents = new CreateUserComponents(page);
        this.createUserPage = new CreateUserPage(page);
        this.topmenuComponents = new TopMenuComponents(page);
        this.siteadministrationComponents = new SiteAdministrationComponents(page);
    }

    adminUsersTab: AdminUsersTabComponents;
    createUserComponents: CreateUserComponents;
    createUserPage: CreateUserPage;
    topmenuComponents: TopMenuComponents;
    siteadministrationComponents: SiteAdministrationComponents;

    async createNewUser(username: string, password: string, email: string, firstname: string, lastname: string) {
        await this.topmenuComponents.clickSiteAdministrationButton();
        await this.siteadministrationComponents.clickUsersTabButton();
        await this.adminUsersTab.addUserButton.click();
        await this.createUserPage.createNewUser(username, password, email, firstname, lastname);
    }


}
