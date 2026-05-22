// https://katalon-demo-cura.herokuapp.com/
// On the make appointment.  Next page, you are going to enter the username and password.
// https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// The page contains make appointments. Make Appointment


import {test, expect} from "playwright/test";

test ("Task-Cura-Website-Automation using getByRole locator", async({page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link', {name: 'Make Appointment'}).click();
    // await page.getByRole('textbox', {name: 'Username'}).nth(1).fill("John Doe");
    await page.getByLabel('Username').fill("John Doe");
    await page.getByPlaceholder('Password').nth(1).fill("ThisIsNotAPassword");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    // await expect(page.getByRole('heading', { name: 'Make Appointment' })).toContainText("Make Appointment");
    // await expect(page.getByRole('heading', { name: 'Make Appointment', level:2 })).toContainText("Make Appointment");
    await expect(page.getByRole('heading', { name: 'Make Appointment'})).toContainText("Make Appointment");


})
