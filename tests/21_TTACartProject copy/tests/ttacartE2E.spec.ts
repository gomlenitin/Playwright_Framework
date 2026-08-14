import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/TTACartLoginPage';
import { TtacartinventorypageTs } from '../pages/TTACartInventoryPage';
import { TtacartcheckoutpageTs } from '../pages/TTACartCheckoutPage';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

const ttacartUsername = getRequiredEnv('TTACART_USERNAME');
const ttacartPassword = getRequiredEnv('TTACART_PASSWORD');

test.describe('TTA Cart Automation', () => {


    test('Login with valid credns', async ({ page }) => {

        const loginPage = new Loginpage(page);
        await loginPage.goTo();
        await loginPage.Login(ttacartUsername, ttacartPassword);
        const ttacartinventorypageTs = new TtacartinventorypageTs(page);
        await ttacartinventorypageTs.addToInventory();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        await ttacartinventorypageTs.checkoutCart(p);
        const ttacartcheckoutpageTs = new TtacartcheckoutpageTs(page);
        await ttacartcheckoutpageTs.fillCheckoutPage();
       await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');

    });
});