import { test, expect, Page, BrowserContext } from '@playwright/test';
import { CreateNewUserFlow } from '../pageObject/flows/CreateNewUserFlow';
import { generateUsername } from '../../utils/generate-username';
import { RegularLoginFlow } from '../pageObject/flows/RegularLoginFlow';
import { LoginHelper } from '../../utils/login-helper';

test.describe("Create User Tests", () => {
    let page: Page;
    let createNewUserFlow: CreateNewUserFlow;
    let regularLoginFlow: RegularLoginFlow;
    let loginHelper: LoginHelper;

    test.beforeAll(async ({ browser }) => {
        const context: BrowserContext = await browser.newContext();
        page = await context.newPage();
    });

    test.beforeEach(async ({ context }) => {
        page = await context.newPage();
        await page.goto('https://vlp.at.assistcloud.services/');
        regularLoginFlow = new RegularLoginFlow(page);
        createNewUserFlow = new CreateNewUserFlow(page);
        loginHelper = new LoginHelper(page);

    });

    test("Check that a new user can be created", async () => {
        await loginHelper.loginAsAdmin();
        await createNewUserFlow.createNewUser('' + generateUsername(), 'Password123.', '' + generateUsername() + '@example.com', 'John', 'Doe');
        await expect(page).toHaveURL('https://vlp.at.assistcloud.services/admin/user.php');
    });
});