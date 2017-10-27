import pluginAutoLoader from "./plugin-autoloader";
import Tabs from "./../components/tabs/tabs.js";
import InPageNav from "./../components/in-page-nav/in-page-nav.js";
import Tracker from "./tracker";
import pluginizr from "./pluginizr";
import eventr from "./eventr";
import breakpoints from "./breakpoints";
import utils from "./utils";

let nice = {
	init: (el: $) => {

		// Load all component modules from this directory automatically, see http://stackoverflow.com/a/31770875/486434
		// But exclude test files http://stackoverflow.com/a/30372240
		pluginAutoLoader.load(require.context("./../components/", true, /^((?!test\.).)*\.js$/im));
		pluginAutoLoader.load(require.context("./", true, /^((?!test\.).)*\.js$/im));

		pluginAutoLoader.findPlugins(el);
	},
	// Components
	InPageNav: InPageNav,
	Tabs: Tabs,
	Tracker: Tracker,
	// Utils
	pluginAutoLoader: pluginAutoLoader,
	pluginizr: pluginizr,
	eventr: eventr,
	breakpoints,
	utils
};

$.fn.nice = function() {
	nice.init(this);
};

// Export to global namespace for precompiled usage
window.NICE = window.NICE || {};
window.NICE.nice = nice;

export {
	nice as default,
	// Components
	InPageNav,
	Tabs,
	Tracker,
	// Utils
	pluginAutoLoader,
	pluginizr,
	eventr,
	breakpoints,
	utils
};
