import { Page } from "playwright";
import { ElementInteractions } from "../../../utils/element-interactions";

export class LoginPageComponents {
    constructor(private page: Page) {
        this.elementInteractions = new ElementInteractions(page);
    }

    elementInteractions: ElementInteractions;

    get guestPageLoginButton() {
        return this.page.locator('.login.ps-2').nth(0);
    }
    get usernameField() {
        return this.page.locator("#username");
    }

    get passwordField() {
        return this.page.locator("#password");
    }

    get googleLoginbutton() {
        return this.page.locator(".btn.login-identityprovider-btn.w-100");
    }

    get loginButton() {
        return this.page.locator("#loginbtn");
    }

    get forgotPasswordButton() {
        return this.page.locator(".login-form-forgotpassword.mb-3");
    }

    async clickGoToLoginPage() {
        await this.elementInteractions.waitForDisplayedAndClick(this.guestPageLoginButton);
    }

    async addUsername(username: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.usernameField, username);
    }

    async addPassword(password: string) {
        await this.elementInteractions.waitForDisplayedAndType(this.passwordField, password);
    }

    async clickLogin() {
        await this.elementInteractions.waitForDisplayedAndClick(this.loginButton);
    }
}