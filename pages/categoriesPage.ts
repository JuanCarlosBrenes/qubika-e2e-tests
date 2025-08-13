import { Page, expect } from '@playwright/test';

export class categoriesPage {
    constructor(private page: Page) {}

    async addCategory(name: string) {
        await this.page.getByRole('button', { name: 'Adicionar'}).click();
        await this.page.getByPlaceholder('Nombre de categoría').fill(name);
        await this.page.getByRole('button', { name: 'Aceptar' }).click(); 
        await this.page.waitForTimeout(1000);
        const pagesCategories = this.page.locator('a.page-link');
        const lastPage = pagesCategories.nth(await pagesCategories.count() -2);
        await lastPage.click();
        await expect(this.page.getByText(name)).toBeVisible();
    }

    async addSubCategory(parentName: string, subCategoryName: string) {
        const pagesCategories = this.page.locator('a.page-link');
        const lastPage = pagesCategories.nth(await pagesCategories.count() -2);
        await lastPage.click();
        const row = await this.page.locator(`td:has-text("${parentName}")`);
        const parent = await row.innerText();
        await this.page.getByRole('button', { name: 'Adicionar'}).click();
        await this.page.getByLabel('Nombre').fill(subCategoryName);
        await this.page.locator('.text-muted').click();
        const parentImput = await this.page.locator('input[aria-autocomplete="list"]');
        await parentImput.fill(parent);
        const subcategoryInput = await this.page.locator(`span:has-text("${parentName}")`);
        await subcategoryInput.click();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByText(subCategoryName)).toBeVisible();
        await expect(this.page.locator('')).toBeVisible();
    }
}