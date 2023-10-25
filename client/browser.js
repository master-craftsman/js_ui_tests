const puppeteer = require('puppeteer');

class Browser {
    constructor() {
        this.browser = null;
        this.page = null;
    }

    async launch() {
        this.browser = await puppeteer.launch(
            {
                headless: false,
                defaultViewport: false,
            }
        );
        this.page = await this.browser.newPage();
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async screenshot(path) {
        await this.page.screenshot({ path: path });
    }

    async close() {
        await this.browser.close();
    }
}


module.exports = Browser;





