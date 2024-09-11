import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Page start', () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 50,
    //   devtools: true,
    });

    page = await browser.newPage();
  });

  test('should add popover', async () => {
    await page.goto('http://localhost:9000');
    const button = await page.$('button');
    button.click();
    await page.waitForSelector('.popover');
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
