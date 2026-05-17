import {test, expect} from '@playwright/test';

test('should have a title of app.vwo.com', async ({page}) => {

    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle('Login - VWO');

});

test('should have a title of app.vwo.com duplicate', async function({page}) {

    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle('VWO - Application');

});