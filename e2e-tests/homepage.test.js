const { test, expect } = require('@playwright/test');
import * as dotenv from 'dotenv';

// Pull env vars from ../.env file
dotenv.config({ path: '../.env' });

//NOTE: Fill this in for new sites
const siteTitle = 'Arcadian Cloud';

test('validate site is online and displays the title', async ({ page }) => {
  // Go to the website
  await page.goto(`https://${process.env.DOMAIN_NAME}`);
  
  // Check if the text "Arcadian Cloud" is present on the page
  const content = await page.content();
  expect(content).toContain(siteTitle);
});
