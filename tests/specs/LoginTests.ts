import { test, expect, BrowserContext, Page } from '@playwright/test';
import { RegularLoginFlow } from '../pageObject/flows/RegularLoginFlow';
import loginData from '../../testData/loginData.json'; // <--- import datele de login

test.describe("Login flows using username and password", () => {
    let page: Page;
    let regularLoginFlow: RegularLoginFlow;

    test.beforeAll(async ({ browser }) => {
        const context: BrowserContext = await browser.newContext();
        page = await context.newPage();
        //regularLoginFlow = new RegularLoginFlow(page);
    });

    test.beforeEach(async ({ context }) => {
        page = await context.newPage();
        await page.goto('https://vlp.at.assistcloud.services/');
        regularLoginFlow = new RegularLoginFlow(page);
    });

    test("Check admin account login", async () => {
        const { username, password } = loginData.admin;
        await regularLoginFlow.login(username, password);

        const dashboardElement = page.locator('.logo.me-1');
        await expect(dashboardElement).toBeVisible();
    });

    test("Check professor account login", async () => {
        const { username, password } = loginData.professor;
        await regularLoginFlow.login(username, password);

        const dashboardElement = page.locator('.logo.me-1');
        await expect(dashboardElement).toBeVisible();
    });

    test("Check student account login", async () => {
        const { username, password } = loginData.student;
        await regularLoginFlow.login(username, password);

        const dashboardElement = page.locator('.logo.me-1');
        await expect(dashboardElement).toBeVisible();
    });
});
