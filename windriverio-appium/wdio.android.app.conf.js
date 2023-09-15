require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const Integration = require('./api-Integration');
var allureReporter = require('@wdio/allure-reporter');
var cucumberJson = require('wdio-cucumberjs-json-reporter');
var path = require('path');
const {remote} = require("webdriverio");
const setenv=process.env.ENV
let data = {id:0}
let allure_config = {
  outputDir: 'allure-results',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false,
  useCucumberStepReporter: true,
  addConsoleLogs: true
};

exports.config = {
  specs: ["./features/*.feature"],
  exclude: [
  ],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      maxInstances: 1,
      'appium:deviceName': 'POCO X3 NFC',
      'appium:platformVersion': '12',
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(process.cwd(), './apps/dev-silk2.apk'),
      'appium:newCommandTimeout': 240,
      'appium:noReset': false
    },
  ],
  logLevel: "debug",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  hostname: process.env.HOST_NAME || "localhost",
  port: 4723,
  path: "/wd/hub/",
  protocol: "http",
  framework: "cucumber",
  reporters: [['allure', allure_config]],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./features/step-definitions/*.step.js"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },


  // Hooks
  // onPrepare: async function (config, capabilities) {
  // },

  before: async function () {
    await Integration.createRun();

  },

  afterScenario: async function (world,result,context) {
    const testcaseID = world.pickle.tags.map((tag) => tag.name);
    const originalString = testcaseID.toString();
    const match = originalString.match(/\d+/);
    const extractedNumber = match ? parseInt(match[0], 10) : null;
    console.log('extractedNumber '+extractedNumber);
    console.log('Status '+world.result.status.toLowerCase());
    console.log('testcaseID '+data.id);

    await Integration.afterMethodCall(world.result.status.toLowerCase(),extractedNumber);

    await browser.deleteSession();
  },

  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */

  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  beforeFeature: async function (uri, feature) {
    allureReporter.addStep("Starting Fetaure : " + feature.name);
    await browser.maximizeWindow();
  },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
   */
  beforeScenario: async function () {

    }


    // if (setenv === 'browserstack') {
    //   const browserCaps = 'browserStackAndroid';
    //   console.log('Set Env is ' + setenv);
    //   return driver.init(caps[browserCaps])
     //   throw new Error(err);
     // });
  //     // const browserCaps = 'browserStackAndroid';
  //     // console.log('Set Env is ' + setenv);
  //     // driver = await remote(caps[browserCaps]);
  //   } else if (setenv === 'local') {
  //     const localCaps = 'appiumLocalCaps';
  //     console.log('Set Env is ' + setenv);
  //     driver = await remote(caps[localCaps]);
  //     await driver.setTimeout({ 'implicit': 10000 });
  //   } else {
  //     throw new Error('Invalid environment');
     //}
  // },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickleadb d
   */
  // beforeStep: function (step, scenario) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {Object}             result   results object containing scenario results
   * @param {boolean}            result.passed   true if scenario has passed
   * @param {string}             result.error    error stack if scenario failed
   * @param {number}             result.duration duration of scenario in milliseconds
   */
  // afterStep: async function (step, scenario, result) {
  //
  //  // cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
   * @param {Object}                 result results object containing scenario results
   * @param {boolean}                result.passed   true if scenario has passed
   * @param {string}                 result.error    error stack if scenario failed
   * @param {number}
   * result.duration duration of scenario in milliseconds
   */


//   if (driver && driver.sessionId) {
//   try {
//      driver.deleteSession();
//   } catch (err) {
//     console.error('Error quitting driver:', err);
//   }
// }

  /**
   *
   * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  //
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */

  //after: async function (world,result, capabilities, specs) {
 //   const testcaseID = world.pickle.tags.map((tag) => tag.name);
 //    const originalString = testcaseID.toString();
 //    const match = originalString.match(/\d+/);
 //    const extractedNumber = match ? parseInt(match[0], 10) : null;


    // console.log('extractedNumber '+extractedNumber);
    // console.log('Status '+world.result.status.toLowerCase());
    // console.log('testcaseID '+data.id);
    // Integration.addCaseToTestRun(data.id,originalString,testcaseID);
    // Integration.updateTestRunStatus();

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  //   Integration.updateTestRunStatus();
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
}
