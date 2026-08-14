import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/TTACartLoginPage';
import { TtacartinventorypageTs } from '../pages/TTACartInventoryPage';
import { TtacartcheckoutpageTs } from '../pages/TTACartCheckoutPage';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env');
const legacyEnvPath = path.resolve(__dirname, '../env');

// Prefer the conventional .env file while retaining support for the existing
// project credential file, which is named "env".
dotenv.config({ path: require('fs').existsSync(envPath) ? envPath : legacyEnvPath });

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
        await loginPage.goto();
        await loginPage.login(ttacartUsername, ttacartPassword);
        const ttacartinventorypageTs = new TtacartinventorypageTs(page);
        await ttacartinventorypageTs.addToInventory();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        await ttacartinventorypageTs.checkoutCart();
        const ttacartCheckout = new TtacartcheckoutpageTs(page);
        await ttacartCheckout.fillCheckoutPage();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');

    });
});
