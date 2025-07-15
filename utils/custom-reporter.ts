import { Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

export default class CustomReporter implements Reporter {
    private startTime: number = 0;

    private results: any = {
        summary: {
            status: 'failed',
            totalTests: 0,
            passed: 0,
            failed: 0,
            skipped: 0,
            flaky: 0,
            duration: '',
            timestamp: new Date().toISOString(),
            browser: ''
        },
        tests: []
    };

    constructor() {
        console.log('CustomReporter loaded');
    }

    onBegin(config: any, suite: Suite) {
        this.startTime = Date.now();
        console.log(`Starting the run with ${suite.allTests().length} tests`);
        this.results.summary.totalTests = suite.allTests().length;
        this.results.summary.browser = config.projects.map((project: any) => project.name).join(',');
    }

    onTestEnd(test: TestCase, result: TestResult) {
        let statusColor;
        switch (result.status) {
            case 'passed':
                statusColor = '\x1b[32m'; // green
                break;
            case 'failed':
                statusColor = '\x1b[31m'; // red
                break;
            case 'skipped':
                statusColor = '\x1b[33m'; // yellow
                break;
            case 'interrupted':
                statusColor = '\x1b[33m'; // yellow
                break;
            default:
                statusColor = '\x1b[37m'; // gray
                break;
        }

        console.log(`${statusColor}Finished test: ${test.title} - ${result.status}\x1b[0m`);

        const testResult = {
            id: test.id,
            title: test.title,
            file: test.location.file,
            browser: test.parent?.project()?.name || 'unknown',
            status: result.status,
            duration: `${(result.duration / 1000).toFixed(1)}s`,
            error: result.errors.length > 0
                ? {
                    message: result.errors[0].message,
                    type: result.errors[0].constructor.name,
                    line: result.errors[0].location?.line || 'unknown',
                    details: result.errors[0].message
                }
                : null,
            screenshots: result.attachments?.filter(a => a.name === 'screenshot').map(a => a.path) || [],
            videos: result.attachments?.filter(a => a.name === 'video').map(a => a.path) || []
        };

        const outputDir = path.join(process.cwd(), 'test-results-custom', test.id);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        result.attachments?.forEach(attachment => {
            if (attachment.path) {
                const destPath = path.join(outputDir, path.basename(attachment.path));
                fs.copyFileSync(attachment.path, destPath);
            }
        });

        this.results.tests.push(testResult);

        if (result.status === 'passed') {
            this.results.summary.passed++;
        } else if (result.status === 'failed') {
            this.results.summary.failed++;
        } else if (result.status === 'skipped') {
            this.results.summary.skipped++;
        }
    }

    onEnd(result: any) {
        const endTime = Date.now();
        const durationInSeconds = ((endTime - this.startTime) / 1000).toFixed(1);
        this.results.summary.duration = `${durationInSeconds}s`;
        this.results.summary.status = result.status;

        //informs that the results were saved
        console.log(`Finished the run with status: ${result.status}`);
        console.log(`Saving results to JSON...`);

        //shows them in console too
        console.log(`Finished the run with status: ${result.status}`);
        console.log(`Total Tests: ${this.results.summary.totalTests}`);
        console.log(`Passed: ${this.results.summary.passed}`);
        console.log(`Failed: ${this.results.summary.failed}`);
        console.log(`Skipped: ${this.results.summary.skipped}`);
        console.log(`Duration: ${this.results.summary.duration}`);


        const outputDir = path.join(process.cwd(), 'test-results-custom');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.join(outputDir, 'results.json');
        fs.writeFileSync(outputPath, JSON.stringify(this.results, null, 2));

        console.log(`Results saved to ${outputPath}`);
    }
}