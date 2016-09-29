/**
 * @module Tracker
 * For tracking and analytics
 */

import $ from "jquery";
import pluginizr from "pluginizr";

const defaultTrackSelectors = [
	"a[data-track]",
	"button[data-track]",
	"[type='submit'][data-track]",
	"[type='reset'][data-track]",
	"[type='image'][data-track]",
	"[data-track] a",
	"[data-track] button",
	".tophat a"
];

const TagManager = "TagManager",
	Classic = "Classic",
	Universal = "Universal";

// Gets the name of tracking library available
function trackingLibrary(): string {
	if(window.dataLayer && typeof window.dataLayer.push === "function")
		return TagManager;

	if(typeof window.ga === "function")
		return Classic;

	if(typeof window.ga === "function")
		return Universal;

	if(!PRODUCTION) {
		$.warn("No tracking library found");
	}

	return "";
}

/**
 * A function that gets called as soon as a hit to Google has been successfully sent.
 *
 * @callback hitCallback
 * @param {string} message An optional error message if it fails
 */

/// @class Tracker
/// Base on the old NICE.EventTracking.js.
/// @link //cdn.nice.org.uk/V3/Scripts/nice/NICE.EventTracking.js
export default class Tracker {

	constructor(element, options) {
		this.el = element;
		this.$el = $(element);

		this.options = $.extend({}, Tracker.defaults, options);

		this._bindEvents();
	}

	_bindEvents() {
		this.$el.on("click", e => {

			// TODO: Track click event
			console.log("TODO: Track click event");
		});
	}

	/// Default options for tracker
	static defaults() {
		return {
			test: true
		};
	}

	/**
	 * Tracks an event to the current loaded analytics services (either GTM/GA/UA)
	 * @param  {string} category        The name you supply for the group of objects you want to track.
	 * @param  {string} action        	A string that is uniquely paired with each category, and commonly used to define the type of user interaction for the web object.
	 * @param  {string} label        	An optional string to provide additional dimensions to the event data.
	 * @param  {integer} value       	An optional integer that you can use to provide numerical data about the user event.
	 * @param  {hitCallback} callback 	A function to callback
	 * @param  {boolean} nonInteraction Specified an event as a non-interaction event. Note: non-interaction can't be set via the datalayer in GTM
	 * @return {Promise}				A promise that resolves when the track has successfully finished
	 * @example
	 * 	import Tracker from "tracker";
	 * 	Tracker.trackEvent("ct", "actn", "lbl").then(() => {
	 * 		console.log("tracked");
	 * 	}).catch(err => {
	 * 		console.log("Error tracking " + err);
	 * 	};
	 */
	static trackEvent(category: string,
		action: string,
		label: ?string = "",
		value: ?number,
		callback: ?() => void = null,
		nonInteraction: boolean = false): Promise {

		if(trackingLibrary() == TagManager)
			return Tracker.sendDataLayerEvent(category, action, label, value, callback);

		// TODO: Implement GA Classic & Universal
		if(trackingLibrary() == Universal)
			throw new Error("Universal analytics not implemented yet");

		if(trackingLibrary() == Classic)
			throw new Error("Classic analytics not implemented yet");

		// If no tracking library is available then reject the promise straight away.
		return new Promise((resolve, reject) => {
			const msg = "No tracking library available";

			if(typeof callback === "function")
				callback(msg);

			return reject(msg);
		});
	}

	/**
	 * Sends an event to the GTM data layer
	 * @param  {[type]} category: string        [description]
	 * @param  {[type]} action:   string        [description]
	 * @param  {String} label:    ?string       [description]
	 * @param  {[type]} value:    ?number       [description]
	 * @param  {[type]} callback: ?(            [description]
	 * @return {[type]}           [description]
	 */
	static sendDataLayerEvent(category: string,
		action: string,
		label: ?string = "",
		value: ?number = null,
		callback: ?() => void = null): Promise {

		if(trackingLibrary() !== TagManager) {
			return new Promise((resolve, reject) => {
				const msg = "Google Tag Manager is not available";
				if(typeof callback === "function")
					callback(msg);
				resolve(msg);
			});
		}

		const data = {
			event: "GAevent",
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		};

		if (value)
			data.eventValue = value;

		return new Promise(resolve => {
			data.eventCallback = function() {
				if(typeof callback === "function")
					callback();
				resolve();
			};

			window.dataLayer.push(data);
		});
	}
}

// Turn the tracker into a jQuery plugin
pluginizr("tracker", Tracker);
