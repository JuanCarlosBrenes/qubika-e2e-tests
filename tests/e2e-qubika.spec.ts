import { test, expect, request, APIRequestContext } from '@playwright/test';
import { generateRandomEmail, defaultPassword, userRole } from '../utils/generateUser';
import { loginPage } from '../pages/LoginPage';
import { dashboardPage } from '../pages/DashboardPage';
import { categoriesPage } from '../pages/CategoriesPage';
import { Console } from 'console';

let apiContext: APIRequestContext;

test.describe('End-to-End: Qubika Sports Club Management', () => {
  let email: string;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext();
    email = generateRandomEmail();

    const response = await apiContext.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
      data: {
        email,
        password: defaultPassword,
        roles: userRole,
      },
    });

    expect(response.ok()).toBeTruthy();
  });

  test('Complete E2E flow using API and UI', async ({ page }) => {
    const LoginPage = new loginPage(page);
    const DashboardPage = new dashboardPage(page);
    const CategoriesPage = new categoriesPage(page);

    await LoginPage.goto();
    await LoginPage.isDisplayed();
    await LoginPage.login(email, defaultPassword);
    await DashboardPage.isLoggedIn();

    await DashboardPage.goToCategories();
    const categoryName = `Cat-${Date.now()}`;
    await CategoriesPage.addCategory(categoryName);

    const subCategoryName = `Sub-${Date.now()}`;
    await CategoriesPage.addSubCategory(categoryName, subCategoryName);
  });

  test('Test de ejemplo para git.', async ({ page }) => {
    console.log('Test que da cambios para git.');
  });
});