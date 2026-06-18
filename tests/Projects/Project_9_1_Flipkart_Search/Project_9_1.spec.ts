// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs name() / local-name() because
// tag names are namespaced (e.g. svg:path).
// Common patterns: locate SVG, locate child shapes (path/rect/circle/g),
// click, hover, read attributes (d, fill, viewBox, stroke), assert state.

import {test, expect} from "@playwright/test";
import type {Locator} from "@playwright/test";

const Url = "https://www.flipkart.com/search";

test.describe("SVG handling",() =>{

  test.beforeEach(async({page})=>{
    await page.goto(Url);
  })

  test("from flipkart search result collect products names", async({page}) => {

    await page.locator('input[name="q"]').fill("macmini");
    // await page.locator('.bJtikv').click();

    //  await page.waitForTimeout(5000);

    // Click on Search icon
     const svgLocator : Locator = await page.locator("svg");
     await svgLocator.first().click();
     await page.waitForTimeout(5000);

     // Verify first result is visible and print its title
     const firstElement : Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]',);
     await expect(firstElement.first()).toBeVisible({timeout:15000});
     console.log(await firstElement.first().innerText());

    // Collect total numbers of all product titles
    const titlesResults : Locator = page.locator('//div[contains(@data-id,"CPU") or contains(@data-id,"MP")]/div/a[2]',);
    const count : number = await titlesResults.count(); 
    console.log(`Total products found: ${count}`);


     // Collect and print all product titles
     for(let i=0; i<count; i++){
      const title : string | null = await titlesResults.nth(i).textContent();
      console.log(title?.trim());
     }

     await page.waitForTimeout(5000);

  })

})