import { test, expect } from '@playwright/test';

test.describe('Multiple Elements Tests', () => {

    test("finding ELEMENTS USING ALL AND ALLINNER TEXTS", async ({ page }) => {

        const url = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
        await page.goto(url);

        // allInnerTexts() - Get the inner text of all elements matching the selector
        const rightPanelLinksTexts:string[] = await page.locator('a.list-group-item').allInnerTexts();
        // Print the count of links
        console.log(`rightPanelLinksTexts: ${rightPanelLinksTexts.length}`); // Print the count of links
        
        //Printing the text of all the links
        let i = 0;
        for(const linktext of rightPanelLinksTexts){
            console.log("link (" + i + "): " + linktext);
            i++;
        }

        // Click on the link with text 'My Account' 
        for (const linktext of rightPanelLinksTexts) {
            if(linktext === 'My Account'){
                await page.getByText(linktext).first().click();
                break;
            }
        }

           // all - Get all elements matching the selector
        // const rightPanelLinks: any[] = await page.locator('a.list-group-item').all();
        // console.log(`rightPanelLinks: ${rightPanelLinks.length}`);

        // // Get the href attribute of each link and print it
        // for (const link of rightPanelLinks) {
        //     console.log(await link.getAttribute('href'));
        // }


    });

});