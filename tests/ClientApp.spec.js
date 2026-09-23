const { test, expect } = require("@playwright/test");

test.only("Browser Context - Validating Error Login", async ({ page }) => {
  await page.goto("https://www.rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
