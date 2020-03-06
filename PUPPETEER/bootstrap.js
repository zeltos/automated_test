const puppeteer = require('puppeteer');
const { expect }  = require('chai');
const _ = require('lodash');

const globalVariables = _.pick(global, ['browser', 'expect']);

/* configurable options or object for puppeteer */
const opts = {
    headless: false,
    slowMo: 100,
    timeout: 0,
    args: ['--start-maximized', '--window-size=1440,900'] 
}

/* call the before for puppeteer for execute this code before start testing */
before (async () => {
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
  });

  /* call the function after puppeteer done testing */
after ( () => {
    browser.close();
    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
  });
