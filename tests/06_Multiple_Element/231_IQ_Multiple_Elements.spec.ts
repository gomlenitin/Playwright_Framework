import { test, expect } from '@playwright/test';

// test.describe('Multiple Elements Tests', () => {
    test('Basic Test - Verify page title', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        // allInnerTexts() - Get the inner text of all elements matching the selector
        const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(`rightPanelLinksTexts: ${rightPanelLinksTexts.length}`); // Print the count of links

        // Click on the link with text 'My Account'
        for (const linktext of rightPanelLinksTexts) {
            if (linktext === 'My Account') {
                await page.getByText(linktext).first().click();
                break;
            }
        }

        // all - Get all elements matching the selector
        const rightPanelLinks: any[] = await page.locator('a.list-group-item').all();
        console.log(`rightPanelLinks: ${rightPanelLinks.length}`);

        // Get the href attribute of each link and print it
        for (const link of rightPanelLinks) {
            console.log(await link.getAttribute('href'));
        }


        // Playwright Native Locators is very much recommended. 

        const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
        const country1 = await row1.locator('td').nth(2).innerText();
        console.log(`Helen Bennett is In - ${country1}`);

    });

// });