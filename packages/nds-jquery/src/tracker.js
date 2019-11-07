/**
 * @module Tracker
 * For tracking and analytics
 */

import pluginizr from "./pluginizr";
import eventr from "./eventr";

const Defaults = {
	trackSelectors: [
		"a[data-track]",
		"button[data-track]",
		"[type='submit'][data-track]",
		"[type='reset'][data-track]",
		"[type='image'][data-track]",
		"[data-track] a",
		"[data-track] button",
		".tophat a"
	]
};

const TagManager = "TagManager",
	Classic = "Classic",
	Universal = "Universal";

// Gets the name of tracking library available
export function trackingLibrary(): string {
	if(window.dataLayer && typeof window.dataLayer.push === "function")
		return TagManager;

	if (window._gaq && typeof window._gaq.push === "function")
		return Classic;

	if(typeof window.ga === "function")
		return Universal;

	return "";
}

/**
 * A function that gets called as soon as a hit to Google has been successfully sent.
 *
 * @callback hitCallback
 * @param {string} message An optional error message if it fails
 */

/**
 * Tracks an event to the current loaded analytics services (either GTM/GA/UA)
 * @param  {string} category        The name you supply for the group of objects you want to track.
 * @param  {string} action        	A string that is uniquely paired with each category, and commonly used to define the type of user interaction for the web object.
 * @param  {string} label        	An optional string to provide additional dimensions to the event data.
 * @param  {integer} value       	An optional integer that you can use to provide numerical data about the user event.
 * @param  {hitCallback} callback 	A function to callback
 * @param  {boolean} nonInteraction Specified an event as a non-interaction event. Note: non-interaction can"t be set via the datalayer in GTM
 * @return {Promise}				A promise that resolves when the track has successfully finished
 * @example
 * 	import Tracker from "tracker";
 * 	Tracker.trackEvent("ct", "actn", "lbl").then(() => {
 * 		// tracked
 * 	}).catch(err => {
 * 		// Error tracking
 * 	};
 */
export function sendEvent(category: string,
	action: string,
	label: ?string = "",
	value: ?number,
	callback: ?() => void = null,
	nonInteraction: boolean = false): Promise {

	if(trackingLibrary() == TagManager)
		return sendDataLayerEvent(category, action, label, value, callback);
	else if(trackingLibrary() == Universal)
		return sendUniversalEvent(category, action, label, value, callback, nonInteraction);
	else if(trackingLibrary() == Classic)
		return sendClassicEvent(category, action, label, value, callback, nonInteraction);

	const msg = "No tracking library available",
		err = new Error(msg);
	if(typeof callback === "function")
		callback(err);
	return Promise.reject(err);
}

/**
 * Sends an event to the GTM data layer
 * @param  {String} category 	Category
 * @param  {String} action 		Action
 * @param  {String} label 		Label
 * @param  {Int} values			Value
 * @param  {Function} callback 	Callback
 * @return {Promise}			A promise resolved when the track has fired
 */
export function sendDataLayerEvent(category: string,
	action: string,
	label: ?string = "",
	value: ?number = null,
	callback: ?() => void = null): Promise {

	if(trackingLibrary() !== TagManager) {
		return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
			const msg = "Google Tag Manager is not available";
			if(typeof callback === "function")
				callback(msg);
			reject(msg);
		});
	}

	const data = {
		event: "event",
		eventCategory: category,
		eventAction: action,
		eventLabel: label
	};

	if (value)
		data.eventValue = value;

	return new Promise(resolve => {
		data.eventCallback = () => {
			if(typeof callback === "function")
				callback();
			resolve();
		};

		window.dataLayer.push(data);
	});
}

/**
 * Sends an event to the Universal Analytics
 * @param  {String} category 	Category
 * @param  {String} action 		Action
 * @param  {String} label 		Label
 * @param  {Int} values			Value
 * @param  {Function} callback 	Callback
 * @return {Promise}			A promise resolved when the track has fired
 */
export function sendUniversalEvent(category: string,
	action: string,
	label: ?string = "",
	value: ?number = null,
	callback: ?() => void = null): Promise {

	if(trackingLibrary() !== Universal) {
		return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
			const msg = "Universal Analytics is not available";
			if(typeof callback === "function")
				callback(msg);
			reject(msg);
		});
	}

	return new Promise(resolve => {
		var cb = () => {
			if(typeof callback === "function")
				callback();
			resolve();
		};

		window.ga("send", {
			hitType: "event",
			eventCategory: category,
			eventAction: action,
			eventLabel: label,
			eventValue: value,
			hitCallback: cb
		});
	});
}



export function sendClassicEvent(category: string,
	action: string,
	label: ?string = "",
	value: ?number = null,
	callback: ?() => void = null): Promise {

	if(trackingLibrary() !== Classic) {
		return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
			const msg = "Classic Analytics is not available";
			if(typeof callback === "function")
				callback(msg);
			reject(msg);
		});
	}

	return new Promise(resolve => {
		var cb = () => {
			if(typeof callback === "function")
				callback();
			resolve();
		};

		window._gaq.push(["_set", "hitCallback", cb]);
		window._gaq.push(["_trackEvent", category, action, label, value]);
	});
}

/// @class Tracker
/// Base on the old NICE.EventTracking.js.
/// @link //cdn.nice.org.uk/V3/Scripts/nice/NICE.EventTracking.js
export default class Tracker {

	static defaults() {
		return Defaults;
	}

	constructor(element, options) {
		if(!element)
			throw new Error("Element must be non-null");

		this.el = element;
		this.$el = $(element);

		this.options = $.extend({}, Tracker.defaults(), options);

		this.delegate();
	}

	events() {
		return {
			[`click.tracker ${ this.options.trackSelectors.join(",") }`]: "_handleTrack"
		};
	}

	_handleTrack(e) {
		var $el = $(e.currentTarget);

		let cat = $el.data("track-category") || "",
			action = $el.data("track-action") || "",
			label = $el.data("track-label") || "",
			value = $el.data("track-value");

		sendEvent(cat, action, label, value);
	}
}
Tracker.sendEvent = sendEvent;
Tracker.sendDataLayerEvent = sendDataLayerEvent;
Tracker.sendUniversalEvent = sendUniversalEvent;
Tracker.sendClassicEvent = sendClassicEvent;

eventr(Tracker);
pluginizr("tracker", Tracker);
