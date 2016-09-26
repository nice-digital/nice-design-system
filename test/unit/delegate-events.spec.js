/* eslint-env node, mocha, jquery */
/* global sinon */

const delegateEvents = require("../../src/javascripts/delegate-events.js").default;

describe("Delegate events", function() {

	it("throws when function not found", function() {

		var spy = sinon.spy($, "error");

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
			var test = new Test();
		}).should.throw();

		spy.should.be.calledOnce;
	});

	it("should call function", function() {

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

		spy.should.be.calledOnce;
	});

	it("should call method", function() {

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
			_handler() {
			}
		}

		var spy = sinon.spy(Test.prototype, "_handler");

		var test = new Test();
		test.$el.find(".inner").trigger("click");

		spy.should.be.calledOnce;
	});

});
