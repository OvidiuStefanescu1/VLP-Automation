import { Page } from "playwright";
import { LoginPageComponents } from "../components/LoginPageComponents";

export class RegularLoginFlow {
    constructor(private page: Page) {
        this.loginPage = new LoginPageComponents(page);
    }

    loginPage: LoginPageComponents;

    async login(username: string, password: string) {
        await this.loginPage.clickGoToLoginPage();
        await this.loginPage.addUsername(username);
        await this.loginPage.addPassword(password);
        await this.loginPage.clickLogin();
    }

}