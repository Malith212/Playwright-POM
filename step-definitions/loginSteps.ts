import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('user is on the login page', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);

    await loginPage.navigate();
});

When('user enters valid credentials', async function () {
    await loginPage.login('navindumalith0@gmail.com', 'Malith123@');
});

When('clicks on login button', async function () {
    // Already handled inside login() method
});

Then('user should be redirected to dashboard', async function () {
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await browser.close();
});


When('user enters invalid credentials', async function () {
    await loginPage.login('invalid@gmail.com', 'Invalid123@');
});

Then('user should see an error message', async function () {
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');
        await browser.close();
});

When('user leaves the username and password fields empty', async function () {
    await loginPage.emptyCredentials();
});

Then('user should see a validation message', async function () {
    const emailErrorMessage = await loginPage.getEmailErrorMessage();
    const passwordErrorMessage = await loginPage.getPasswordErrorMessage();

    expect(emailErrorMessage).toBe('*Email is required');
    expect(passwordErrorMessage).toBe('*Password is required');

    await browser.close();
});

When('user leaves the password field empty', async function () {
    await loginPage.emptyPassword('invalid@gmail.com', '');
});

Then('user should see a password validation message', async function () {
    const passwordErrorMessage = await loginPage.getPasswordErrorMessage();
    expect(passwordErrorMessage).toBe('*Password is required');
    await browser.close();
});

When('user leaves the email field empty', async function () {
    await loginPage.emptyEmail('', 'Invalid123@');
});

Then('user should see an email validation message', async function () {
    const emailErrorMessage = await loginPage.getEmailErrorMessage();
    expect(emailErrorMessage).toBe('*Email is required');
    await browser.close();
});