import { test, expect, Locator } from '@playwright/test';

test.describe('List states and click UP', () => {

    test('Advance SVG Project', async ({ page }) => {
        // Navigate to the SVG project page
        await page.goto('https://simplemaps.com/svg/country/in');

        // Locate all the state names in India
        const stateNames = await page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text" and contains(@class,"sm_label")]').allTextContents();

        // Iterate the state names and once we reach Uttar Pradesh, click it
        for (const state of stateNames) {
            console.log(state);
            if (state.startsWith('Uttar')) {
                //await page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="path" and contains(@class,"INUP")]').click();
                await page.locator('.sm_state.sm_state_INUP').click();
                break;
            }
        }
        await page.waitForTimeout(2000);

    });

    // https://chatgpt.com/share/6a053cc5-9a48-83e8-a6bd-bf249c5a98f5
    test('Print all states and click Uttar Pradesh', async ({ page }) => {

        await page.goto('https://simplemaps.com/svg/country/in');

        // Wait for all state paths
        await page.waitForSelector('path.sm_state');

        // Get all state elements
        const states = page.locator('path.sm_state');

        const count = await states.count();

        console.log(`Total states: ${count}`);

        // Print all class names
        for (let i = 0; i < count; i++) {

            const className = await states.nth(i).getAttribute('class');

            console.log(className);

            // Click Uttar Pradesh
            if (className?.includes('INUP')) {

                console.log('Clicking Uttar Pradesh');

                await states.nth(i).click();

                break;
            }
        }

        await page.waitForTimeout(3000);
    });

});