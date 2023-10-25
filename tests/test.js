const puppeteer = require('puppeteer');
const { MainPage } = require('../modules/pages/main.js');
const { DesktopPage } = require('../modules/pages/desktop.js');
const config = require('../config/config.js');




beforeEach(async () => {
    const mainPage = new MainPage(); // Создание экземпляра класса MainPage
    await mainPage.login(config.mainUrl,config.credits.username, config.credits.password);})

describe('Login', () => {
    test('should display task view', async () => {
        const desktopPage = new DesktopPage();
        await desktopPage.dataGridsTasks();
    });
    test('open add activity view', async () => {
        const desktopPage = new DesktopPage();
        await desktopPage.addActivity();
    });

});
