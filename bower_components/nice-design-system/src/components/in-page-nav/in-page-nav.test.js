/* eslint-env node, mocha, jquery */
/* global sinon, should */

import InPageNav from "./in-page-nav";

describe("In page nav", function() {

	var $nav,
		inPageNav,
		sandbox;

	beforeEach(function () {
		if(inPageNav) {
			// Cleanup so we don't have to do it in every test
			inPageNav.destroy();
		}
		sandbox = sinon.sandbox.create();
		$nav = $("<div class=parent><div class=navholder /></div>");
		$("body").html($nav);
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
				.and.have.all.keys("headingsContainer", "headings", "headingsExclude", "scrollTolerance", "wideTarget", "wideBreakpoint");
		});

	});

	describe("Initialization", function() {

		it("throws error without an element argument", function() {
			(() => { new InPageNav; }).should.throw(Error);
		});

		it("copies defaults into instance options", function() {
			inPageNav = new InPageNav($nav);
			// Assert
			inPageNav.options.should.deep.equal(InPageNav.defaults());
		});

		it("doesn't select a heading by default", function() {
			inPageNav = new InPageNav($nav);
			// Assert
			should.not.exist(inPageNav.getActiveHeading());
		});

		it("should render template on creation", function() {
			// Arrange
			let render = sandbox.spy(InPageNav.prototype, "render");
			// Act
			inPageNav = new InPageNav($nav);
			// Assert
			render.should.be.calledOnce;
		});

		it("generates a unique id property prefixed 'inpagenav-' on creation", function() {
			inPageNav = new InPageNav($nav);
			// Assert
			inPageNav.uid.should.match(/inpagenav-\d+/);
		});
	});

	describe("Destruction", function() {

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

	describe("Options", function() {

		it("looks for headings within element specified by 'container' option", function() {
			// Arrange
			$("body").append("<h2>Heading 2</h2><div class=headings><h3>Heading 3</h3><h4>Heading 4</h4></div><h5>Heading 5</h5>");
			inPageNav = new InPageNav($nav, { headingsContainer: ".headings" });

			// Act
			let headings = inPageNav.getHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(1)
				.and.have.deep.property("[0].textContent", "Heading 3");
		});

		it("uses headings from 'headings' option", function() {
			// Arrange
			$("body").append("<h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5>");
			inPageNav = new InPageNav($nav, { headings: "h4, h5" });

			// Act
			let headings = inPageNav.getHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(2);

			headings.should.have.deep.property("[0].textContent", "Heading 4");
			headings.should.have.deep.property("[1].textContent", "Heading 5");
		});

		it("ignores headings from 'exclude' option", function() {
			// Arrange
			$("body").append("<div class=ignore><h3>Heading 3</h3></div><h2>Heading 2</h2><h3 class=ignore>Heading 3</h3>");
			inPageNav = new InPageNav($nav, { headingsExclude: ".ignore, .ignore *" });

			// Act
			let headings = inPageNav.getHeadings();

			// Assert
			headings.should.be.an("Array")
				.to.have.lengthOf(1)
				.and.have.deep.property("[0].textContent", "Heading 2");
		});

	});

	describe("Events", function() {

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

	describe("Position calculation", function() {
		// TODO - test that position is calculated correctly
	});

	describe("Tree rendering", function() {
		// TODO - test that the tree is rendered correctly
	});

	describe("Accessibility", function() {
		// TODO - test that aria attributes are set correctly
	});
});
