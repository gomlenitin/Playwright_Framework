import { chromium, test } from '@playwright/test';

test('open multiple browser contexts', async () => {
    const browser = await chromium.launch({ headless: false });

    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com/login');
    console.log('Admin: on login page');

    const viewerContext = await browser.newContext();
    const viewerPage = await viewerContext.newPage();
    await viewerPage.goto('https://app.vwo.com/login');
    console.log('Viewer: on login page');

    await adminContext.close();
    await viewerContext.close();
    await browser.close();
});
