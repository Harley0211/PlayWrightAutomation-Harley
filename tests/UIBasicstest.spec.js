const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  //chrome - plugins/ cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

await page.locator('#username').fill("rahulshetty");
await page.locator('#password').fill("learning");
await page.locator('#signInBtn').click();

  

});





