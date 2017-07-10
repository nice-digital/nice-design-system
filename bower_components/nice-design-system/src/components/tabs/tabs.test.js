/* eslint-env node, mocha, jquery */
/* global sinon */

import keycode from "keycode";

import Tabs from "./tabs";
import testHelpers from "../../../test/test-helpers";

describe("Tabs", function() {

	var tabsHTML;

	before(function () {
		tabsHTML = testHelpers.renderComponent("tabs", [
			{
				title: "Tab one",
				content: "<h2>Tab one content</h2><p>This is the content for tab 1<a href=\"#\">A link</a></p>"
			},
			{
				title: "Tab two",
				content: "<h2>Tab two content</h2><p>This is the content for tab 2</p>"
			},
			{
				title: "Tab three",
				content: "<h2>Tab three content</h2><p>This is the content for tab 3</p>"
			}]);
	});

	var sandbox;
	beforeEach(function () {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function () {
		sandbox.restore();
	});

	describe("jQuery integration", function() {

		let $el;
		beforeEach(function () {
			$el = $(tabsHTML);
		});

		it("defined on jquery object", function() {
			$.fn.tabs
				.should.exist
				.and.be.a("function");
		});

		it("have defaults", function() {
			$.fn.tabs.should.have.property("defaults");
		});

		// TODO: Test no conflict

		it("plugin returns element", function() {
			$el.tabs()
				.should.be.an.instanceOf($)
				.and.equal($el)
				.and.have.property("length", 1);
		});

		it("plugin returns elements when called on multiple", function() {
			let $twoEls = $el.add($("<div/>"));

			$twoEls.tabs()
				.should.be.an.instanceOf($)
				.and.equal($twoEls)
				.and.have.property("length", 2);
		});

		it("get method can be called", function() {
			$el.tabs().tabs("getCurrentIndex").should.equal(0);
		});

		it("get method throws with multiple elements", function() {
			(() => {
				$el.add($("<div/>")).tabs().tabs("getCurrentIndex");
			}).should.throw();
		});

		it("method can be called", function() {
			$el.tabs().tabs("activate", 2).tabs("getCurrentIndex").should.equal(2);
		});
	});

	describe("Initialization", function() {

		it("have defaults function", function() {
			Tabs
				.should.have.property("defaults")
				.that.is.a("function");
		});

		it("throw error without element", function() {
			(() => {
				new Tabs;
			}).should.throw(Error);
		});

		// TODO: Test options merging

	});

	describe("Tab selection", function() {

		let tabs;
		beforeEach(function () {
			tabs = new Tabs($(tabsHTML));
		});

		it("first tab selected by default", function() {
			tabs.getCurrentIndex().should.equal(0);
		});

		it("tab can be activated by index", function() {
			tabs.activate(1).should.equal(1);
		});

		it("last tab can be activated", function() {
			tabs.last().should.equal(2);
		});

		it("first tab can be activated", function() {
			tabs.last().should.equal(2);
			tabs.first().should.equal(0);
		});

		it("next tab can be activated", function() {
			tabs.next().should.equal(1);
		});

		it("next tab activates first from last", function() {
			tabs.last().should.equal(2);
			tabs.next().should.equal(0);
		});

		it("previous tab can be activated", function() {
			tabs.last().should.equal(2);
			tabs.previous().should.equal(1);
		});

		it("previous tab activates last from first", function() {
			tabs.previous().should.equal(2);
		});
	});


	describe("Accessibility", function() {

		let $el,
			tabs;
		beforeEach(function () {
			$el = $(tabsHTML);
			tabs = new Tabs($el);
		});

		let getTab = (idx) => $("[role='tab']", $el).eq(idx);
		let getTabsAfter = (idx) => $(`[role='tab']:gt(${ idx })`, $el);
		let getTabPanel = (idx) => $("[role='tabpanel']", $el).eq(idx);
		let getTabPanelsAfter = (idx) => $(`[role='tabpanel']:gt(${ idx })`, $el);

		it("tab has generated aria-controls matching its panel's id", function() {
			getTab(0).attr("aria-controls").should.equal(getTabPanel(0).attr("id"));
		});

		it("tab panel has generated aria-labelledby matching its tabs's id", function() {
			getTab(0).attr("id").should.equal(getTabPanel(0).attr("aria-labelledby"));
		});

		it("active tab is aria-selected", function() {
			getTab(0).attr("aria-expanded").should.equal("true");
			getTab(0).attr("aria-selected").should.equal("true");
		});

		it("inactive tabs are not aria-selected", function() {
			getTabsAfter(0).attr("aria-expanded").should.equal("false");
			getTabsAfter(0).attr("aria-selected").should.equal("false");
		});

		it("inactive tab panels are not aria-hidden", function() {
			getTabPanel(0).attr("aria-hidden").should.equal("false");
			getTabPanelsAfter(0).attr("aria-hidden").should.equal("true");
			tabs.next();
			getTabPanel(1).attr("aria-hidden").should.equal("false");
			$("[role='tabpanel']:not(:eq(1))", $el).attr("aria-hidden").should.equal("true");
		});

	});

	describe("Keyboard control", function() {

		// Test helper for repetitive key testing
		let testKey = (keyName, methodName) => {
			let $el = $(tabsHTML),
				method = sandbox.spy(new Tabs($el), methodName);

			$("[role='tab']", $el)
				.eq(0)
				.trigger($.Event("keydown", { which: keycode(keyName) } ));

			method.should.be.calledOnce;
		};

		it("left keydown on tab selects previous", function() {
			testKey("left", "previous");
		});

		it("up keydown on tab selects previous", function() {
			testKey("up", "previous");
		});

		it("right keydown on tab selects next", function() {
			testKey("right", "next");
		});

		it("down keydown on tab selects next", function() {
			testKey("down", "next");
		});

		it("end keydown on tab selects last", function() {
			testKey("end", "last");
		});

		it("home keydown on tab selects first", function() {
			testKey("home", "first");
		});

		it("space keydown selects focussed tab", function() {

			let $el = $(tabsHTML),
				activate = sandbox.spy(new Tabs($el), "activate");

			$("[role='tab']:eq(1)", $el)
				.trigger($.Event("keydown", { which: keycode("space") } ));

			activate.withArgs(1).should.be.calledOnce;
		});

		it("enter keydown selects focussed tab", function() {

			let $el = $(tabsHTML),
				activate = sandbox.spy(new Tabs($el), "activate");

			$("[role='tab']:eq(2)", $el)
				.focus()
				.trigger($.Event("keydown", { which: keycode("enter") } ));

			activate.withArgs(2).should.be.calledOnce;
		});

	});
});
