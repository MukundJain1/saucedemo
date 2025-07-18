const { test, expect } = require('@playwright/test');

test('My First Testing in playwright', async({page})=>{
    // await page.goto('https://www.youtube.com')
    await page.goto('https://www.youtube.com/');
    await expect(page).toHaveTitle('YouTube');
});
