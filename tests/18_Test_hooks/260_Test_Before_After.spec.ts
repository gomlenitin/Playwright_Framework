import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('beforeAll — server is up');
});

test.beforeEach(async ({ page }) => {
    // run before every test — e.g. log in, seed cookies
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 29 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29); // Change to anyother value to make test fail and it takes screenshot automatically
});

test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
});
// If the test fails,the screenshot will be taken automatically
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => {
    console.log('afterAll — tear down');
});

// To take screenshot on failure, in line #14, we can set some other value other than 29. then if we see, screenshot will be taken under out folder.
// We will be using this feature in framework desinging