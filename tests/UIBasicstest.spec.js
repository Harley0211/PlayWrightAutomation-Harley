const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  //chrome - plugins/ cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

  console.log(page.title());
  await page.locator("#username").type("rahulshetty");
  await page.locator("[type = 'password']").type("learning");
  await page.locator("[type = 'submit']").click();

  console.log(await page.locator("[style*='block']").textContent());

});

test ("Page Playwright Test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google")
});
