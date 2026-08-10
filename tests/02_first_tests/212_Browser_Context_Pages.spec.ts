import { chromium, test, type Browser, type BrowserContext, type Page } from '@playwright/test';

test('launch browser context and page manually', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    console.log('Browser Launched');

    const context: BrowserContext = await browser.newContext();
    console.log('Browser Context Created');

    const page: Page = await context.newPage();
    console.log('Page Created');

    await page.goto('https://example.com');
    console.log('Title:', await page.title());

    await page.close();
    await context.close();
    await browser.close();
});
