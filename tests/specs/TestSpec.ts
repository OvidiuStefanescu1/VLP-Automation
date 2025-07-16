import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

test.describe("This is the first test and is supposed to open Google", () => {
    let page: Page;

    test.beforeEach(async ({ context }) => {
        page = await context.newPage();
        await page.goto('https://vlp.at.assistcloud.services/');
    });

    test("This is simply supposed to open Google", async () => {
        await page.waitForTimeout(5000);
    });
});
