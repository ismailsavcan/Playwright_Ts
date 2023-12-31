import { APIRequestContext, Page, expect } from "@playwright/test";
import User from "../models/User";
import TodoApi from "../apis/TodoApi";

export default class NewToDoPage {

    private get newTodoInput(){
        return 'new-todo';
    }

    private get submitNewTaskButton(){
        return 'submit-newTask';
    }

    private get todoText(){
        return 'todo-text';
    }



    async load(page: Page) {
        await page.goto('/todo/new');
    }

    async addNewToDo(page: Page, task : string) {
        await page.getByTestId(this.newTodoInput).fill(task);
        await page.getByTestId(this.submitNewTaskButton).click();
    }

    async verifyNewTodoItem(page:Page, task:string){
        const todoItem = await page.getByTestId(this.todoText).innerText();
        expect(await todoItem).toEqual(task);
    }

    async addToDoUsingApi(request : APIRequestContext, user : User){
        await new TodoApi().addToDo(request, user);
    }

}