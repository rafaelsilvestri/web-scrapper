const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async (request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br',{waitUntil: 'load'});
    // Type our query into the search bar
    await page.focus('input.gLFyf.gsfi');
    await page.type('input.gLFyf.gsfi','puppeteer');
    page.keyboard.press('Enter'); 
    //await page.waitForSelector('div#resultStats');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshot.png'});
    //await page.pdf({path: 'page.pdf', format: 'A4'});
  
    await browser.close();
    response.send("Finished");
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Express server is up and running at http://localhost:${PORT}`);
});