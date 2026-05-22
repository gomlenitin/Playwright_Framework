import { test, expect } from "@playwright/test";

test("locators are lazy, strict, and auto-wait using getByRole locator", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");
    await page.getByRole("textbox", {name: 'email address'}).fill("admin");
    await page.getByRole("textbox", {name: 'password'}).fill("admin");
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    await expect(page.getByText('Your email, password, IP address or location did not match')).toContainText('Your email, password, IP address or location did not match');
    
    console.log("All actions completed ✅");

    
    // let error_message = page.locator('#js-notification-box-msg');
    // // error_message.getByText()
    // await expect(error_message).toContainText("Your email, password, IP address or location did not match");




});