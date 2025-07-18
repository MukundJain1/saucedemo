import { test, chromium, expect } from '@playwright/test';

test.only('Complete order flow on Saucedemo', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('.shopping_cart_link').click();
  const cartItem = page.locator('.cart_item');
  await expect(cartItem).toContainText('Sauce Labs Fleece Jacket');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await page.close();
  await context.close();
  await browser.close();
});
