// Open the Flipkart website go to this link flipkart.com/search
// Search for the macmini and click on the SVG icon
// Get the all results of the product and their price
import {test, expect} from '@playwright/test';

const BASE_URL = 'https://www.flipkart.com/';

test('Verify the search product name and price on Flipkart', async ({page}) => {
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
  await page.waitForTimeout(5000); // wait for 5' seconds to ensure sorting is applied

  // Get first product
  const productsLocator = page.locator("//div[contains(@data-id, 'CPU') or contains(@data-id, 'MPC') ]");
  const productCount = await productsLocator.count();

  for(let i=0; i<productCount; i++){

  //const title = await productsLocator.nth(i).locator('a[title]').textContent();
  const title = await productsLocator.nth(i).locator('.pIpigb').textContent();
  const price = await productsLocator.nth(i).locator('.hZ3P6w').first().innerText();
  console.log(`${title?.trim()} - ${price}`);

    
  }


});