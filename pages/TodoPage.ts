import { Page, expect } from "@playwright/test";
export default class TodoPage {


    private get welcomeMessageText() {
        return 'welcome';
    }

    private get deleteIcon() {
        return 'delete';
    }

    private get noTodosText() {
        return 'no-todos';
    }

    async load(page: Page) {
        await page.goto('/todo');
    }

    async verifyWelcomeMessage(page: Page) {
        const welcomeMessage = page.getByTestId(this.welcomeMessageText);
        await expect(welcomeMessage).toBeVisible;
    }

    async deleteToDoItem(page: Page) {
        await page.getByTestId(this.deleteIcon).click();
    }

    async verifyNoTosMessage(page: Page) {
        const noToDosMessage = await page.getByTestId(this.noTodosText).innerText();
        await expect(noToDosMessage).toEqual('No Available Todos');
    }
}