// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: "./tests",
  timeout: 30 * 1000, //global timeout
  expect: {
    timeout: 5000, //assertion timout
  },
  reporter:'html',
  use: {
    browserName: "chromium",
    headless : false,
  },
});

module.exports = config
