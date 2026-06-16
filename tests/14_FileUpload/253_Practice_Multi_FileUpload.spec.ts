import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {


        try{
            await page.locator('.pf-v6-c-alert.pf-m-info.ws-nav-announcement-banner').click();
            await page.locator("//button[@aria-label='Close Info alert: alert: Website update']//span[@class='pf-v6-c-button__icon']//*[name()='svg']").click();
        
        }catch(e){
            console.log("Error is : " + e);
        }

        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
      
            [{
                name : 'file1.jpg',
                mimeType : 'image/jpeg',
                buffer : Buffer.from('image from thetestingacademy code'),
            },
            {
                name : 'file2.jpg',
                mimeType : 'image/jpeg',
                buffer : Buffer.from('this is test'),
            }

           ]);
        await page.waitForTimeout(15000);

        //await page.locator('.pf-v6-c-button pf-m-secondary').click();  
        //await page.locator(".pf-v6-c-button pf-m-secondary").click(); 
        await page.getByText('Upload', { exact: true }).click();    
        await page.waitForTimeout(15000);

    });

});