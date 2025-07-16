import { Page } from "@playwright/test";
import { RegularLoginFlow } from "../tests/pageObject/flows/RegularLoginFlow";
import loginData from "../testData/loginData.json";

export class LoginHelper {
  private loginFlow: RegularLoginFlow;

  constructor(private page: Page) {
    this.loginFlow = new RegularLoginFlow(page);
  }

  async loginAsAdmin() {
    const { username, password } = loginData.admin;
    await this.loginFlow.login(username, password);
  }

  async loginAsProfessor() {
    const { username, password } = loginData.professor;
    await this.loginFlow.login(username, password);
  }

  async loginAsStudent() {
    const { username, password } = loginData.student;
    await this.loginFlow.login(username, password);
  }
}
