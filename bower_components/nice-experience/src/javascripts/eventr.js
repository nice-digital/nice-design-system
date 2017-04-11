/**
 * @module Eventr
 * Delegate and undelegate events
 * @example
 * 		import { delegate } from "./eventr";
 *  	delegate(obj);
 *
 *  	import eventr from "./eventr";
 *  	eventr.delegate(obj);
 *  	eventr.undelegate(obj);
 *  	class Test {
 *  		constructor() {
 *  			this.delegate();
 *  		}
 *  	}
 *  	eventr(Test);
 */

// Regex to split event delegates, see http://backbonejs.org/docs/backbone.html#section-153
// for more info
const DelegateEventSplitter = /^(\S+)\s*(.*)$/;

// jQuery Event Namespace. See http://api.jquery.com/on/ for more info
const EventNamespace = "delegateEvents";

/**
 * Delegates events on an object instance. Allows a consistent, declarative approach to binding events.
 * Expects the instance parameter to have 2 properties:
 * 	- $el - The jQuery element(s) to use as a context
 * 	- events() - Function that returns an events hash
 * Bound events are namespaced with the 'EventNamespace' string.
 * The events hash is like Backbone's events hash and consists of {“event selector”: “callback”}.
 * The callback can either be a named method to call on the instance or a function itself.
 * The callback function is called with 'instance' as the context for 'this'.
 *
 * @example
 * 	import { delegate } from "./eventr";
 * 	class Test {
 * 		constructor(el) {
 * 			this.$el = $(el);
 * 			delegate(this);
 * 		}
 * 		events() {
 * 			return {
 * 				"click .something": "_clickHandler",
 * 				[`keydown .${ something }`]: () => { }
 * 			}
 * 		}
 * 		_clickHandler(e) { }
 * 	}
 *
 * @param  {Object} instance An instance of an object
 * @return {Object}          The instance
 * @throws {Error} If instance isn't truthy
 * @throws {Error} If instace.$el doesn't exist
 * @throws {Error} If instanceevents isn't a function
 */
export function delegate(instance) {
	if(!instance) {
		$.error("Instance must be non-null");
	}
	if(!instance.$el) {
		$.error("Instance.$el must be non-null");
	}
	if(!instance.events || typeof instance.events !== "function") {
		$.error("Instance.events must be a function");
	}

	let events = instance.events();

	if(!events) return instance;

	for (var key in events) {
		let method = events[key];

		if (typeof method !== "function")
			method = instance[method];

		if (!method) {
			$.error("Method could not be found");
		}

		let match = key.match(DelegateEventSplitter),
			eventName = match[1],
			selector = match[2];

		instance.$el.on(`${ eventName }.${ EventNamespace }`, selector, $.proxy(method, instance));
	}

	return instance;
}

/**
 * Undelegate events on an object instance
 * @param  {Object} instance An instance of an object
 * @return {Object}          The instance
 */
export function undelegate(instance) {
	if(!instance) {
		$.error("Instance must be non-null");
	}
	if(!instance.$el) {
		$.error("Instance.$el must be non-null");
	}
	instance.$el.off(`.${ EventNamespace }`);
	return instance;
}

/**
 * Mixes in event delegate and undelegate functionality into a class's
 * protoype so it can be called as "this.delegate()". A convenient abstraction
 * over the individual 'delegate' and 'undelegate' functions.
 * @param  {Class} pluginClass The class on which to add the prototype methods
 * @example
 * 	import eventr from "./eventr";
 * 	class Test {
 * 		constructor(el) {
 * 			this.$el = $(el);
 * 			this.delegate();
 * 		}
 * 		events() {
 * 			return {
 * 				"click .something": "_clickHandler",
 * 				[`keydown .${ something }`]: () => { }
 * 			}
 * 		}
 * 		_clickHandler(e) { }
 * 	}
 * 	eventr(Test;)
 */
function mixin(pluginClass) {
	pluginClass.prototype.delegate = function() {
		return mixin.delegate.call(this, this);
	};
	pluginClass.prototype.undelegate = function() {
		return mixin.undelegate.call(this, this);
	};
}
mixin.delegate = delegate;
mixin.undelegate = undelegate;

export default mixin;
