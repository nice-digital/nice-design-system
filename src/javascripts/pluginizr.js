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

		var args = arguments;

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

			console.log("keys", Object.keys(Plugin.prototype));
			console.log("prototype", (Plugin.prototype));
			for(var k in Plugin.prototype){
				console.log(k, Plugin.prototype[k]);
			}

			// Find getters
			var propNames = Object.getOwnPropertyNames(Plugin.prototype);
			var getters = propNames.filter(propName => {
				var result =  Object.getOwnPropertyDescriptor(Plugin.prototype, propName);
				return !!result.get;
			});

			// No arguments means *might* mean it"s a getter property.
			// Getters break chainability
			if (methodArgs.length == 0 && $.inArray(methodName, getters) != -1) {
				var instance = $.data(this[0], dataName);
				return instance[methodName];
			} else {
				console.log("method");

				// Invoke the speficied method on each selected element
				return this.each(function() {
					var instance = $.data(this, dataName);
					if (instance instanceof Plugin && typeof instance[methodName] === "function") {
						instance[methodName].apply(instance, methodArgs);
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
