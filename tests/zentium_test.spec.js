import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.zentium.ai/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testadmin@yopmail.com');
  await page.locator('div').filter({ hasText: /^Password$/ }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('P');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('P@ssword1');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Department' }).click();
  await page.locator('html').click();
  await page.getByText('@$@#$dfdsf').click();
  await page.getByText('Alliance Medical Group', { exact: true }).click();
  await page.getByRole('button', { name: 'Daily standup,On Wednesday' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Fellow' }).click();
  await page.getByRole('option', { name: 'Attending' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Emergency medicine' }).click();
  await page.getByText('Family medicine').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('button', { name: 'Tools' }).click();
  await page.getByRole('link', { name: 'Requests' }).click();
  await page.locator('#root').click();
  await page.goto('https://staging.zentium.ai/requests/shift/pending');
  
  await page.locator('#root').click();
  await page.locator('#root').click();
  await page.locator('#root').click();
  await page.locator('body').press('ControlOrMeta+r');
});