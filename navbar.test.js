const { test, expect } = require('@playwright/test');

test('Test responsive navigation bar', async ({ page }) => {
  // Navigate to the page with the responsive navigation bar
  await page.goto('http://localhost:5173/');

  // Test that the logo is visible
  await expect(page.locator('text=Your Logo')).toBeVisible();

  // Test the navigation links
  await expect(page.locator('text=Home')).toBeVisible();
  await expect(page.locator('text=About')).toBeVisible();
  await expect(page.locator('text=Services')).toBeVisible();
  await expect(page.locator('text=Contact')).toBeVisible();

  // Test the mobile menu
  await page.click('text=Home'); // Click the hamburger menu
  await expect(page.locator('text=Home')).toBeVisible();
  await expect(page.locator('text=About')).toBeVisible();
  await expect(page.locator('text=Services')).toBeVisible();
  await expect(page.locator('text=Contact')).toBeVisible();

  // Close the browser (optional)
  // await browser.close();
});
