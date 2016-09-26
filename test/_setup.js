/* eslint-env node, mocha */

/**
 * Setup dependencies for Mocha tests
 */

const jsdom = require("jsdom");

global.document = jsdom.jsdom("<html><head></head><body></body></html>");
global.window = document.defaultView;
global.jQuery = global.$ = require("jquery");
