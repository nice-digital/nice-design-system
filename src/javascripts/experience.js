import $ from "jquery";
import pluginAutoLoader from "plugin-autoloader";
import Tabs from "tabs";
import Tracker from "tracker";

$().ready(function() {
	// Load any plugins automatically
	pluginAutoLoader.findPlugins();
});

let experience = {
	Tabs: Tabs,
	Tracker: Tracker
};

// Export to global namespace for precompiled usage
window.NICE = window.NICE || {};
window.NICE.experience = experience;

export {
	experience as default,
	// Individual modules
	Tabs,
	Tracker
};
