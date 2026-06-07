import {test, expect} from '@playwright/test';

test.describe('PlayWright Native locators', () => {

    test('Verify that Helen Bennett is actually living in the UK', async({page}) =>{

            // Playwright Native Locators is very much recommended. 
        
        await page.goto('https://awesomeqa.com/webtable.html');

        const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
        const country1 = await row1.locator('td').nth(2).innerText();
        console.log(`Helen Bennett is In - ${country1}`);
    })


});