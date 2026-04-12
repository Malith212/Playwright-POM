import { test, expect, Page } from '@playwright/test';

test('Login', async ({ page }: { page: Page }) => {

    // Locators
    const email = page.locator("//input[@type='email']");
    const password = page.locator("//input[@type='password']");
    const loginBtn = page.locator("//input[@type='submit']");

    // Test Data
    const emailValue: string = "navindumalith0@gmail.com";
    const passwordValue: string = "Malith123@";

    // Navigate
    await page.goto('https://rahulshettyacademy.com/client');

    // Actions
    await email.fill(emailValue);
    await password.fill(passwordValue);
    await loginBtn.click();

    // Assertion (IMPORTANT)
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');


});