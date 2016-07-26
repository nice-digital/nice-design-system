import $ from "jquery";

// Load all modules from this directory automatically, see http://stackoverflow.com/a/31770875/486434
var req = require.context("./", true, /^(.*\.(js$))[^.]*$/igm);
req.keys().forEach(function(key){
	req(key);
});

/// Auto plugin loader.
/// Useful for JIT loading of plugins
export default {
	findPlugins: function($context) {
		// Load any plugins automatically
		$("[data-nice-plugin]", $context || $(document)).each((i, el) => {
			let $el = $(el),
				pluginName = $el.data("nicePlugin");
			// TODO: Convert plugin data-attributes into options object
			$el[pluginName]();
		});
	}
};
