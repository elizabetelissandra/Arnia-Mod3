// App.test.tsx
import { test, expect } from '@playwright/test';
import  App  from '../App.tsx';

test('mostrar página do jogo da velha', async ({ page }) => {
  await page.goto(App);
  await expect(page).toHaveTitle('Jogo da Velha');
});