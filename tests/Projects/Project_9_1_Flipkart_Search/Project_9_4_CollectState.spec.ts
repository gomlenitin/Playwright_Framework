// //div[@id='admin1_map_inner']//*[name()='svg']//*[contains(@class,'sm_label')]
import { test, expect } from "@playwright/test";

const SimpleMaps = "https://simplemaps.com/svg/country/in";

test.describe("Map Selection", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(SimpleMaps);
  });

  test("Print all states names and click on Maharashtra", async ({ page }) => {

    const states = await page.locator(`//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`,).allTextContents();
    const stateCode="INMH"
    
    // Printing all 36 states and clicking on UP
    for (const state of states) {
      console.log(state.trim());
      if (state.trim() === "Maharashtra") {
         await page
          .locator(`//*[name()='path' and contains(@class,'${stateCode}')]`)
          .click();
          
      }
    }
    
  });
});
