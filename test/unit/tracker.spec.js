/* eslint-env node, mocha, jquery */
/* global sinon */

import Tracker, { trackingLibrary, sendEvent, sendDataLayerEvent } from "../../src/javascripts/tracker";

describe("Tracker", function() {

	// Sinon sandbox where we can spy/stub/mock and reset for each test
	var sandbox;
	beforeEach(function () {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function () {
		sandbox.restore();

		// Reset all the tracking libraries after each test
		window.ga = window._gaq = window.dataLayer = undefined;
	});

	describe("jQuery integration", function() {

		it("defined on jquery object", function() {
			$(document).tracker
				.should.exist
				.and.be.a("function");
		});

		it("have defaults", function() {
			$.fn.tracker
				.should.have.property("defaults")
					.that.has.keys("trackSelectors");
		});

		it("return jquery collection containing the element", function() {
			var $el = $("<div/>");
			var $tracker = $el.tracker();

			$tracker
				.should.be.an.instanceOf($)
				.and.equal($el)
				.and.have.property("length", 1);
		});

	});

	describe("Initialization", function() {

		it("have defaults function", function() {
			Tracker.should.have.property("defaults").that.is.a("function");
		});

		it("throw error without element", function() {
			(() => {
				new Tracker;
			}).should.throw(Error);
		});

	});

	describe("Tracking library", function() {

		it("tracking library function exists", function() {
			trackingLibrary
				.should.exist
				.and.be.a("function");
		});

		it("empty when no library loaded", function() {
			trackingLibrary().should.equal("");
		});

		it("TagManager when dataLayer is available", function() {
			window.dataLayer = [];
			trackingLibrary().should.equal("TagManager");
		});

		it("Universal when ga available", function() {
			window.ga = () => {};
			trackingLibrary().should.equal("Universal");
		});

		it("Classic when _gaq is available", function() {
			window._gaq = [];
			trackingLibrary().should.equal("Classic");
		});
	});

	describe("Event tracking", function() {

		it("sendEvent function exists", function() {
			sendEvent.should.exist.and.be.a("function");
		});

		it("no tracking library available returns rejected promise", function() {
			return sendEvent("ct", "actn", "lbl")
				.should.be.rejectedWith(Error)
				.and.eventually.have.property("message", "No tracking library available");
		});

		it("no tracking library available calls callback with error", function() {
			var spy = sinon.spy();
			sendEvent("ct", "actn", "lbl", null, spy);

			spy.should.be.calledOnce;
			spy.firstCall.args[0]
				.should.be.an.instanceof(Error)
				.with.property("message", "No tracking library available");
		});

		describe("Tag Manager", function() {

			beforeEach(function () {
				window.dataLayer = [];
			});

			it("event track passes to dataLayer", function() {
				let track = { event: "event",
					eventCategory: "gtm-ct",
					eventAction: "gtm-actn",
					eventLabel: "gtm-lbl",
					eventValue: 99 };

				let push = sinon.spy(window.dataLayer, "push");

				sendDataLayerEvent(track.eventCategory, track.eventAction, track.eventLabel, track.eventValue);

				push.should.be.calledOnce;
				push.firstCall.args.length.should.equal(1);

				let args = push.firstCall.args[0];

				args.should.contain.all.keys(track);
				args.eventCallback
					.should.exist
					.and.be.a("function");
			});

			it("event track calls callback and resolves promise", function() {
				let push = sinon.spy(window.dataLayer, "push");
				let cb = sinon.spy();
				var promise = sendEvent("c", "a", "l", 0, cb);

				// Mimic GTM's eventCallback functionality
				push.firstCall.args[0].eventCallback.call();

				cb.should.be.calledOnce;
				return promise.should.be.fulfilled;
			});

		});

		describe("Universal Analytics", function() {

			beforeEach(function () {
				window.ga = () => {};
			});

			it("event track returns promise", function() {
				sendEvent("ga-ct", "ga-actn").should.be.a("Promise");
			});

		});

		describe("Classic Analytics", function() {

			beforeEach(function () {
				window._gaq = [];
			});

			it("event track returns promise", function() {
				sendEvent("gaq-ct", "gaq-actn").should.be.a("Promise");
			});

		});
	});

	describe("Click tracking", function() {

		it("handles click on tracked child", function() {
			let spy = sandbox.spy(Tracker.prototype, "_handleTrack"),
				$el = $("<div><a data-track></a></div>"),
				tracker = new Tracker($el[0]);

			$("a", $el).click();

			spy.should.be.calledOnce;
		});

		it("handled click event is namespaced", function() {
			let spy = sandbox.spy(Tracker.prototype, "_handleTrack"),
				$el = $("<div><a data-track></a></div>"),
				tracker = new Tracker($el[0]);

			$("a", $el).click();

			spy.firstCall.args[0].handleObj.namespace
				.should.be.a("string")
				.and.contain("tracker");
		});

	});

});
