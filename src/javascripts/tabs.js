/*eslint-env browser */
import $ from "jquery";

const NAME = "tabs";

const ClassName = {
	Tabs: ".tabs",
	Tab: "tabs__tab",
	TabActive: "tabs__tab--active",
	TabPane: "tabs__pane",
	TabPaneActive: "tabs__pane--active"
};

class Tab {

	constructor(element: HTMLElement) {
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
		return this.each(() => new Tab(this[0]));
	}
}

$.fn[NAME] = Tab._jQueryInterface;

/**
 * @module A test module
 * Tabs
 */
export default Tab;
