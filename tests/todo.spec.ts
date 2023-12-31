import { test, expect } from '@playwright/test'
import User from '../models/User';
import TodoApi from '../apis/TodoApi';
import SignUpPage from '../pages/SignUpPage';
import TodoPage from '../pages/TodoPage';
import NewToDoPage from '../pages/NewToDoPage';

test('Todo page', async ({ page, request, context }) => {

    const user = new User();
    const signUpPage=new SignUpPage();
    const newToDoPage=new NewToDoPage();

    await signUpPage.signUpUsingAPI(request,context,user);
    
    await newToDoPage.load(page);
    await newToDoPage.addNewToDo(page, 'Learn Cypress');
    await newToDoPage.verifyNewTodoItem(page, 'Learn Cypress');

});

test('Delete todo', async ({ page, request, context }) => {
    const user = new User();
    const signUpPage=new SignUpPage();
    const todoPage=new TodoPage();
    const newTodoPage=new NewToDoPage();

    await signUpPage.signUpUsingAPI(request,context,user);
    await newTodoPage.addToDoUsingApi(request,user);

    await todoPage.load(page);
    await todoPage.deleteToDoItem(page);
    await todoPage.verifyNoTosMessage(page);

});