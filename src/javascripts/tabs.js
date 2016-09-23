/*eslint-env browser */

/**
 * @module A test module
 * Tabs
 */

import $ from "jquery";
import pluginizr from "./pluginizr";

const Defaults = {
	tabClass: "tabs__tab",
	tabActiveClass: "tabs__tab--active",
	tabButtonClass: "tabs__tab-btn",
	tabPaneClass: "tabs__pane",
	tabPaneActiveClass: "tabs__pane--active"
};

const KeyCodes = {
	Enter: 13,
	Space: 32,
	End: 35,
	Home: 36,
	LeftArrow: 37,
	UpArrow: 38,
	RightArrow: 39,
	DownArrow: 40
};

// Generate unique id amongst tabs
// See http://stackoverflow.com/a/20302361
var uid = function (i) {
	return function () {
		return "tabs-" + (++i);
	};
}(0);


/**
 * @class Tabs
 * Tabs description here
 */
export default class Tabs {

	static defaults() {
		return Defaults;
	}

	constructor(element, options) {
		if(!element)
			throw new Error("Element must be non-null");

		this.el = element;
		this.$el = $(element);

		this.options = $.extend({}, Tabs.defaults(), options);

		// Generate random ids for tabs and panes
		this._getTabs().each((i, el) => {
			var tabId = uid(),
				paneId = uid();

			$(el).find(`.${ this.options.tabButtonClass }`)
				.prop("id", tabId)
				.attr("aria-controls", paneId);

			this._getTabPanes()
				.eq(i)
				.prop("id", paneId)
				.attr("aria-labelledby", tabId);

		});

		this._bindEvents();
		this.activate(0);
	}

	/// Gets the 0-based index of the currently selected tab
	getCurrentIndex() {
		return this
			._getTabs()
			.filter(`.${ this.options.tabActiveClass }`)
			.index();
	}

	/// Activates a tab with the given index
	/// @param {integer} index The index of the tab to activate
	activate(index: number) {
		this._getTabs()
			.removeClass(this.options.tabActiveClass)
			.find(`.${ this.options.tabButtonClass }`)
				.attr("aria-expanded", false)
				.attr("aria-selected", false)
			.end()
			.eq(index)
			.addClass(this.options.tabActiveClass)
			.find(`.${ this.options.tabButtonClass }`)
				.focus()
				.attr("aria-expanded", true)
				.attr("aria-selected", true);

		this._getTabPanes()
			.removeClass(this.options.tabPaneActiveClass)
			.attr("aria-hidden", true)
			.eq(index)
			.addClass(this.options.tabPaneActiveClass)
			.attr("aria-hidden", false);
	}

	/// Activates the next tab
	next() {
		var currentIndex = this.getCurrentIndex();
		if(currentIndex < this._getTabs().length - 1) {
			this.activate(currentIndex + 1);
		}
	}

	/// Activates the previous tab
	previous() {
		var currentIndex = this.getCurrentIndex();
		if(currentIndex > 0) {
			this.activate(currentIndex - 1);
		}
	}

	/// Activates the first tab
	first() {
		this.activate(0);
	}

	/// Activates the last tab
	last() {
		this.activate(this._getTabs().length - 1);
	}

	// PRIVATE

	// Gets the tab elements
	_getTabs(): $ {
		return $(`.${ this.options.tabClass }`, this.$el);
	}

	// Gets the tab pane elements
	_getTabPanes(): $ {
		return $(`.${ this.options.tabPaneClass }`, this.$el);
	}

	_bindEvents() {
		this.$el.on("click", `.${ this.options.tabButtonClass }`, e => {
			e.preventDefault();

			var index = $(e.currentTarget)
				.closest(`.${ this.options.tabClass }`)
				.index();
			this.activate(index);
		});

		// Enable keyboard control of the tabs
		this.$el.on("keydown", `.${ this.options.tabButtonClass }`, e => {
			switch(e.which)
			{
				// Go backwards one tab
				case KeyCodes.LeftArrow:
				case KeyCodes.UpArrow:
					e.preventDefault();
					e.stopPropagation();
					this.previous();
					break;

				// Go forward one tab
				case KeyCodes.RightArrow:
				case KeyCodes.DownArrow:
					e.preventDefault();
					e.stopPropagation();
					this.next();
					break;

				// Go to the first tab
				case KeyCodes.Home:
					e.preventDefault();
					e.stopPropagation();
					this.first();
					break;

				// Go to the last tab
				case KeyCodes.End:
					e.preventDefault();
					e.stopPropagation();
					this.last();
					break;

				// Go to the focussed tab
				case KeyCodes.Enter:
				case KeyCodes.Space:
					e.preventDefault();
					e.stopPropagation();
					this.activate($(e.currentTarget).closest(`.${ this.options.tabClass }`).index());
					break;
				default:
					break;
			}
		});
	}
}

pluginizr("tabs", Tabs);
