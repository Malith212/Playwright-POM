import { Page } from '@playwright/test';

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private email = "//input[@type='email']";
    private password = "//input[@type='password']";
    private loginBtn = "//input[@type='submit']";

    // Actions
    async navigate() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async login(emailValue: string, passwordValue: string) {
        await this.page.fill(this.email, emailValue);
        await this.page.fill(this.password, passwordValue);
        await this.page.click(this.loginBtn);
    }
}