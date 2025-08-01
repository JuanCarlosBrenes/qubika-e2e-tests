import { Page, expect } from '@playwright/test';

export class loginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://club-administration.qa.qubika.com/#/auth/login');
    }

    async isDisplayed() {
        await expect(this.page.getByRole('button', {name: 'Autenticar'})).toBeVisible();
        await expect(this.page.getByPlaceholder('Usuario o correo electrónico')).toBeVisible();
    }

    async login(email: string, password: string) {
        await this.page.getByPlaceholder('Usuario o correo electrónico').fill(email);
        await this.page.getByPlaceholder('Contraseña').fill(password);
        await this.page.getByRole('button', {name: 'Autenticar'}).click();
    }
}