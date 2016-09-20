/*eslint-env browser */

/**
 * @module A test module
 * Tabs
 */

import $ from "jquery";
import pluginizr from "pluginizr";

const ClassName = {
	Tabs: ".tabs",
	Tab: "tabs__tab",
	TabActive: "tabs__tab--active",
	TabPane: "tabs__pane",
	TabPaneActive: "tabs__pane--active"
};


/**
 * @class Tabs
 * Tabs description here
 */
export default class Tabs {

	static defaults() {
		return {
			test: true
		};
	}

	constructor(element, options) {
		this.el = element;
		this.$el = $(element);

		this.options = $.extend({}, Tabs.defaults, options);

		this._bindEvents();
		this.activate(0);
	}

	getCurrentIndex() {
		// TODO
		return 99;
	}

	/// Activates a tab with the given index
	/// @param {integer} index The index of the tab to activate
	activate(index: number) {
		// TODO: Look with the closest Tabs collection
		$(`.${ClassName.Tab}`)
			.removeClass(ClassName.TabActive)
			.find("a")
				.attr("aria-expanded", false)
			.end()
			.eq(index)
			.addClass(ClassName.TabActive)
			.find("a")
				.attr("aria-expanded", true);

		$(`.${ClassName.TabPane}`)
			.removeClass(ClassName.TabPaneActive)
			.eq(index)
			.addClass(ClassName.TabPaneActive);
	}

	// PRIVATE

	_bindEvents() {
		this.$el.on("click", `.${ClassName.Tab} a`, e => {
			var index = $(e.currentTarget).parent().index();
			this.activate(index);
			e.preventDefault();
		});
	}
}

pluginizr("tabs", Tabs);
