import { Page, expect } from '@playwright/test';

export class dashboardPage {
    constructor(private page: Page) {}

    async isLoggedIn() {
        await expect(this.page.getByText('Dashboard')).toBeVisible();
    }

    async goToCategories() {
        await this.page.getByRole('link', { name: 'Tipos de Categorias'}).click();
        await expect(this.page.getByText('Tipos de Categorias')).toBeVisible();
    }
}