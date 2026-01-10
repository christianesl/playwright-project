import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    No, `emailInput` is not a locator itself. It's a **string property that contains a CSS selector**, which is used as a locator. 

    The actual locator is created when you pass this string to methods like `this.fillInput()`, which then uses it to find and interact with the element on the page. The `BasePage` class likely wraps these selectors and converts them into Playwright locators internally.
    private passwordInput = 'input[name="password"]';
    private loginButton = 'button[type="submit"]';
    private errorMessage = '.error-message';

    async login(email: string, password: string) {
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(this.errorMessage);
    }

    async isErrorDisplayed(): Promise<boolean> {
        try {
            await this.waitForElement(this.errorMessage);
            return true;
        } catch {
            return false;
        }
    }
}