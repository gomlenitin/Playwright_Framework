import { test, expect } from '@playwright/test';

test('Selelcting checkbox for username of web table', async ({page}) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
        //await page.locator("//tbody[@id='employee-body']/tr[@data-username='Ananya.Iyer']/preceding-sibling::td/input[@type='checkbox']").click();
        await page.getByRole('checkbox', { name: 'Select Kabir.Khan' }).click();
        
        await page. locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();
        
        // await page.locator("tr:has (td: text ('Rohan.Mehta'))")
        // .locator("td")
        // .first()
        // .click();

        await page.waitForTimeout(8000);

})