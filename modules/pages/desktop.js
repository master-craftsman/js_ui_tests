const Browser = require('../../client/browser.js');
const config = require('../../config/config.js');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class DesktopPage extends Browser {
    constructor() {
        super();
    }

    async addActivity() {
        const addActivity = await this.page.waitForSelector(desktopPageLocators.addActivity);
        if (addActivity !== null) {
            await addActivity.page.click();
        }
    }

    async dataGridsTasks() {
        await sleep(3000)
        const desktopButton = await this.page.waitForXPath(desktopPageLocators.desktopButton,{ visible: true });
        if (desktopButton !== null) {
            await desktopButton.page.click();
        }

        const tasksButton = await this.page.waitForXPath(desktopPageLocators.tasksButton);
        if (tasksButton !== null) {
            await tasksButton.page.click();
        }

        const tasksLabel = await this.page.waitForXPath(desktopPageLocators.tasksLabel);
        if (tasksLabel !== null) {
            const textContent = await tasksLabel.textContent();
            // Дальнейшая обработка текста
        }
    }
}

const desktopPageLocators = {
    desktopButton:'//button[@class="header__controls-button header__controls-button_active"]',
    tasksButton:'//li[@class="desktop__tabs-list-item desktop__tabs-list-item_active"]',
    tasksLabel:'//h2[@class="desktop-content__header-title"]',
    addActivity:'.or-icon'

}



module.exports={
    DesktopPage
}

