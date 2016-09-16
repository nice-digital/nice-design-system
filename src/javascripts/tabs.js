/*eslint-env browser */

/**
 * @module A test module
 * Tabs
 */

import $ from "jquery";

const NAME: string = "tabs";

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

	constructor(element: number) {
		this._element = element;
		this._bindEvents();
		this.activate(0);
	}

	/// Activates a tab with the given index
	/// @param {number} index The index of the tab to activate
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
		$(this._element).on("click", `.${ClassName.Tab} a`, e => {
			var index = $(e.currentTarget).parent().index();
			this.activate(index);
			e.preventDefault();
		});
	}

	static _jQueryInterface(config: mixed) {
		return this.each(() => new Tabs(this[0]));
	}
}

$.fn[NAME] = Tabs._jQueryInterface;
