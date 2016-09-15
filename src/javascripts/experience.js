import $ from "jquery";
import pluginAutoLoader from "plugin-autoloader";

$().ready(function() {

	// Load any plugins automatically
	pluginAutoLoader.findPlugins();
});

export default {
	test: true
};
