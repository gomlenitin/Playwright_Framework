import {test, expect} from '@playwright/test';

test("Transfer money and verify the final balance in TTA bank application",async({page})=>{
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByText("Sign Up").click();
    await page.getByPlaceholder('John Doe').fill('Nitin');
    await page.getByPlaceholder('you@example.com').fill('Nitin1234@test.com');
    await page.getByPlaceholder('••••••••').fill('Test@1234');
    await page.getByText("Create Account").click();

    // Validate the Opening Balance is $50,000.00
    let initialBalance:any = await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText();
    console.log("Initial Balance:", (initialBalance));
    //Number() is a built-in JavaScript/TypeScript function 
    // that converts a value into a numeric data type.
    initialBalance = Number(initialBalance.replace(/[^0-9.]/g, ''));
 
    // Navigate to Transfer Funds Tab
    await page.getByText('Transfer Funds').click();

    // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234567890
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('Transfering $5000 to account number 1234567890');
    let tranferAmount:any = Number(await page.locator('//input[@type="number"]').inputValue());
    await page.getByRole('button', { name: 'Continue' }).click();

    // Review the Transfer Details and Click on Confirm Transfer Button
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();

    // Navigate to Dashboard and Validate the Balance is reduced
    await page.getByText('Dashboard').click();
    let finalBalance:any = initialBalance - tranferAmount;
    console.log("Final Balance:", finalBalance);
    await page.waitForTimeout(3000);
    let actualBalance = Number((await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText()).replace(/[^0-9.]/g,''));
    expect(actualBalance).toBe(finalBalance);


})