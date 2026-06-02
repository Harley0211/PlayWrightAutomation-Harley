// const { test } = require("@playwright/test");

// test("Browser Context Playwright Test", async ({ browser, page }) => {
//   //chrome - plugins/ cookies
//   //   const context = await browser.newContext();
//   //   const page = await context.newPage();
//   await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
// });

// test.only("Page Playwright Test", async ({ page }) => {
//   await page.goto("https://www.google.com/");
// });

const { test } = require("@playwright/test");

test("browser playwright test", async ({ browser, page }) => {
  await page.goto("https//:www.fiber.t-mobile.com");
});

test.only("Page playwright test", async ({ page }) => {
  await page.goto("https//:www.google.com");
  await console.log(await page.title());
});
