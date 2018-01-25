/* eslint-env node, mocha, jquery */
/* global sinon, should */

import InPageNav, { headingsExclude } from "./in-page-nav";

describe("In page nav", function() {

	var $nav,
		inPageNav,
		sandbox;

	beforeEach(function () {
		$(window).off(".inpagenav");
		if(inPageNav) {
			// Cleanup so we don't have to do it in every test
			inPageNav.destroy();
		}
		window.pageYOffset = 0;
		sandbox = sinon.sandbox.create();
		$nav = $("<div class=parent><div class=navholder /></div>");
		$("body").html($nav).append("<div class=footer></div>");
	});

	afterEach(function () {
		sandbox.restore();
	});

	describe("jQuery plugin", function() {

		it("is defined on $.fn object", function() {
			$.fn.inpagenav
				.should.exist
				.and.be.a("function");
		});

		it("has public defaults", function() {
			$.fn.inpagenav.should.have.property("defaults")
				.that.is.deep.equal(InPageNav.defaults());
		});

		it("returns original element", function() {
			$nav.inpagenav()
				.should.be.an.instanceOf($)
				.and.equal($nav)
				.and.have.property("length", 1);

			// Cleanup
			$nav.inpagenav("destroy");
		});

		it("returns original elements when called on multiple elements", function() {
			// Arrange
			var $second = $("<div/>");
			$("body").append($second);
			let $twoEls = $nav.add($second);

			// Act
			var ipn = $twoEls.inpagenav();

			// Assert
			ipn.should.be.an.instanceOf($)
				.and.equal($twoEls)
				.and.have.property("length", 2);

			// Cleanup
			$twoEls.inpagenav("destroy");
		});
	});

	describe("Defaults", function() {

		it("has defaults function", function() {
			InPageNav
				.should.have.property("defaults")
				.that.is.a("function");
		});

		it("has default keys", function() {
			InPageNav.defaults()
				.should.be.an("object")
				.and.have.all.keys("headingsContainer", "headings", "headingsExclude", "footerContainer", "scrollTolerance");
		});

	});

	describe("constructor", function() {

		it("throws error without an element argument", function() {
			(() => { new InPageNav; }).should.throw(Error);
		});

		it("saves a reference to $el", function () {
			inPageNav = new InPageNav($nav[0]);
			inPageNav.$el.should.deep.equal($nav);
		});

		it("copies defaults into instance options", function() {
			// Arrange
			let opts = $.extend({ test: true }, InPageNav.defaults(), { headingsExclude: headingsExclude });
			// Act
			inPageNav = new InPageNav($nav, { test: true });
			// Assert
			inPageNav.options.should.deep.equal(opts);
		});

		it("generates a unique id property on creation", function() {
			inPageNav = new InPageNav($nav);
			let inPageNav2 = new InPageNav($nav);
			// Assert
			inPageNav.uid.should.not.equal(inPageNav2.uid);
		});

		it("doesn't select a heading by default", function() {
			inPageNav = new InPageNav($nav);
			// Assert
			should.not.exist(inPageNav.getActiveHeading());
		});

		it("renders template on creation", function() {
			// Arrange
			let render = sandbox.spy(InPageNav.prototype, "render");
			// Act
			inPageNav = new InPageNav($nav);
			// Assert
			render.should.be.calledOnce;
		});

		it("updates nav state on creation", function() {
			// Arrange
			let updateNavState = sandbox.spy(InPageNav.prototype, "updateNavState");
			// Act
			inPageNav = new InPageNav($nav);
			// Assert
			updateNavState.should.be.calledOnce;
		});

		describe("event delegation", function() {

			it("updates nav state on window load", function() {
				// Arrange
				let updateNavState = sandbox.spy(InPageNav.prototype, "updateNavState");
				inPageNav = new InPageNav($nav);
				updateNavState.reset();
				// Act
				$(window).trigger("load");
				// Assert
				updateNavState.should.be.calledOnce;
			});

			it("updates nav state on window scroll", function() {
				// Arrange
				let updateNavState = sandbox.spy(InPageNav.prototype, "updateNavState");
				inPageNav = new InPageNav($nav);
				updateNavState.reset();
				// Act
				$(window).trigger("scroll");
				// Assert
				updateNavState.should.be.calledOnce;
			});

			it("calculates position on window resize", function() {
				// Arrange
				let calculatePosition = sandbox.spy(InPageNav.prototype, "calculatePosition");
				inPageNav = new InPageNav($nav);
				calculatePosition.reset();
				// Act
				$(window).trigger("resize");
				// Assert
				calculatePosition.should.be.calledOnce;
			});

		});
	});

	describe("destroy", function() {

		it("should remove window event listeners when destroyed", function() {
			// Arrange
			inPageNav = new InPageNav($nav);
			should.exist($._data(window, "events"));
			// Act
			inPageNav.destroy();
			// Assert
			should.not.exist($._data(window, "events"));
		});

		it("should remove element when destroyed", function() {
			// Arrange
			inPageNav = new InPageNav($nav);
			inPageNav.$el.parent().should.have.lengthOf(1);
			// Act
			inPageNav.destroy();
			// Assert
			inPageNav.$el.parent().should.have.lengthOf(0);
		});

	});

	describe("findHeadings", function() {

		it("looks for headings within element specified by 'container' option", function() {
			// Arrange
			$("body").append("<h2>Heading 2</h2><div class=headings><h3>Heading 3</h3><h4>Heading 4</h4></div><h5>Heading 5</h5>");
			inPageNav = new InPageNav($nav, { headingsContainer: ".headings" });

			// Act
			let headings = inPageNav.findHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(1)
				.and.have.nested.property("[0].textContent", "Heading 3");
		});

		it("uses headings from 'headings' option", function() {
			// Arrange
			$("body").append("<h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5>");
			inPageNav = new InPageNav($nav, { headings: "h4, h5" });

			// Act
			let headings = inPageNav.findHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(2);

			headings.should.have.nested.property("[0].textContent", "Heading 4");
			headings.should.have.nested.property("[1].textContent", "Heading 5");
		});

		it("ignores headings from default 'excludes' constant", function() {
			// Arrange
			$("body").append("<h2>Heading 2</h2><h3>Heading 3.1</h3><h3 data-no-inpagenav>Heading 3.2</h3>");
			inPageNav = new InPageNav($nav);

			// Act
			let headings = inPageNav.findHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(2)
				.and.have.nested.property("[1].textContent", "Heading 3.1");
		});

		it("ignores headings from 'exclude' option", function() {
			// Arrange
			$("body").append("<div class=ignore><h3>Heading 3</h3></div><h2>Heading 2</h2><h3 class=ignore>Heading 3</h3>");
			inPageNav = new InPageNav($nav, { headingsExclude: ".ignore, .ignore *" });

			// Act
			let headings = inPageNav.findHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(1)
				.and.have.nested.property("[0].textContent", "Heading 2");
		});

	});

	describe("generateHeadingId", function() {
		it("doesn't generate an id for a heading with an id attribute", function () {
			// Arrange
			var inPageNav = new InPageNav($nav);
			var heading = document.createElement("h2");
			heading.id = "an-id";

			// Act
			inPageNav.generateHeadingId(heading);

			// Assert
			heading.id.should.eql("an-id");
		});

		it("generates a heading id from the text content for a heading with no id attribute", function () {
			// Arrange
			var inPageNav = new InPageNav($nav);
			var heading = document.createElement("h2");
			heading.textContent = "A heading";

			// Act
			inPageNav.generateHeadingId(heading);

			// Assert
			heading.id.should.eql("a-heading");
		});

		it("generates a sequential heading id when there are duplicate headings", function () {
			// Arrange
			$("body").append("<h2>Heading two</h2><h2>Heading two</h2>");
			var inPageNav = new InPageNav($nav);
			var heading = document.createElement("h2");
			heading.textContent = "Heading two";

			// Act
			inPageNav.generateHeadingId(heading);

			// Assert
			heading.id.should.eql("heading-two-3");
		});
	});

	describe("calculatePosition", function() {

		it("is fixed when above viewport", function () {

			// Arrange
			inPageNav = new InPageNav($nav);
			window.pageYOffset = 1;

			// Act
			inPageNav.$el.find(".in-page-nav--fixed").length.should.eql(0);
			inPageNav.calculatePosition();

			// Assert
			inPageNav.$el.find(".in-page-nav--fixed").length.should.eql(1);
		});

		it("isn't fixed when within viewport", function () {

			// Arrange
			inPageNav = new InPageNav($nav);

			window.pageYOffset = 1;
			inPageNav.calculatePosition();
			inPageNav.$el.find(".in-page-nav--fixed").length.should.eql(1);

			window.pageYOffset = 0;
			inPageNav.calculatePosition();
			inPageNav.$el.find(".in-page-nav--fixed").length.should.eql(0);
		});

		it("matches width of parent when fixed", function() {

		});

	});

	describe("Tree rendering", function() {
		// TODO - test that the tree is rendered correctly
	});

	describe("Accessibility", function() {
		// TODO - test that aria attributes are set correctly
	});
});
