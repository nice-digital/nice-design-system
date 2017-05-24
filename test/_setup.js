/* eslint-env node, mocha */

/**
 * Setup dependencies for Mocha tests
 */

require("./nunjucks-compiler.js");

var sinon = require("sinon");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinonChai = require("sinon-chai");

var testHelpers = require("./test-helpers");

// Setup chai, see https://github.com/domenic/sinon-chai/blob/master/test/common.js
global.chai = chai;
global.should = chai.should();
global.AssertionError = chai.AssertionError;

// Promise assertion - see http://chaijs.com/plugins/chai-as-promised/
chai.use(chaiAsPromised);

// Use sinon for spying etc
global.sinon = sinon;
global.chai.use(sinonChai);

global.PRODUCTION = false;

// Setup a fake docm
testHelpers.setupDOM();
