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
    private passwordErrorMessage = "//div[text()='*Password is required']";
    private emailErrorMessage = "//div[text()='*Email is required']";

    // Actions
    async navigate() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async login(emailValue: string, passwordValue: string) {
        await this.page.fill(this.email, emailValue);
        await this.page.fill(this.password, passwordValue);
        await this.page.click(this.loginBtn);
    }

    async getPasswordErrorMessage() {
        return await this.page.textContent(this.passwordErrorMessage);
    }

    async getEmailErrorMessage() {
        return await this.page.textContent(this.emailErrorMessage);
    }

    async emptyCredentials() {
        await this.page.click(this.loginBtn);
    }

    async emptyPassword(emailValue: string, passwordValue: string) {
        await this.page.fill(this.email, emailValue);
        await this.page.fill(this.password, passwordValue);
        await this.page.click(this.loginBtn);
    }

    async emptyEmail(emailValue: string, passwordValue: string) {
        await this.page.fill(this.email, emailValue);
        await this.page.fill(this.password, passwordValue);
        await this.page.click(this.loginBtn);
    }
}