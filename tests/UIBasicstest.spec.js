const { test } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser, page }) => {
  //chrome - plugins/ cookies
  //   const context = await browser.newContext();
  //   const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
});

test("Page Playwright Test", async ({ page }) => {
  page.goto("https//:rahulshettyacademy.com/loginepagePractice/");
});
