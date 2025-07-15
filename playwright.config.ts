import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import path from 'path';
import { testPaths } from './utils/test-paths';

const configBase: PlaywrightTestConfig = {
    testDir: testPaths.testDir,
    timeout: 90000,
    retries: 0,
    use: {
        headless: process.env.HEADLESS === 'true',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        actionTimeout: 35000,
        navigationTimeout: 20000,

    },
    testMatch: testPaths.testMatch
};

const config: PlaywrightTestConfig = {
    projects: ['chromium', 'webkit'].map(browser => ({
        name: browser,
        ...configBase
    })),
    reporter: './utils/custom-reporter.ts',
    workers: 1,
};

export default config;
