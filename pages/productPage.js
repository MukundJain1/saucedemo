import { expect } from "@playwright/test";

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart(productTestId) {
    await this.page.locator(`[data-test="${productTestId}"]`).click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async verifyProductInCart(productName) {
    const cartItem = this.page.locator('.cart_item');
    await expect(cartItem).toContainText(productName);
  }

  async checkout(firstName, lastName, postalCode) {
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }

  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('[data-test="logout-sidebar-link"]').click();
  }
}

export default { ProductPage };
