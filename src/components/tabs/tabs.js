/*eslint-env browser */

/**
 * @module A test module
 * Tabs
 */

import keycode from "keycode";
import pluginizr from "../../javascripts/pluginizr";
import eventr from "../../javascripts/eventr";

const Defaults = {
	tabClass: "tabs__tab",
	tabActiveClass: "tabs__tab--active",
	tabButtonClass: "tabs__tab-btn",
	tabPaneClass: "tabs__pane",
	tabPaneActiveClass: "tabs__pane--active"
};

// Generate unique id amongst tabs
// See http://stackoverflow.com/a/20302361
const uid = function (i) {
	return function () {
		return "tabs-" + (++i);
	};
}(0);


/**
 * @class Tabs
 * Follows W3 design for tab panels with aria attributes.
 * @link https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
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

		// Generate random ids for tabs and panes, for use with aria attributes
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

		this.delegate();

		this.activate(0, false);
	}

	events() {
		return {
			[`click .${ this.options.tabButtonClass }`]: "_handleTabBtnClick",
			[`keydown .${ this.options.tabButtonClass }`]: "_handleTabBtnKeydown",
			[`keydown .${ this.options.tabPaneClass }`]: "_handlePaneKeydown"
		};
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
	/// @param {boolean} focus Whether to give focus to the active tab btn
	activate(index: number, focus: ?boolean = true) {
		var $selectedTabBtn = this._getTabs()
			.removeClass(this.options.tabActiveClass)
			.find(`.${ this.options.tabButtonClass }`)
			.attr("aria-expanded", false)
			.attr("aria-selected", false)
			.end()
			.eq(index)
			.addClass(this.options.tabActiveClass)
			.find(`.${ this.options.tabButtonClass }`)
			.attr("aria-expanded", true)
			.attr("aria-selected", true);

		if(focus === true) {
			$selectedTabBtn.focus();
		}

		this._getTabPanes()
			.removeClass(this.options.tabPaneActiveClass)
			.attr("aria-hidden", true)
			.eq(index)
			.addClass(this.options.tabPaneActiveClass)
			.attr("aria-hidden", false);

		return this.getCurrentIndex();
	}

	/**
	 * Activates the next tab, or the first we're at the end
	 * @return {Integer} The current index
	 */
	next() {
		var currentIndex = this.getCurrentIndex();
		if(currentIndex === this._getTabs().length - 1) {
			return this.first();
		} else {
			return this.activate(currentIndex + 1);
		}
	}

	/**
	 * Activates the previous tab, or the last tab if we're at the start
	 * @return {Integer} The current index
	 */
	previous() {
		var currentIndex = this.getCurrentIndex();
		if(currentIndex === 0) {
			return this.last();
		} else {
			return this.activate(currentIndex - 1);
		}
	}

	/**
	 * Activates the first tab
	 * @return {Integer} The current index
	 */
	first() {
		return this.activate(0);
	}

	/**
	 * Activates the last tab
	 * @return {Integer} The current index
	 */
	last() {
		return this.activate(this._getTabs().length - 1);
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

	// Handle clicking on a tab
	_handleTabBtnClick(e) {
		e.preventDefault();

		var index = $(e.currentTarget)
			.closest(`.${ this.options.tabClass }`)
			.index();
		this.activate(index);
	}

	// Enable keyboard control of the tabs
	_handleTabBtnKeydown(e) {
		switch(keycode(e.which))
		{
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
				this.activate($(e.currentTarget).closest(`.${ this.options.tabClass }`).index());
				break;
			default:
				break;
		}
	}

	// Focus the current tab btn on a ctrl+up or ctrl+left when in a tab pane
	_handlePaneKeydown(e) {
		if($.inArray(keycode(e.which), ["up", "left"]) > -1 && e.ctrlKey) {
			e.preventDefault();
			e.stopPropagation();

			var tabId = $(e.currentTarget).attr("aria-labelledby");
			$(`#${ tabId }`).focus();
		}
	}
}

eventr(Tabs);
pluginizr("tabs", Tabs);
