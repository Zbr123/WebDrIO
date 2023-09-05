require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const { remote } = require('webdriverio');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const Integration = require('windriverio-appium/api-Integration');
const caps = require('windriverio-appium/wdio.conf');

const setenv = process.env.ENV;
let driver;

BeforeAll(async () => {
    Integration.createRun();
});

Before(async function() {
    if (setenv === 'browserstack') {
        const browserCaps = 'browserStackAndroid';
        console.log('Set Env is ' + setenv);
        driver = await remote(caps[browserCaps]);
    } else if (setenv === 'local') {
        const localCaps = 'appiumLocalCaps';
        console.log('Set Env is ' + setenv);
        driver = await remote(caps[localCaps]);
        await driver.setTimeout({ 'implicit': 10000 });
    } else {
        throw new Error('Invalid environment');
    }

    // If you need to use the driver in step definitions:
    this.driver = driver;
});

After(async function(scenario) {
    const testcaseID = scenario.pickle.tags.map((tag) => tag.name);
    const originalString = testcaseID.toString();
    const match = originalString.match(/\d+/);
    const extractedNumber = match ? parseInt(match[0], 10) : null;

    await Integration.afterMethodCall(scenario.result.status.toLowerCase(), extractedNumber);

    if (driver && driver.sessionId) {
        try {
            await driver.deleteSession();
        } catch (err) {
            console.error('Error quitting driver:', err);
        }
    }
});

AfterAll(async () => {
    Integration.updateTestRunStatus();
});
