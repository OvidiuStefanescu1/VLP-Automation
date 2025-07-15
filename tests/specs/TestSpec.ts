import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

test.describe("This is the first test and is supposed to open Google", () => {
    let page: Page;

    test.beforeEach(async ({ context }) => {
        page = await context.newPage();
    });

    test("This is simply supposed to open Google", async () => {
        await page.goto('https://www.google.com');
        await page.waitForTimeout(5000);
    });
});
