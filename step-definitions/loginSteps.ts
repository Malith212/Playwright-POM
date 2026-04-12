import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('user navigates to login page', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);

    await loginPage.navigate();
});

When('user enters valid email and password', async function () {
    await loginPage.login('navindumalith0@gmail.com', 'Malith123@');
});

When('clicks on login button', async function () {
    // Already handled inside login() method
});

Then('user should be redirected to dashboard', async function () {
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await browser.close();
});