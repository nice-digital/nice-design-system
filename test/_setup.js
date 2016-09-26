/* eslint-env node, mocha */

/**
 * Setup dependencies for Mocha tests
 */

// Setup chai, see https://github.com/domenic/sinon-chai/blob/master/test/common.js
global.chai = require("chai");
global.should = require("chai").should();
global.AssertionError = require("chai").AssertionError;

// Use sinon for spying etc
global.sinon = require("sinon");
var sinonChai = require("sinon-chai");
global.chai.use(sinonChai);

// Setup jsdom for faking dom and jquery
global.document = require("jsdom").jsdom("<html><head></head><body></body></html>");
global.window = document.defaultView;
global.jQuery = global.$ = require("jquery");
