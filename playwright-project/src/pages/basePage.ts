export class BasePage {
    protected page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }

    async clickElement(selector: string) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async fillInput(selector: string, value: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, value);
    }

    async getText(selector: string): Promise<string> {
        await this.waitForElement(selector);
        return await this.page.textContent(selector);
    }
}