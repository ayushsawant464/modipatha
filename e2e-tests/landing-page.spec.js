import { test, expect } from '@playwright/test';

test.describe('landing page tests', { tag: '@unstable' }, () => {

    test('check visibility of landing page', async ({
      page,
    }) => {
      await page.goto('http://localhost:3000/');
      await expect(page.getByTestId('navbar')).toBeVisible();
      await expect(page.getByTestId('hero-section')).toBeVisible();
      await expect(page.getByTestId('features-section')).toBeVisible();
      await expect(page.getByTestId('faq-section')).toBeVisible();
      await expect(page.getByTestId('newsletter-section')).toBeVisible();
      await expect(page.getByTestId('footer-section')).toBeVisible();
});

    test('check functionality of navbar section', async ({
      page,
    }) => {
      await page.goto('http://localhost:3000/');
      await expect(page.getByTestId('navbar')).toBeVisible();

      await page.getByTestId('type-button').click();
    
      expect(page.url()).toContain('http://localhost:3000/typeModi');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('write-button').click();
    
      expect(page.url()).toContain('http://localhost:3000/canvas');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('translate-button').click();
    
      expect(page.url()).toContain('http://localhost:3000/translate');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('blog-button').click();
    
      expect(page.url()).toContain('http://localhost:3000/blog');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

    });

    test('check functionality of features section', async ({
      page,
    }) => {

      await page.goto('http://localhost:3000/');
      await expect(page.getByTestId('features-section')).toBeVisible();
        await page.getByTestId('button-0').click();
    
      expect(page.url()).toContain('http://localhost:3000/typeModi');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('button-1').click();
    
      expect(page.url()).toContain('http://localhost:3000/canvas');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('button-2').click();
    
      expect(page.url()).toContain('http://localhost:3000/translate');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

        await page.getByTestId('button-3').click();
    
      expect(page.url()).toContain('http://localhost:3000/blog');
    
      await page.goBack();
    
      expect(page.url()).toBe('http://localhost:3000/');

    });

    test('check functionality of newsletter subscribe feature', async ({
      page,
    }) => {

      await page.goto('http://localhost:3000/');
      await expect(page.getByTestId('newsletter-section')).toBeVisible();
      await page.getByLabel('Email-Address').fill('xyz@gmail.com');
      await page.getByTestId('submit-email-button').click();
      await expect(page.getByTestId('subscription-modal')).toBeVisible();

    });

    
});