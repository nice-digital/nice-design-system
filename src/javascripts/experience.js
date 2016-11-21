import $ from "jquery";
import pluginAutoLoader from "./plugin-autoloader";
import Tabs from "./../components/tabs/tabs.js";
import Tracker from "./tracker";

$.fn.experience = function() {
	pluginAutoLoader.findPlugins(this);
};

let Experience = {
	Tabs: Tabs,
	Tracker: Tracker
};

// Export to global namespace for precompiled usage
window.NICE = window.NICE || {};
window.NICE.Experience = Experience;

export {
	Experience as default,
	// Individual modules
	Tabs,
	Tracker
};
