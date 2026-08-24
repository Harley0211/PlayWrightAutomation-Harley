const { test, expect } = require("@playwright/test");

test.only("Browser Context - Validating Error Login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cartTitles = page.locator(".card-body a");

  await userName.type("rahulshetty");
  await page.locator("#password").fill("Learning@830$3mK2");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();

  console.log(await cartTitles.first().textContent());
  console.log(await cartTitles.nth(1).textContent());
  const allCardTitles = await cartTitles.allTextContents();
  console.log(allCardTitles);
});
