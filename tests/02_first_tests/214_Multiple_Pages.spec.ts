import { chromium, test } from '@playwright/test';

test('open multiple pages in the same context', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://app.vwo.com/#login');
    console.log('Tab 1: Dashboard');

    const page2 = await context.newPage();
    await page2.goto('https://app.vwo.com/#dashboard');
    console.log('Tab 2: Settings');

    await context.close();
    await browser.close();
});
