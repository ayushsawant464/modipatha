import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('ModipathaTypeWriteTransliterateAbout Modi').click();
  await page.getByText('Our FeaturesVirtual').click();
  await page.locator('div').filter({ hasText: 'Frequently Asked' }).nth(3).click();
  await page.getByText('Stay UpdatedSubscribe to our').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('button', { name: 'Type' }).click();
  await expect(page.getByText('Modi Typing PageTyped Text')).toBeVisible();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Write' }).click();
  await page.locator('div').filter({ hasText: /^Modi Writing Pad$/ }).click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Transliterate' }).click();
  await page.getByRole('button', { name: 'About Modi' }).click();
  await page.getByRole('button', { name: 'Explore' }).first().click();
  await page.getByRole('button', { name: 'Explore' }).nth(1).click();
  await page.getByRole('button', { name: 'Explore' }).nth(2).click();
  await page.getByRole('button', { name: 'Explore' }).nth(3).click();
  await page.getByLabel('Email Address *').click();
  await page.getByLabel('Email Address *').fill('xyz@gmail.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
});