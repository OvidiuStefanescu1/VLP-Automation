import { Page } from '@playwright/test';
import { ElementInteractions } from '../../../../../utils/element-interactions';
export class CreateUserComponents {
    constructor(private page: Page) {
        this.elementInteractions = new ElementInteractions(page);
    }

    elementInteractions: ElementInteractions;

    get usernameField() {
        return this.page.locator('#id_username');
    }

    get passwordEditButton() {
        return this.page.locator('.icon.fa.fa-pen.fa-fw').nth(0);
    }

    get passwordField() {
        return this.page.locator('input#id_newpassword');
    }

    get firstnameField() {
        return this.page.locator('#id_firstname');
    }

    get lastnameField() {
        return this.page.locator('#id_lastname');
    }

    get emailField() {
        return this.page.locator('#id_email');
    }

    get createUserButton() {
        return this.page.getByRole('button', { name: 'Create user' });
    }

    async addUsername(username: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.usernameField, username);
    }

    async addPassword(password: string) {
        await this.elementInteractions.waitForDisplayedAndClick(this.passwordEditButton);
        await this.elementInteractions.waitForDisplayedAndType(this.passwordField, password);
    }

    async addFirstname(firstname: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.firstnameField, firstname);
    }

    async addLastname(lastname: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.lastnameField, lastname);
    }

    async addEmail(email: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.emailField, email);
    }

    async clickCreateUserButton() {
        await this.elementInteractions.waitForDisplayedAndClick(this.createUserButton);
    }
}