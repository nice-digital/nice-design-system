/*!
NICE Experience 0.2.7 | 2017-04-27
© Copyright NICE 2015-2017
Licensed under MIT (https://github.com/nhsevidence/nice-experience/blob/master/LICENSE)
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("experience", [], factory);
	else if(typeof exports === 'object')
		exports["experience"] = factory();
	else
		root["experience"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.eventr = exports.pluginizr = exports.pluginAutoLoader = exports.Tracker = exports.Tabs = exports.default = undefined;
	
	var _pluginAutoloader = __webpack_require__(2);
	
	var _pluginAutoloader2 = _interopRequireDefault(_pluginAutoloader);
	
	var _tabs = __webpack_require__(4);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tracker = __webpack_require__(7);
	
	var _tracker2 = _interopRequireDefault(_tracker);
	
	var _pluginizr = __webpack_require__(3);
	
	var _pluginizr2 = _interopRequireDefault(_pluginizr);
	
	var _eventr = __webpack_require__(6);
	
	var _eventr2 = _interopRequireDefault(_eventr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var experience = {
		init: function init(el) {
	
			// Load all component modules from this directory automatically, see http://stackoverflow.com/a/31770875/486434
			// But exclude test files http://stackoverflow.com/a/30372240
			_pluginAutoloader2.default.load(__webpack_require__(8));
			_pluginAutoloader2.default.load(__webpack_require__(9));
	
			_pluginAutoloader2.default.findPlugins(el);
		},
		// Components
		Tabs: _tabs2.default,
		Tracker: _tracker2.default,
		// Utils
		pluginAutoLoader: _pluginAutoloader2.default,
		pluginizr: _pluginizr2.default,
		eventr: _eventr2.default
	};
	
	$.fn.experience = function () {
		experience.init(this);
	};
	
	// Export to global namespace for precompiled usage
	window.NICE = window.NICE || {};
	window.NICE.experience = experience;
	
	exports.default = experience;
	exports.Tabs = _tabs2.default;
	exports.Tracker = _tracker2.default;
	exports.pluginAutoLoader = _pluginAutoloader2.default;
	exports.pluginizr = _pluginizr2.default;
	exports.eventr = _eventr2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.load = load;
	exports.findPlugins = findPlugins;
	
	var _pluginizr = __webpack_require__(3);
	
	// Regex to find the name of a module from its path.
	// E.g, "./experience.js" find "experience" from the matched group
	// E.g, "/tabs/tabs.js" find "tabs" from the matched group
	var ModuleNameRegex = /([^\/.]*)\.js$/i;
	
	// Constructs a module object - parses a key (path) into a module name
	var getModuleObj = function getModuleObj(key) {
		return { key: key, name: key.match(ModuleNameRegex, "")[1] };
	};
	
	// Require and return a module
	var requireModule = function requireModule(module, localRequire) {
		localRequire(module.key);
		return module;
	};
	
	/// Load all plugins from the given require context.
	/// @example
	/// 	import { pluginAutoLoader } from "nice-experience";
	/// 	pluginAutoLoader.load(require.context("./", true, /\.js$/));
	function load(localRequire) {
		// Build a list from which to auto-load
		localRequire.keys().filter(function (k) {
			return k !== "./experience.js";
		}) // Ignore experience as it's our entry point so treated differently
		.map(getModuleObj).map(function (module) {
			return requireModule(module, localRequire);
		}).filter(function (m) {
			return m.name in $.fn;
		}); // Now the module is loaded, only care about ones that are a plugin
	}
	
	function findPlugins($context) {
		(0, _pluginizr.getPlugins)().forEach(function (plugin) {
			// Load any plugins automatically
			$("[data-" + plugin.name + "]", $context || $(document)).each(function (i, el) {
	
				var $el = $(el),
				    options;
	
				// Convert plugin data-attributes into options object
				// e.g. data-plugin-test="true" data-plugin-something-else="1" becomes:
				// { test: true, somethingElse: 1 }
				[].forEach.call(el.attributes, function (attr) {
	
					var match = attr.name.match(new RegExp("^data-(" + plugin.name + "-.+)"));
					if (match && match.length === 2) {
						var attrName = $.camelCase(match[1]),
						    propName = $.camelCase(match[1].replace(plugin.name + "-", ""));
						options = options || {};
						options[propName] = $el.data(attrName); // Use jquery's data because it parses types
					}
				});
	
				$(el)[plugin.name](options);
			});
		});
	}
	
	/// Auto plugin loader.
	/// Useful for JIT loading of plugins
	exports.default = {
		load: load,
		findPlugins: findPlugins
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.getPlugins = getPlugins;
	// List of registered plugins, as { name, pluginClass }
	var plugins = [];
	
	/**
	 * Gets a list of registered plugins.
	 *
	 * @return {Array} The list of registered plugins. The array item consists of a name (string) property pluginClass property.
	 */
	function getPlugins() {
		return plugins;
	}
	
	/**
	 * Turns a given class into a jQuery plugin.
	 * Proxies methods on the class via jQuery plugin style invocation (see example).
	 * @param  {string} pluginName	The name of the plugin
	 * @param  {Class} plugin 		The class of the plugin itself
	 * @link http://www.acuriousanimal.com/2013/01/15/things-i-learned-creating-a-jquery-plugin-part-i.html
	 * @example
	 * 	import { pluginizr } from "nice-experience";
	 * 	public class Test {
	 * 		constructor(element, options) {
	 * 		}
	 * 		aMethod(arg1) {
	 *
	 * 		}
	 * 		getValue() {
	 * 			return true;
	 * 		}
	 * 	}
	 * 	pluginizr("test", Test);
	 *
	 * 	// Class Test is now available as a plugin:
	 * 	$(".selector").test();
	 * 	$(".selector").test("aMethod", 99);
	 * 	var value = $(".selector").test("getValue");
	 */
	
	exports.default = function (pluginName, Plugin) {
	
		plugins.push({ name: pluginName, pluginClass: Plugin }); // Store this registered plugin
	
		var dataName = "__" + pluginName,
		    old = $.fn[pluginName];
	
		$.fn[pluginName] = function (options) {
			var _this = this;
	
			var args = arguments;
	
			// TODO: Destory plugin by removing the data
	
			if (options === undefined || (typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
				return this.each(function (i, el) {
					// Create an instance of the plugin and cache it
					if (!$.data(el, dataName)) {
						$.data(el, dataName, new Plugin(el, options));
					}
				});
			} else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
				var instance;
	
				var _ret = function () {
					// _* methods as these are private by convention
	
					// Assume $(".selector").plugin("methodName", anArg, anotherArg)
					// Call a public plugin method (not starting with an underscore) for each selected element.
					var methodName = options,
					    methodArgs = Array.prototype.slice.call(args, 1);
	
					// Ideally we would use Object.getOwnPropertyNames(Plugin.prototype); to get
					// true 'getters' but to support IE8 we can't do this. So we relay on a naming
					// convention of getters start "get" e.g. getCurrentIndex();
	
					// No arguments and starting with 'get' means a getter which breaks chainability
					if (methodArgs.length == 0 && /^get.+$/.test(methodName)) {
						if (_this.length > 1) {
							$.error("Cannot call a getter '" + methodName + "' on a collection of elements");
							return {
								v: void 0
							};
						}
						instance = $.data(_this[0], dataName);
	
						return {
							v: instance[methodName].apply(instance)
						};
					} else {
						// Invoke the speficied method on each selected element
						return {
							v: _this.each(function () {
								var instance = $.data(this, dataName);
								if (instance instanceof Plugin && typeof instance[methodName] === "function") {
									instance[methodName].apply(instance, methodArgs);
								} else {
									$.error("Method '" + methodName + "' could not be found");
								}
							})
						};
					}
				}();
	
				if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
			}
		};
	
		// Expose the plugins"s defaults so plugin users can see them
		if (Plugin.defaults && typeof Plugin.defaults === "function") $.fn[pluginName].defaults = Plugin.defaults();
	
		// No conflict
		$.fn[pluginName].noConflict = function () {
			return $.fn[pluginName] = old;
		};
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*eslint-env browser */
	
	/**
	 * @module A test module
	 * Tabs
	 */
	
	var _keycode = __webpack_require__(5);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _pluginizr = __webpack_require__(3);
	
	var _pluginizr2 = _interopRequireDefault(_pluginizr);
	
	var _eventr = __webpack_require__(6);
	
	var _eventr2 = _interopRequireDefault(_eventr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Defaults = {
		tabClass: "tabs__tab",
		tabActiveClass: "tabs__tab--active",
		tabButtonClass: "tabs__tab-btn",
		tabPaneClass: "tabs__pane",
		tabPaneActiveClass: "tabs__pane--active"
	};
	
	// Generate unique id amongst tabs
	// See http://stackoverflow.com/a/20302361
	var uid = function (i) {
		return function () {
			return "tabs-" + ++i;
		};
	}(0);
	
	/**
	 * @class Tabs
	 * Follows W3 design for tab panels with aria attributes.
	 * @link https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
	 */
	
	var Tabs = function () {
		_createClass(Tabs, null, [{
			key: "defaults",
			value: function defaults() {
				return Defaults;
			}
		}]);
	
		function Tabs(element, options) {
			var _this = this;
	
			_classCallCheck(this, Tabs);
	
			if (!element) throw new Error("Element must be non-null");
	
			this.el = element;
			this.$el = $(element);
	
			this.options = $.extend({}, Tabs.defaults(), options);
	
			// Generate random ids for tabs and panes, for use with aria attributes
			this._getTabs().each(function (i, el) {
				var tabId = uid(),
				    paneId = uid();
	
				$(el).find("." + _this.options.tabButtonClass).prop("id", tabId).attr("aria-controls", paneId);
	
				_this._getTabPanes().eq(i).prop("id", paneId).attr("aria-labelledby", tabId);
			});
	
			this.delegate();
	
			this.activate(0, false);
		}
	
		_createClass(Tabs, [{
			key: "events",
			value: function events() {
				var _ref;
	
				return _ref = {}, _defineProperty(_ref, "click ." + this.options.tabButtonClass, "_handleTabBtnClick"), _defineProperty(_ref, "keydown ." + this.options.tabButtonClass, "_handleTabBtnKeydown"), _defineProperty(_ref, "keydown ." + this.options.tabPaneClass, "_handlePaneKeydown"), _ref;
			}
	
			/// Gets the 0-based index of the currently selected tab
	
		}, {
			key: "getCurrentIndex",
			value: function getCurrentIndex() {
				return this._getTabs().filter("." + this.options.tabActiveClass).index();
			}
	
			/// Activates a tab with the given index
			/// @param {integer} index The index of the tab to activate
			/// @param {boolean} focus Whether to give focus to the active tab btn
	
		}, {
			key: "activate",
			value: function activate(index) {
				var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
				var $selectedTabBtn = this._getTabs().removeClass(this.options.tabActiveClass).find("." + this.options.tabButtonClass).attr("aria-expanded", false).attr("aria-selected", false).end().eq(index).addClass(this.options.tabActiveClass).find("." + this.options.tabButtonClass).attr("aria-expanded", true).attr("aria-selected", true);
	
				if (focus === true) {
					$selectedTabBtn.focus();
				}
	
				this._getTabPanes().removeClass(this.options.tabPaneActiveClass).attr("aria-hidden", true).eq(index).addClass(this.options.tabPaneActiveClass).attr("aria-hidden", false);
	
				return this.getCurrentIndex();
			}
	
			/**
	   * Activates the next tab, or the first we're at the end
	   * @return {Integer} The current index
	   */
	
		}, {
			key: "next",
			value: function next() {
				var currentIndex = this.getCurrentIndex();
				if (currentIndex === this._getTabs().length - 1) {
					return this.first();
				} else {
					return this.activate(currentIndex + 1);
				}
			}
	
			/**
	   * Activates the previous tab, or the last tab if we're at the start
	   * @return {Integer} The current index
	   */
	
		}, {
			key: "previous",
			value: function previous() {
				var currentIndex = this.getCurrentIndex();
				if (currentIndex === 0) {
					return this.last();
				} else {
					return this.activate(currentIndex - 1);
				}
			}
	
			/**
	   * Activates the first tab
	   * @return {Integer} The current index
	   */
	
		}, {
			key: "first",
			value: function first() {
				return this.activate(0);
			}
	
			/**
	   * Activates the last tab
	   * @return {Integer} The current index
	   */
	
		}, {
			key: "last",
			value: function last() {
				return this.activate(this._getTabs().length - 1);
			}
	
			// PRIVATE
	
			// Gets the tab elements
	
		}, {
			key: "_getTabs",
			value: function _getTabs() {
				return $("." + this.options.tabClass, this.$el);
			}
	
			// Gets the tab pane elements
	
		}, {
			key: "_getTabPanes",
			value: function _getTabPanes() {
				return $("." + this.options.tabPaneClass, this.$el);
			}
	
			// Handle clicking on a tab
	
		}, {
			key: "_handleTabBtnClick",
			value: function _handleTabBtnClick(e) {
				e.preventDefault();
	
				var index = $(e.currentTarget).closest("." + this.options.tabClass).index();
				this.activate(index);
			}
	
			// Enable keyboard control of the tabs
	
		}, {
			key: "_handleTabBtnKeydown",
			value: function _handleTabBtnKeydown(e) {
				switch ((0, _keycode2.default)(e.which)) {
					// Go backwards one tab
					case "left":
					case "up":
						e.preventDefault();
						e.stopPropagation();
						this.previous();
						break;
	
					// Go forward one tab
					case "right":
					case "down":
						e.preventDefault();
						e.stopPropagation();
						this.next();
						break;
	
					// Go to the first tab
					case "home":
						e.preventDefault();
						e.stopPropagation();
						this.first();
						break;
	
					// Go to the last tab
					case "end":
						e.preventDefault();
						e.stopPropagation();
						this.last();
						break;
	
					// Go to the focussed tab
					case "enter":
					case "space":
						e.preventDefault();
						e.stopPropagation();
						this.activate($(e.currentTarget).closest("." + this.options.tabClass).index());
						break;
					default:
						break;
				}
			}
	
			// Focus the current tab btn on a ctrl+up or ctrl+left when in a tab pane
	
		}, {
			key: "_handlePaneKeydown",
			value: function _handlePaneKeydown(e) {
				if ($.inArray((0, _keycode2.default)(e.which), ["up", "left"]) > -1 && e.ctrlKey) {
					e.preventDefault();
					e.stopPropagation();
	
					var tabId = $(e.currentTarget).attr("aria-labelledby");
					$("#" + tabId).focus();
				}
			}
		}]);
	
		return Tabs;
	}();
	
	exports.default = Tabs;
	
	
	(0, _eventr2.default)(Tabs);
	(0, _pluginizr2.default)("tabs", Tabs);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.delegate = delegate;
	exports.undelegate = undelegate;
	/**
	 * @module Eventr
	 * Delegate and undelegate events
	 * @example
	 * 		import { delegate } from "./eventr";
	 *  	delegate(obj);
	 *
	 *  	import eventr from "./eventr";
	 *  	eventr.delegate(obj);
	 *  	eventr.undelegate(obj);
	 *  	class Test {
	 *  		constructor() {
	 *  			this.delegate();
	 *  		}
	 *  	}
	 *  	eventr(Test);
	 */
	
	// Regex to split event delegates, see http://backbonejs.org/docs/backbone.html#section-153
	// for more info
	var DelegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	// jQuery Event Namespace. See http://api.jquery.com/on/ for more info
	var EventNamespace = "delegateEvents";
	
	/**
	 * Delegates events on an object instance. Allows a consistent, declarative approach to binding events.
	 * Expects the instance parameter to have 2 properties:
	 * 	- $el - The jQuery element(s) to use as a context
	 * 	- events() - Function that returns an events hash
	 * Bound events are namespaced with the 'EventNamespace' string.
	 * The events hash is like Backbone's events hash and consists of {“event selector”: “callback”}.
	 * The callback can either be a named method to call on the instance or a function itself.
	 * The callback function is called with 'instance' as the context for 'this'.
	 *
	 * @example
	 * 	import { delegate } from "./eventr";
	 * 	class Test {
	 * 		constructor(el) {
	 * 			this.$el = $(el);
	 * 			delegate(this);
	 * 		}
	 * 		events() {
	 * 			return {
	 * 				"click .something": "_clickHandler",
	 * 				[`keydown .${ something }`]: () => { }
	 * 			}
	 * 		}
	 * 		_clickHandler(e) { }
	 * 	}
	 *
	 * @param  {Object} instance An instance of an object
	 * @return {Object}          The instance
	 * @throws {Error} If instance isn't truthy
	 * @throws {Error} If instace.$el doesn't exist
	 * @throws {Error} If instanceevents isn't a function
	 */
	function delegate(instance) {
	  if (!instance) {
	    $.error("Instance must be non-null");
	  }
	  if (!instance.$el) {
	    $.error("Instance.$el must be non-null");
	  }
	  if (!instance.events || typeof instance.events !== "function") {
	    $.error("Instance.events must be a function");
	  }
	
	  var events = instance.events();
	
	  if (!events) return instance;
	
	  for (var key in events) {
	    var method = events[key];
	
	    if (typeof method !== "function") method = instance[method];
	
	    if (!method) {
	      $.error("Method could not be found");
	    }
	
	    var match = key.match(DelegateEventSplitter),
	        eventName = match[1],
	        selector = match[2];
	
	    instance.$el.on(eventName + "." + EventNamespace, selector, $.proxy(method, instance));
	  }
	
	  return instance;
	}
	
	/**
	 * Undelegate events on an object instance
	 * @param  {Object} instance An instance of an object
	 * @return {Object}          The instance
	 */
	function undelegate(instance) {
	  if (!instance) {
	    $.error("Instance must be non-null");
	  }
	  if (!instance.$el) {
	    $.error("Instance.$el must be non-null");
	  }
	  instance.$el.off("." + EventNamespace);
	  return instance;
	}
	
	/**
	 * Mixes in event delegate and undelegate functionality into a class's
	 * protoype so it can be called as "this.delegate()". A convenient abstraction
	 * over the individual 'delegate' and 'undelegate' functions.
	 * @param  {Class} pluginClass The class on which to add the prototype methods
	 * @example
	 * 	import eventr from "./eventr";
	 * 	class Test {
	 * 		constructor(el) {
	 * 			this.$el = $(el);
	 * 			this.delegate();
	 * 		}
	 * 		events() {
	 * 			return {
	 * 				"click .something": "_clickHandler",
	 * 				[`keydown .${ something }`]: () => { }
	 * 			}
	 * 		}
	 * 		_clickHandler(e) { }
	 * 	}
	 * 	eventr(Test;)
	 */
	function mixin(pluginClass) {
	  pluginClass.prototype.delegate = function () {
	    return mixin.delegate.call(this, this);
	  };
	  pluginClass.prototype.undelegate = function () {
	    return mixin.undelegate.call(this, this);
	  };
	}
	mixin.delegate = delegate;
	mixin.undelegate = undelegate;
	
	exports.default = mixin;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Tracker
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * For tracking and analytics
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	exports.trackingLibrary = trackingLibrary;
	exports.sendEvent = sendEvent;
	exports.sendDataLayerEvent = sendDataLayerEvent;
	exports.sendUniversalEvent = sendUniversalEvent;
	exports.sendClassicEvent = sendClassicEvent;
	
	var _pluginizr = __webpack_require__(3);
	
	var _pluginizr2 = _interopRequireDefault(_pluginizr);
	
	var _eventr = __webpack_require__(6);
	
	var _eventr2 = _interopRequireDefault(_eventr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Defaults = {
		trackSelectors: ["a[data-track]", "button[data-track]", "[type='submit'][data-track]", "[type='reset'][data-track]", "[type='image'][data-track]", "[data-track] a", "[data-track] button", ".tophat a"]
	};
	
	var TagManager = "TagManager",
	    Classic = "Classic",
	    Universal = "Universal";
	
	// Gets the name of tracking library available
	function trackingLibrary() {
		if (window.dataLayer && typeof window.dataLayer.push === "function") return TagManager;
	
		if (window._gaq && typeof window._gaq.push === "function") return Classic;
	
		if (typeof window.ga === "function") return Universal;
	
		return "";
	}
	
	/**
	 * A function that gets called as soon as a hit to Google has been successfully sent.
	 *
	 * @callback hitCallback
	 * @param {string} message An optional error message if it fails
	 */
	
	/**
	 * Tracks an event to the current loaded analytics services (either GTM/GA/UA)
	 * @param  {string} category        The name you supply for the group of objects you want to track.
	 * @param  {string} action        	A string that is uniquely paired with each category, and commonly used to define the type of user interaction for the web object.
	 * @param  {string} label        	An optional string to provide additional dimensions to the event data.
	 * @param  {integer} value       	An optional integer that you can use to provide numerical data about the user event.
	 * @param  {hitCallback} callback 	A function to callback
	 * @param  {boolean} nonInteraction Specified an event as a non-interaction event. Note: non-interaction can"t be set via the datalayer in GTM
	 * @return {Promise}				A promise that resolves when the track has successfully finished
	 * @example
	 * 	import Tracker from "tracker";
	 * 	Tracker.trackEvent("ct", "actn", "lbl").then(() => {
	 * 		// tracked
	 * 	}).catch(err => {
	 * 		// Error tracking
	 * 	};
	 */
	function sendEvent(category, action) {
		var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
		var value = arguments[3];
		var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
		var nonInteraction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
	
	
		if (trackingLibrary() == TagManager) return sendDataLayerEvent(category, action, label, value, callback);else if (trackingLibrary() == Universal) return sendUniversalEvent(category, action, label, value, callback, nonInteraction);else if (trackingLibrary() == Classic) return sendClassicEvent(category, action, label, value, callback, nonInteraction);
	
		var msg = "No tracking library available",
		    err = new Error(msg);
		if (typeof callback === "function") callback(err);
		return Promise.reject(err);
	}
	
	/**
	 * Sends an event to the GTM data layer
	 * @param  {String} category 	Category
	 * @param  {String} action 		Action
	 * @param  {String} label 		Label
	 * @param  {Int} values			Value
	 * @param  {Function} callback 	Callback
	 * @return {Promise}			A promise resolved when the track has fired
	 */
	function sendDataLayerEvent(category, action) {
		var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
		var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	
		if (trackingLibrary() !== TagManager) {
			return new Promise(function (resolve, reject) {
				// eslint-disable-line no-unused-vars
				var msg = "Google Tag Manager is not available";
				if (typeof callback === "function") callback(msg);
				reject(msg);
			});
		}
	
		var data = {
			event: "event",
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		};
	
		if (value) data.eventValue = value;
	
		return new Promise(function (resolve) {
			data.eventCallback = function () {
				if (typeof callback === "function") callback();
				resolve();
			};
	
			window.dataLayer.push(data);
		});
	}
	
	/**
	 * Sends an event to the Universal Analytics
	 * @param  {String} category 	Category
	 * @param  {String} action 		Action
	 * @param  {String} label 		Label
	 * @param  {Int} values			Value
	 * @param  {Function} callback 	Callback
	 * @return {Promise}			A promise resolved when the track has fired
	 */
	function sendUniversalEvent(category, action) {
		var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
		var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	
		if (trackingLibrary() !== Universal) {
			return new Promise(function (resolve, reject) {
				// eslint-disable-line no-unused-vars
				var msg = "Universal Analytics is not available";
				if (typeof callback === "function") callback(msg);
				reject(msg);
			});
		}
	
		return new Promise(function (resolve) {
			var cb = function cb() {
				if (typeof callback === "function") callback();
				resolve();
			};
	
			window.ga("send", {
				hitType: "event",
				eventCategory: category,
				eventAction: action,
				eventLabel: label,
				eventValue: value,
				hitCallback: cb
			});
		});
	}
	
	function sendClassicEvent(category, action) {
		var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
		var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	
		if (trackingLibrary() !== Classic) {
			return new Promise(function (resolve, reject) {
				// eslint-disable-line no-unused-vars
				var msg = "Classic Analytics is not available";
				if (typeof callback === "function") callback(msg);
				reject(msg);
			});
		}
	
		return new Promise(function (resolve) {
			var cb = function cb() {
				if (typeof callback === "function") callback();
				resolve();
			};
	
			window._gaq.push(["_set", "hitCallback", cb]);
			window._gaq.push(["_trackEvent", category, action, label, value]);
		});
	}
	
	/// @class Tracker
	/// Base on the old NICE.EventTracking.js.
	/// @link //cdn.nice.org.uk/V3/Scripts/nice/NICE.EventTracking.js
	
	var Tracker = function () {
		_createClass(Tracker, null, [{
			key: "defaults",
			value: function defaults() {
				return Defaults;
			}
		}]);
	
		function Tracker(element, options) {
			_classCallCheck(this, Tracker);
	
			if (!element) throw new Error("Element must be non-null");
	
			this.el = element;
			this.$el = $(element);
	
			this.options = $.extend({}, Tracker.defaults(), options);
	
			this.delegate();
		}
	
		_createClass(Tracker, [{
			key: "events",
			value: function events() {
				return _defineProperty({}, "click.tracker " + this.options.trackSelectors.join(","), "_handleTrack");
			}
		}, {
			key: "_handleTrack",
			value: function _handleTrack(e) {
				var $el = $(e.currentTarget);
	
				var cat = $el.data("track-category") || "",
				    action = $el.data("track-action") || "",
				    label = $el.data("track-label") || "",
				    value = $el.data("track-value");
	
				sendEvent(cat, action, label, value);
			}
		}]);
	
		return Tracker;
	}();
	
	exports.default = Tracker;
	
	Tracker.sendEvent = sendEvent;
	Tracker.sendDataLayerEvent = sendDataLayerEvent;
	Tracker.sendUniversalEvent = sendUniversalEvent;
	Tracker.sendClassicEvent = sendClassicEvent;
	
	(0, _eventr2.default)(Tracker);
	(0, _pluginizr2.default)("tracker", Tracker);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./tabs/tabs.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./eventr.js": 6,
		"./experience.js": 1,
		"./plugin-autoloader.js": 2,
		"./pluginizr.js": 3,
		"./tracker.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 9;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=experience.dev.map