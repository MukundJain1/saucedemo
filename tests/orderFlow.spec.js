import {test, chromium} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductPage } from '../pages/productpage';

test('Complete order flow using POM (JavaScript)', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart('add-to-cart-sauce-labs-fleece-jacket');
  await productPage.goToCart();
  await productPage.verifyProductInCart('Sauce Labs Fleece Jacket');
  await productPage.checkout('Mukund', 'Jain', '244001');
  await productPage.finishOrder();
  await productPage.logout();

  await browser.close();
});
