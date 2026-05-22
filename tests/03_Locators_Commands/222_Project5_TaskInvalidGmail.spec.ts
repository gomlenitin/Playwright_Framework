import {test, expect} from "playwright/test";

    
test("validate error message with Playwright getByRole", async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    // Filling the email field with an invalid gmail ID
    await page.locator("#page-v1-step1-email").fill('testuser@gmail.com');
    // Checkbox to be checked
    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").check();
    // Click on Create a Free Trial Account button
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click
    // Validate the Error message for invalid email entered
    let errormsg = page.getByText("gmail.com doesn\'t look like a business domain. Please use your business email.");
    await expect(errormsg).toContainText("gmail.com doesn\'t look like a business domain. Please use your business email.");

});