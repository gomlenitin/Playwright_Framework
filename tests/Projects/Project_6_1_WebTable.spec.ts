import {test,expect} from '@playwright/test';

test("Selected multiple employee name and verify it",async({page})=>{
    // Navigate to CloudOps India Employee Directory
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    
    // Store selected employee names
    const selectedEmployee: string[] = [];
    
    // Select first 3 employees by checking their checkboxes
    for (let i = 1; i < 4; i++){
        // Construct XPath for current row
        const checkboxXPath = `//tbody//tr[${i}]//input[@type='checkbox']`;
        const usernameXPath = `//tbody//tr[${i}]//td[@class='username']`;
        
        // Check the checkbox
        await page.locator(checkboxXPath).check();
        
        // Get the employee name from username column
        const employeeName = await page.locator(usernameXPath).innerText();
        selectedEmployee.push(employeeName);
        
        // Wait for the UI to update after selection
        await page.waitForTimeout(500);
    }
    
    // Join employee names with comma and space
    const selectedEmployeeList = selectedEmployee.join(", ");
    
    // Verify the selected employees are displayed in the output
    const selectedOutputLocator = page.locator('#selected-output');
    //await selectedOutputLocator.waitFor({ state: 'visible' });
    await expect(selectedOutputLocator).toContainText(selectedEmployeeList);
    
})