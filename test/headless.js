'use strict';

const puppeteer = require('puppeteer');

process.on('unhandledRejection', () => {
	console.error("timeout");
	process.exit(1);
});


const url = "https://sairoutine.github.io/Koishibow/public/";
//const url = "http://localhost:3000/";
(async() => {
	const browser = await puppeteer.launch({args: ['--no-sandbox']});
	const page = await browser.newPage();
	page.on('console', msg => console.log('PAGE LOG:', msg.text()));

	await page.goto(url);
	const watchDog = page.waitForFunction( () => {
		return window.game && window.game.isAllLoaded();
	}, {timeout: 100000});

	await watchDog;
	await browser.close();
})();
