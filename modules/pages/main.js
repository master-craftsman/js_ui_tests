const Browser = require('../../client/browser.js');
const config = require('../../config/config.js');


class MainPage extends Browser {
    constructor() {
        super();
    }

    async login(url = config.mainUrl, username, password) {
        await this.launch();
        await this.goto(url);

        const loginField = await this.page.waitForXPath(mainPageLocators.loginField);
        if (loginField !== null) {
            await loginField.type(username);
        }

        const passwordField = await this.page.waitForXPath(mainPageLocators.passwordField);
        if (passwordField !== null) {
            await passwordField.type(password);
        }

        await this.page.click('.form-group__submit');

        const labelFlora = await this.page.waitForXPath(mainPageLocators.labelFlora);
        if (labelFlora !== null) {
            expect(labelFlora).not.toBeUndefined();
        }
    }
}


const mainPageLocators = {
    loginField:"//input[@class='form-group__input' and @placeholder='Логин']",
    passwordField:"//input[@class='form-group__input' and @placeholder='Пароль']",
    labelFlora:'//button[@class="header__add-button"]',
}



module.exports={
    MainPage
}


