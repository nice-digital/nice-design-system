/* eslint-env node, mocha */

const should = require("should"),
	jsdom = require("jsdom");

describe("Tabs", function() {

	var $,
		document,
		Tabs;

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
				<div lass="tabs__pane" role="tabpanel">
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

	before(function () {
		document = global.document = jsdom.jsdom("<html><head></head><body></body></html>");
		global.window = document.defaultView;
		$ = global.jQuery = global.$ = require("jquery");

		Tabs = require("../../src/javascripts/tabs.js").default;
	});


	describe("jQuery integration", function() {

		it("defined on jquery object", function() {
			$(document).tabs.should.be.ok();
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

		it("tab can be activated by index", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("activate", 1);
			($el.tabs("getCurrentIndex")).should.equal(1);
		});

		it("last tab can be activated", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("last");
			($el.tabs("getCurrentIndex")).should.equal(2);
		});

		it("first tab can be activated", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("last").tabs("first");
			($el.tabs("getCurrentIndex")).should.equal(0);
		});

		it("next tab can be activated", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("next");
			($el.tabs("getCurrentIndex")).should.equal(1);
		});

		it("previous tab can be activated", function() {
			var $el = $(tabsHTML).tabs();
			$el.tabs("last").tabs("previous");
			($el.tabs("getCurrentIndex")).should.equal(1);
		});
	});


	describe("Tabs", function() {

		it("have defaults", function() {
			Tabs.should.have.property("defaults");
		});

		it("throw without element", function() {
			should.throws(() => new Tabs);
		});

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
	});


	describe("Accessibility", function() {

		it("active tab is aria-expanded", function() {
			var $tabs = $(tabsHTML);
			$tabs.tabs();
			$("[role='tab']:eq(0)", $tabs).attr("aria-expanded").should.equal("true");
			$("[role='tab']:eq(0)", $tabs).attr("aria-selected").should.equal("true");
		});

		it("inactive tabs are not aria-expanded", function() {
			var $tabs = $(tabsHTML);
			$tabs.tabs();
			$("[role='tab']:gt(0)", $tabs).attr("aria-expanded").should.equal("false");
			$("[role='tab']:gt(0)", $tabs).attr("aria-selected").should.equal("false");
		});

	});

	describe("Keyboard", function() {


	});
});
