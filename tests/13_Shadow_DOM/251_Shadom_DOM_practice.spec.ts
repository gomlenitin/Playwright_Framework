import { test, expect } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {
        
        //single shadow root
        const card = page.getByTestId('card-account-card');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('pw');
        await card.getByTestId('card-account-submit').click();
        await expect(page.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');
        await page.waitForTimeout(15000);

        //A counter component with shadow-internal increment / decrement buttons
       const cart = page.locator('#counter-1');
       cart.getByRole('button', {name :'Increment'}).click();
       await expect(cart.getByTestId('counter-value')).toHaveText('4');


        //Sign up (inside the nested shadow)
        const nested= await page.getByTestId('nested-host');
        await nested.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await nested.getByTestId('card-inside-password').fill('pramod@123');
        await nested.getByTestId('card-inside-submit').click();
        await expect(nested.getByTestId('card-inside-status')).toContainText('pramod@thetestingacdemy.com');

        await page.waitForTimeout(15000);


       

    });


});