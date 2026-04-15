import { Page } from '@playwright/test';

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private email: string = "//input[@type='email']";
    private password: string = "//input[@type='password']";
    private loginBtn: string = "//input[@type='submit']";
    private passwordErrorMessage: string = "//div[text()='*Password is required']";
    private emailErrorMessage: string = "//div[text()='*Email is required']";

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