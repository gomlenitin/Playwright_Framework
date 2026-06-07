import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('Verify that Helen Bennett is actually living in the UK', async ({ page }) => {

          await page.goto('https://awesomeqa.com/webtable.html');
        
        //Xpath of required value
        //---->//table[@id="customers"]/tbody/tr[5]/td[2]

        // part 1= //table[@id="customers"]/tbody/tr[
        // part 2= 5 -->i
        // part 3 = ]/td[
        // part 4= 2  -->j
        // part 5 = ]

        const firstPart = '//table[@id="customers"]/tbody/tr[';
        const secondPart =']/td[';
        const thirdPart = ']';
        
        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        console.log(`rows: ${rows} and cols: ${cols}`); 

        for(let i = 2; i <= rows; i++){
            for(let j = 1; j <= cols; j++){
                const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                console.log(dynamicPath);
                const data = await page.locator(dynamicPath).innerText();
                console.log(data);

                if(data.includes('Helen Bennett')){
                    const countryPath = `${dynamicPath}/following-sibling::td`;
                    const countryText = await page.locator(countryPath).innerText();
                    console.log('------');
                    console.log(`Helen Bennett is In - ${countryText}`);
                }

        } 
    } 

    });

});
