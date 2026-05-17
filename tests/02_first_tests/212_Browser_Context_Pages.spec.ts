import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';

async function run (){

    // LEVEL 1: Launch browser — heaviest operation, do it once
    let browser : Browser = await chromium.launch({headless: false});
    console.log('Browser Launched');

    // LEVEL 2: Create context — fresh session, isolated cookiestest
    let context : BrowserContext = await browser.newContext();
    console.log('Browser Context Created');

    // LEVEL 3: Create page — tab in the browser
    let page:Page = await context.newPage();
    console.log('Page Created');

     await page.goto("https://example.com");
    console.log("Title:", await page.title());

    // Cleanup — reverse order
    await page.close();
    await context.close();
    await browser.close();
}

run();