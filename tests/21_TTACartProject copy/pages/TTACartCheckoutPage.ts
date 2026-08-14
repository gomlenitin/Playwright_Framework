import { type Locator, type Page } from '@playwright/test';

export class TtacartcheckoutpageTs {
    readonly page: Page;
    readonly texboxFirstName : Locator;
    readonly textboxLastName : Locator;
    readonly textboxZipPostalCode : Locator ;
    readonly buttonContinue : Locator;


    constructor(page: Page) {
        this.page = page;
        this.texboxFirstName = page.locator("#first-name");
        this.textboxLastName = page.getByRole("textbox", { name: "Last Name" });
        this.textboxZipPostalCode = page.locator("#postal-code");
        this.buttonContinue = page.getByText("Continue");
    }

    async fillCheckoutPage() {
        await this.texboxFirstName.fill("Nitin")
        await this.textboxLastName.fill("Gomle");
        await this.textboxZipPostalCode.fill("410209");
        await this.buttonContinue.click();
    }

}