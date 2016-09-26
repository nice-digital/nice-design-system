
// Regex to split event delegates
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * Delegates events on an object instance. Allows a consistent, declarative approach to binding events.
 * Expects instance to have 2 properties:
 * 	- $el - The elements
 * 	- events() - Function that returns an events hash
 * The events hash is like Backbone's events hash and consists of {“event selector”: “callback”}
 *
 * @example
 * 	class Test {
 * 		constructor() {
 * 			this.$el = $("selector");
 * 			delegateEvents(this);
 * 		}
 * 		events() {
 * 			return {
 * 				"click .something": "_clickHandler",
 * 				[`keydown .${ something }`]: function() { console.log("Something"); }
 * 			}
 * 		}
 * 		_clickHandler(e) {
 * 		}
 * 	}
 *
 * @param  {Object} instance An instance of an object
 * @return {Object}          The instance
 * @throws {Error} If instance isn't truthy
 * @throws {Error} If instance events isn't a function
 */
export default function delegateEvents(instance) {
	if(!instance) {
		$.error("Instance must be non-null");
	}
	if(!instance.events || typeof instance.events !== "function") {
		$.error("Instance must be non-null");
	}

	var events = instance.events();

	if(!events)
		return instance;

	for (var key in events) {
		var method = events[key];

		if (typeof method !== "function")
			method = instance[method];

		if (!method) {
			$.error("Method could not be found");
		}

		var match = key.match(delegateEventSplitter);

		let eventName = match[1],
			selector = match[2];

		instance.$el.on(`${ eventName }.delegateEvents`, selector, $.proxy(method, instance));
	}

	return instance;
}
