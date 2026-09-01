const { test, expect } = require("@playwright/test");

test("Activity 1 - Register and login to dashboard", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  console.log(await page.title());
  const registerBtn = page.locator(".btn1");
  const btnregister = page.locator("#login");
  const errorhandling = page.locator(".invalid-feedback");

  const fnamefield = page.locator("#firstName");
  const lnamefield = page.locator("#lastName");
  const emailfield = page.locator("#userEmail");
  const phonefield = page.locator("#userMobile");
  const occupationOption = page.locator("select[formcontrolname='occupation']");
  const userpwdfield = page.locator("#userPassword");
  const userpwdconfrmfield = page.locator("#confirmPassword");
  const chkbox = page.locator('input[type="checkbox"]');

  //error handling all field
  await registerBtn.click();
  await btnregister.click();
  console.log(await errorhandling.allTextContents());

  //fill the all fields
  console.log(await page.locator(".login-title").textContent());
  await fnamefield.fill("myFname");
  await lnamefield.fill("myLname");
  await emailfield.fill("test123@gmail.com");
  await phonefield.fill("5555555555");
  await page.locator(".custom-select").click();
  await occupationOption.selectOption({ label: "Doctor" });
  await userpwdfield.fill("test@123");
  await userpwdconfrmfield.fill("test@123");
  await chkbox.check();
  await expect(chkbox).toBeChecked();
  await await btnregister.click();
});
