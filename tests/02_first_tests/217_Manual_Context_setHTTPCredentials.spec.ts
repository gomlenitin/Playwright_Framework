import { test, expect } from '@playwright/test';

test('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin',
        },
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_authn');

    await context.close();
});



test('setHTTPCredentials', async ({ browser }) => {
    const httpCredentials = {
        username: 'admin',
        password: 'admin'
    };

    const context = await browser.newContext({ httpCredentials });

    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await context.close();
});

