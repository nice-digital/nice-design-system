/* eslint-env node, mocha, jquery */
/* global sinon */

const delegateEvents = require("../../src/javascripts/delegate-events.js").default;

describe("Delegate events", function() {

	it("throws when no instance", function() {
		(() => {
			delegateEvents();
		}).should.throw();
	});

	it("throws when function not found", function() {
		class Test {
			constructor() {
				delegateEvents(this);
			}
			events() {
				return {
					"click .inner": "notfound"
				};
			}
		}

		(() => {
			new Test();
		}).should.throw();
	});

	it("should call function with context", function() {

		var spy = sinon.spy();

		class Test {
			constructor() {
				this.$el = $("<div><div class='inner' /></div>");
				delegateEvents(this);
			}
			events() {
				return {
					"click .inner": spy
				};
			}
		}

		var test = new Test();
		test.$el.find(".inner").trigger("click");

		spy.should.be.calledOnce.and.be.calledOn(test);
	});

	it("should call named instance method with context", function() {

		class Test {
			constructor() {
				this.$el = $("<div><div class='inner' /></div>");
				delegateEvents(this);
			}
			events() {
				return {
					"click .inner": "_handler"
				};
			}
			_handler() { }
		}

		var spy = sinon.spy(Test.prototype, "_handler");

		var test = new Test();
		test.$el.find(".inner").trigger("click");

		spy.should.be.calledOnce.and.be.calledOn(test);
	});

});
