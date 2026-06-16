import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = 'https://the-internet.herokuapp.com/upload';

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {
        const filePath = path.join(__dirname, 'testdata.txt');
        console.log('File path:', filePath);

        await page.locator('#file-upload').setInputFiles([filePath]);
        await page.waitForTimeout(5000);
        await page.locator('#file-submit').click();
        await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');
        await page.waitForTimeout(15000);

    });

});