// Open the Flipkart website go to this link flipkart.com/search
// Search for the macmini and click on the SVG icon
//Get the all results on the first page and click on the low to high button and give me the cheapest macmini available on the flipkart.

import {test, expect} from '@playwright/test';

const BASE_URL = 'https://www.flipkart.com/';

test('Verify the cheapest Macmimi on Flipkart', async ({page}) => {
  // Navigate to Flipkart
  await page.goto(BASE_URL);

 // Close the login popup if it appears
  try {
    await page.getByRole('button', { name: '✕' }).click();
  } catch {
    console.log('Login popup not found, continuing with the test.');
  }

  await page.getByRole('textbox', { name: 'Search for products, brands and more' }).fill('macmini');
  await page.locator('button[type="submit"] svg').click();
  
  // Wait for results
  await page.waitForSelector('div[data-id]');
  await page.waitForTimeout(5000);

  // Click on  Price Low to High
  await page.getByText('Price -- Low to High').click();
  
  // Wait for sorting to apply and results to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000); // wait for 5' seconds to ensure sorting is applied

  // Get first product
  const firstProduct = page.locator("//div[contains(@data-id, 'CPU') or contains(@data-id, 'MPC') ]").first();
  await expect(firstProduct).toBeVisible({ timeout: 15000 });


  // Get the name and price of the first product
  const productNameLocator = await firstProduct.locator('a[title]').nth(0);
  const productName = await productNameLocator.innerText();
  //const productPrice = await productNameLocator.locator('div/div').first().innerText();
  const productPrice = await firstProduct.locator('.hZ3P6w').innerText();

  console.log('Cheapest Mac Mini:');
  console.log('Name:', productName?.trim());
  console.log('Price:', productPrice?.trim());

});


    