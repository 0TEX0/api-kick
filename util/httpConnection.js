const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const userDataFactory  = require('../data/userDataFactory');

async function getRawResponse(url, node, clazz) {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.goto(url);
        const html = await page.content();
        await browser.close();

        const $ = cheerio.load(html);
        const jsonContent = $('body').text();
        const parsedData = JSON.parse(jsonContent);
        const response = new userDataFactory(parsedData);

        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API:', error);
        return null;
    }
}

module.exports = {
    getRawResponse,
};
