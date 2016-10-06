/* eslint-env node, mocha */

/**
 * Setup dependencies for Mocha tests
 */

import sinon from "sinon";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import sinonChai from "sinon-chai";
import jsdom from "jsdom";

// Setup chai, see https://github.com/domenic/sinon-chai/blob/master/test/common.js
global.chai = chai;
global.should = chai.should();
global.AssertionError = chai.AssertionError;

// Promise assertion - see http://chaijs.com/plugins/chai-as-promised/
chai.use(chaiAsPromised);

// Use sinon for spying etc
global.sinon = sinon;
global.chai.use(sinonChai);

// Setup jsdom for faking dom and jquery
global.document = jsdom.jsdom("<html><head></head><body></body></html>");
global.window = document.defaultView;

// Loading jQuery doesn't work with ES6 import
global.jQuery = global.$ = require("jquery");

global.PRODUCTION = false;
