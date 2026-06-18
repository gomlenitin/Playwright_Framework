// https://chatgpt.com/share/69fb7416-b1ac-83e8-a500-bb4a4914699c

import { test, expect } from '@playwright/test';

test.describe('QA Profile Form Tests', () => {

    test('Complete the QA profile', async ({ page }) => {
        // Navigate to the QA profile form page
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

        // Fill the First Name and Last Name fields
        await page.getByRole('textbox', { name: 'First Name' }).fill('Sathish');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Kumar');

        // Select the Gender as Male
        const maleRadio = page.getByTestId('gender-male');
        await maleRadio.check();

        // Select the Profession as Automation Tester
        await page.getByRole('radio', { name: 'Automation Tester' }).check();

        // Technical skills - Automation Tools - Selenium WebDriver
        await page.getByTestId('tool-selenium').check();

        // Select the Continents you have worked from as Asia, Europe, and North America
        await page.getByTestId('continent-asia').check();
        await page.getByTestId('continent-europe').check();
        await page.getByTestId('continent-north-america').check();

        // Click on the Submit button
        await page.getByTestId('profile-submit').click();

        // Verify the Json output displayed on the page after submission
        const jsonOutput = page.locator('#submission-output');

        await expect(jsonOutput).toBeVisible();

        await expect(jsonOutput).toContainText('"firstName": "Sathish"');
        await expect(jsonOutput).toContainText('"lastName": "Kumar"');
        await expect(jsonOutput).toContainText('"gender": "Male"');
        await expect(jsonOutput).toContainText('"profession": "Automation Tester"');

    });

});
