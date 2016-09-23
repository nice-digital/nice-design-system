import $ from "jquery";

/**
 * Turns a given class into a jQuery plugin
 * @param  {string} pluginName	The name of the plugin
 * @param  {Class} plugin 		The class of the plugin itself
 * @link http://www.acuriousanimal.com/2013/01/15/things-i-learned-creating-a-jquery-plugin-part-i.html
 */
export default (pluginName: string, Plugin) => {

	const dataName = `__${pluginName}`,
		old = $.fn[pluginName];

	$.fn[pluginName] = function(options) {

		const args = arguments;

		// TODO: Destory plugin by removing the data

		if (options === undefined || typeof options === "object") {
			return this.each((i, el) => {

				// TODO: Merge options with data-* attributes

				// Create an instance of the plugin and cache it
				if (!$.data(el, dataName)) {
					$.data(el, dataName, new Plugin(el, options));
				}
			});
		} else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
			// _* methods as these are private by convention

			// Assume $(".selector").plugin("methodName", anArg, anotherArg)
			// Call a public plugin method (not starting with an underscore) for each selected element.
			const methodName = options,
				methodArgs = Array.prototype.slice.call(args, 1);

			// Ideally we would use Object.getOwnPropertyNames(Plugin.prototype); to get
			// true 'getters' but to support IE8 we can't do this. So we relay on a naming
			// convention of getters start "get" e.g. getCurrentIndex();

			// No arguments and starting with 'get' means a getter which breaks chainability
			if (methodArgs.length == 0 && /^get.+$/.test(methodName)) {
				if(this.length > 1) {
					$.error(`Cannot call a getter '${ methodName }' on a collection of elements`);
					return;
				}
				var instance = $.data(this[0], dataName);
				return instance[methodName].apply(instance);
			} else {
				// Invoke the speficied method on each selected element
				return this.each(function() {
					var instance = $.data(this, dataName);
					if (instance instanceof Plugin && typeof instance[methodName] === "function") {
						instance[methodName].apply(instance, methodArgs);
					} else {
						$.error(`Method '${ methodName }' could not be found`);
					}
				});
			}
		}
	};

	// Expose the plugins"s defaults so plugin users can see them
	if(Plugin.defaults && typeof Plugin.defaults === "function")
		$.fn[pluginName].defaults = Plugin.defaults();

	// No conflict
	$.fn[pluginName].noConflict = () => $.fn[pluginName] = old;
};
