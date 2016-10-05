/* eslint-env node, mocha */

/**
 * Setup dependencies for Mocha tests
 */

// Setup chai, see https://github.com/domenic/sinon-chai/blob/master/test/common.js
global.chai = require("chai");
global.should = require("chai").should();
global.AssertionError = require("chai").AssertionError;

// Promises - see http://chaijs.com/plugins/chai-as-promised/
chai.use(require("chai-as-promised"));

// Use sinon for spying etc
global.sinon = require("sinon");
global.chai.use(require("sinon-chai"));

// Setup jsdom for faking dom and jquery
global.document = require("jsdom").jsdom("<html><head></head><body></body></html>");
global.window = document.defaultView;
global.jQuery = global.$ = require("jquery");

global.PRODUCTION = false;
