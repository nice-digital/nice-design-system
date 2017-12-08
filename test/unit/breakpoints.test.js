/* eslint-env node, mocha, jquery */
/* global sinon */

import breakpoints, { matchesFrom } from "../../src/javascripts/breakpoints";

describe("breakpoints", function() {

	// Sinon sandbox where we can spy/stub/mock and reset for each test
	var sandbox;
	beforeEach(function () {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function () {
		sandbox.restore();
	});

	it("breakpoints is an object", function() {
		breakpoints.should.be.an("Object");
	});

	it("breakpoints has keys for each defined breakpoint", function() {
		breakpoints.should.contain.all.keys(["xs", "sm", "md", "lg", "xl"]);
	});

	it("matchesFrom throws error with no breakpoint", function() {
		(() => {
			matchesFrom();
		}).should.throw(Error);
	});

	it("matchesFrom throws error with invalid breakpoint", function() {
		(() => {
			matchesFrom("invalid");
		}).should.throw(Error);
	});

	it("matchesFrom calls matchMedia with correct em-based min-width media query", function() {
		// Arrange
		let matchMedia = sandbox.spy(window, "matchMedia");
		// Act
		matchesFrom("xs");
		// Assert
		matchMedia.should.be.calledOnce.and.calledWith("(min-width: 25em)");
	});

	it("matchesFrom returns true when media query is matched", function() {
		// Arrange
		sandbox.stub(window, "matchMedia").callsFake(() => ({ matches: true }));
		// Act/assert
		matchesFrom("xs").should.be.eql(true);
	});

	it("matchesFrom returns true when media query isn't matched", function() {
		// Arrange
		sandbox.stub(window, "matchMedia").callsFake(() => ({ matches: false }));
		// Act/assert
		matchesFrom("xs").should.be.eql(false);
	});

});
