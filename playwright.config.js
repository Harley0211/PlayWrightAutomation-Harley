// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: "./tests",
  timeout: 40 * 1000, //global timeout
  expect: {
    timeout: 40 * 1000, //assertion timout
  },
  reporter:'html',
  use: {
    browserName: "chromium",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
});

module.exports = config
