import $ from "jquery";

// Regex to find the name of a module from its path.
// E.g, "./experience.js" find "experience" from the matched group
const ModuleNameRegex = /^\.\/(.*).js$/i;

// Load all modules from this directory automatically, see http://stackoverflow.com/a/31770875/486434
let localRequire = require.context("./", true, /^(.*\.(js$))[^.]*$/igm);

// Constructs a module object - parses a key (path) into a module name
let getModuleObj =
	(key: string) => ({ key: key, name: key.match(ModuleNameRegex, "")[1] });

// Require and return a module
let requireModule =
	(module) => {
		localRequire(module.key);
		return module;
	};

// Build a list from which to auto-load
let keys =
	localRequire.keys()
	.filter(k => k !== "./experience.js") // Ignore experience as it's our entry point so treated differently
	.map(getModuleObj)
	.map(requireModule)
	.filter(m => m.name in $.fn); // Now the module is loaded, only care about ones that are a plugin

/// Auto plugin loader.
/// Useful for JIT loading of plugins
export default {
	findPlugins: ($context: $) => {
		keys.forEach(plugin => { // Load any plugins automatically
			$(`[data-${ plugin.name }]`, $context || $(document)).each((i, el) => {
				let $el = $(el);

				if(!PRODUCTION) { // Store the path we required it from, for debugging
					$el.data("require-path", plugin.key)
				}

				// TODO: Convert plugin data-attributes into options object
				$el[plugin.name]();
			});
		});
	}
};
