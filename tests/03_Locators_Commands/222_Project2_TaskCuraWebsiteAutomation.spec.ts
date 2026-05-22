// https://katalon-demo-cura.herokuapp.com/
// On the make appointment.  Next page, you are going to enter the username and password.
// https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// The page contains make appointments. Make Appointment


import {test, expect} from "@playwright/test";

test ("Task-Cura-Website-Automation", async({page}) =>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let makeAppointmentButton =  page.locator("#btn-make-appointment");
    await makeAppointmentButton.click();

    let usernameInput = page.locator("#txt-username");
    await usernameInput.fill("John Doe");

    let passwordInput = page.locator("#txt-password");
    await passwordInput.fill("ThisIsNotAPassword");

    let loginButton = page.locator("#btn-login");
    await loginButton.click();
    
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    let makeAppointmentText = page.locator("//h2");
    await expect(makeAppointmentText).toContainText("Make Appointment");
});