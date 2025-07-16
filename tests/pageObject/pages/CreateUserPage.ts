import { Page } from '@playwright/test';
import { CreateUserComponents } from '../components/siteAdministrationComponents/siteAdminstrationTab/CreateUserComponents';
export class CreateUserPage {
    constructor(private page: Page) {
        this.createUserComponents = new CreateUserComponents(page);
    }

    createUserComponents: CreateUserComponents;

    async createNewUser(username: string, password: string, email: string, firstname: string, lastname: string) {
    const createUserComponents = new CreateUserComponents(this.page);

    await createUserComponents.usernameField.scrollIntoViewIfNeeded();
    await createUserComponents.addUsername(username);

    await createUserComponents.passwordEditButton.scrollIntoViewIfNeeded();
    await createUserComponents.addPassword(password);

    await createUserComponents.emailField.scrollIntoViewIfNeeded();
    await createUserComponents.addEmail(email);

    await createUserComponents.firstnameField.scrollIntoViewIfNeeded();
    await createUserComponents.addFirstname(firstname);

    await createUserComponents.lastnameField.scrollIntoViewIfNeeded();
    await createUserComponents.addLastname(lastname);

    await createUserComponents.createUserButton.scrollIntoViewIfNeeded();
    await createUserComponents.clickCreateUserButton();
}

}