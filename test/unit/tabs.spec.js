/* eslint-env node, mocha, jquery */
/* global sinon */

const KeyCodes = {
	Enter: 13,
	Space: 32,
	End: 35,
	Home: 36,
	LeftArrow: 37,
	UpArrow: 38,
	RightArrow: 39,
	DownArrow: 40
};

describe("Tabs", function() {

	var Tabs;

	before(function () {
		Tabs = require("../../src/javascripts/tabs.js").default;
	});

	var sandbox;
	beforeEach(function () {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function () {
		sandbox.restore();
	});

	var tabsHTML = `
		<div class="tabs" data-nice-plugin="tabs">
			<nav>
				<ul class="tabs__list" role="tablist">
					<li class="tabs__tab" role="presentation">
						<button class="tabs__tab-btn" type="button" role="tab">
							Tab 1
						</button>
					</li>
					<li class="tabs__tab" role="presentation">
						<button  class="tabs__tab-btn"type="button" role="tab">
							Tab 2
						</abutton>
					</li>
					<li class="tabs__tab" role="presentation">
						<button class="tabs__tab-btn" type="button" role="tab">
							Tab 3
						</abutton>
					</li>
				</ul>
			</nav>
			<div class="tabs__content">
				<div class="tabs__pane" role="tabpanel">
					<h2>First tab</h2>
					<p>This is the content for tab 1</p>
				</div>
				<div class="tabs__pane" role="tabpanel">
					<h2>Second tab</h2>
					<p>This is the content for tab 2</p>
				</div>
				<div class="tabs__pane" role="tabpanel">
					<h2>Third tab</h2>
					<p>This is the content for tab 3</p>
				</div>
			</div>
		</div>
	`;

	describe("jQuery integration", function() {

		it("defined on jquery object", function() {
			$(document).tabs.should.be.ok;
		});

		it("have defaults", function() {
			$(document).tabs.should.have.property("defaults");
		});

		// TODO: Test no conflict

		it("return jquery collection containing the element", function() {
			var $el = $("<div/>");
			var $tabs = $el.tabs();

			$tabs.should.be.an.instanceOf($, "returns jquery collection");
			$tabs[0].should.equal($el[0], "collection contains element");
		});

		it("get method can be called", function() {
			var $el = $(tabsHTML).tabs();
			($el.tabs("getCurrentIndex")).should.equal(0);
		});

		it("get method throws with multiple elements", function() {
			var $el = $(tabsHTML).add($(tabsHTML)).tabs();
			(() => {
				$el.tabs("getCurrentIndex");
			}).should.throw();
		});

		it("method can be called", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("activate", 1);
			($el.tabs("getCurrentIndex")).should.equal(1);
		});
	});

	describe("Initialization", function() {

		it("have defaults", function() {
			Tabs.should.have.property("defaults");
		});

		it("throw error without element", function() {
			(() => {
				new Tabs;
			}).should.throw(Error);
		});

	});

	describe("Tab selection", function() {

		it("first tab selected by default", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.getCurrentIndex().should.equal(0);
		});

		it("tab can be activated by index", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.activate(1);
			t.getCurrentIndex().should.equal(1);
		});

		it("last tab can be activated", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.last();
			(t.getCurrentIndex()).should.equal(2);
		});

		it("first tab can be activated", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.last();
			t.first();
			(t.getCurrentIndex()).should.equal(0);
		});

		it("next tab can be activated", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.next();
			(t.getCurrentIndex()).should.equal(1);
		});

		it("next tab activates first from last", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.last();
			t.next();
			(t.getCurrentIndex()).should.equal(0);
		});

		it("previous tab can be activated", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.last();
			t.previous();
			(t.getCurrentIndex()).should.equal(1);
		});

		it("previous tab activates last from first", function() {
			var $el = $(tabsHTML);
			var t = new Tabs($el);
			t.previous();
			(t.getCurrentIndex()).should.equal(2);
		});
	});


	describe("Accessibility", function() {

		it("tab has generated aria-controls matching its panel's id", function() {
			var $el = $(tabsHTML);
			new Tabs($el);
			$("[role='tab']:eq(0)", $el).attr("aria-controls").should.equal($("[role='tabpanel']:eq(0)", $el).attr("id"));
		});

		it("tab panel has generated aria-labelledby matching its tabs's id", function() {
			var $el = $(tabsHTML);
			new Tabs($el);
			$("[role='tab']:eq(0)", $el).attr("id").should.equal($("[role='tabpanel']:eq(0)", $el).attr("aria-labelledby"));
		});

		it("active tab is aria-selected", function() {
			var $el = $(tabsHTML);
			new Tabs($el);
			$("[role='tab']:eq(0)", $el).attr("aria-expanded").should.equal("true");
			$("[role='tab']:eq(0)", $el).attr("aria-selected").should.equal("true");
		});

		it("inactive tabs are not aria-selected", function() {
			var $el = $(tabsHTML);
			new Tabs($el);
			$("[role='tab']:gt(0)", $el).attr("aria-expanded").should.equal("false");
			$("[role='tab']:gt(0)", $el).attr("aria-selected").should.equal("false");
		});

		it("inactive tab panels are not aria-hidden", function() {
			var $el = $(tabsHTML);
			var tabs = new Tabs($el);
			$("[role='tabpanel']:eq(0)", $el).attr("aria-hidden").should.equal("false");
			$("[role='tabpanel']:gt(0)", $el).attr("aria-hidden").should.equal("true");
			tabs.next();
			$("[role='tabpanel']:eq(1)", $el).attr("aria-hidden").should.equal("false");
			$("[role='tabpanel']:not(:eq(1))", $el).attr("aria-hidden").should.equal("true");
		});

	});

	describe("Keyboard control", function() {

		// Test helper for repetitive key testing
		function testKey(which, methodName) {
			let $el = $(tabsHTML),
				method = sandbox.spy(new Tabs($el), methodName);

			$("[role='tab']:eq(0)", $el)
				.focus()
				.trigger($.Event("keydown", { which: which } ));

			method.should.be.calledOnce;
		}

		it("left keydown on tab calls previous", function() {
			testKey(KeyCodes.LeftArrow, "previous");
		});

		it("up keydown on tab calls previous", function() {
			testKey(KeyCodes.UpArrow, "previous");
		});

		it("right keydown on tab calls next", function() {
			testKey(KeyCodes.RightArrow, "next");
		});

		it("down keydown on tab calls next", function() {
			testKey(KeyCodes.DownArrow, "next");
		});

		it("end keydown on tab calls last", function() {
			testKey(KeyCodes.End, "last");
		});

		it("home keydown on tab calls first", function() {
			testKey(KeyCodes.Home, "first");
		});

		it("enter/space keydown on selects focussed tab", function() {

			let $el = $(tabsHTML),
				activate = sandbox.spy(new Tabs($el), "activate");

			$("[role='tab']:eq(1)", $el)
				.focus()
				.trigger($.Event("keydown", { which: KeyCodes.Space } ));

			activate.withArgs(1).should.be.calledOnce;
		});

	});
});
