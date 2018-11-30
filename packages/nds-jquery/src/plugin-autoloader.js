import { getPlugins } from "./pluginizr";

// Regex to find the name of a module from its path.
// E.g, "./experience.js" find "experience" from the matched group
// E.g, "/tabs/tabs.js" find "tabs" from the matched group
const ModuleNameRegex = /([^/.]*)\.js$/i;

// Constructs a module object - parses a key (path) into a module name
let getModuleObj =
	(key: string) => ({ key: key, name: key.match(ModuleNameRegex, "")[1] });

// Require and return a module
let requireModule =
	(module, localRequire) => {
		localRequire(module.key);
		return module;
	};

/// Load all plugins from the given require context.
/// @example
/// 	import { pluginAutoLoader } from "nice-experience";
/// 	pluginAutoLoader.load(require.context("./", true, /\.js$/));
export function load(localRequire) {
	// Build a list from which to auto-load
	localRequire.keys()
		.filter(k => k !== "./experience.js") // Ignore experience as it's our entry point so treated differently
		.map(getModuleObj)
		.map((module) => requireModule(module, localRequire))
		.filter(m => m.name in $.fn); // Now the module is loaded, only care about ones that are a plugin
}

export function findPlugins($context: $) {
	getPlugins().forEach(plugin => { // Load any plugins automatically
		$(`[data-${ plugin.name }]`, $context || $(document)).each((i, el) => {

			var $el = $(el),
				options;

			// Convert plugin data-attributes into options object
			// e.g. data-plugin-test="true" data-plugin-something-else="1" becomes:
			// { test: true, somethingElse: 1 }
			[].forEach.call(el.attributes, function(attr) {

				var match = attr.name.match(new RegExp(`^data-(${ plugin.name }-.+)`));
				if (match && match.length === 2) {
					var attrName = $.camelCase(match[1]),
						propName = $.camelCase(match[1].replace(`${ plugin.name }-`, ""));
					options = options || {};
					options[propName] = $el.data(attrName); // Use jquery's data because it parses types
				}
			});

			$(el)[plugin.name](options);
		});
	});
}

/// Auto plugin loader.
/// Useful for JIT loading of plugins
export default {
	load: load,
	findPlugins: findPlugins
};
