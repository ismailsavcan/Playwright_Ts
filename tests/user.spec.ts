import { test } from '@playwright/test';
import User from '../models/User'
import SignUpPage from '../pages/SignUpPage';
import TodoPage from '../pages/TodoPage';

test('register to app', async ({ page }) => {

    const user = new User();
    const signUpPage = new SignUpPage();
    const todoPage=new TodoPage();

    await signUpPage.load(page);
    await signUpPage.signUp(page, user);
    await todoPage.verifyWelcomeMessage(page);
});
