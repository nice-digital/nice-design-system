/* eslint-env node, mocha, jquery */
/* global sinon, should */

import eventr, { delegate, undelegate } from "../src/eventr";

describe("Delegate events", function() {

	describe("Delegate events", function() {

		it("throws when no instance", function() {
			(() => {
				delegate();
			}).should.throw("Instance must be non-null");
		});

		it("throws when no el", function() {
			(() => {
				delegate({});
			}).should.throw("Instance.$el must be non-null");
		});

		it("throws when no events", function() {
			(() => {
				delegate({ $el: $("<div/>") });
			}).should.throw("Instance.events must be a function");
		});

		it("throws when callback not found", function() {
			(() => {
				delegate({
					$el: $("<div/>"),
					events: () => ({ "click .inner": "notfound" })
				});
			}).should.throw("Method could not be found");
		});

		it("bound events are namespaced", function() {
			let spy = sinon.spy(),
				test = {
					$el: $("<div><div class='inner' /></div>"),
					events: () => ({ "click .inner": spy })
				};

			delegate(test);
			$(".inner", test.$el).trigger("click");

			spy.should.be.calledOnce;
			spy.firstCall.args.length.should.equal(1);
			spy.firstCall.args[0].handleObj.namespace.should.equal("delegateEvents");
		});

		it("bound events maintain existing namespaced", function() {
			let spy = sinon.spy(),
				test = {
					$el: $("<div><div class='inner' /></div>"),
					events: () => ({ "click.testns .inner": spy })
				};

			delegate(test);
			$(".inner", test.$el).trigger("click");

			spy.should.be.calledOnce;
			spy.firstCall.args.length.should.equal(1);
			spy.firstCall.args[0].handleObj.namespace.should.equal("delegateEvents.testns");
		});

		it("should call callback with instance as context", function() {
			let spy = sinon.spy(),
				test = {
					$el: $("<div><div class='inner' /></div>"),
					events: () => ({ "click .inner": spy })
				};

			delegate(test);
			test.$el.find(".inner").trigger("click");

			spy.should.be.calledOnce.and.be.calledOn(test);
		});

		it("should call named instance method callback", function() {

			let spy = sinon.spy(),
				test = {
					$el: $("<div><div class='inner' /></div>"),
					events: () => ({ "click .inner": "_handler" }),
					_handler: spy
				};

			delegate(test);
			test.$el.find(".inner").trigger("click");

			spy.should.be.calledOnce.and.be.calledOn(test);
		});
	});

	describe("Undelegate events", function() {

		it("throws when no instance", function() {
			(() => {
				undelegate();
			}).should.throw("Instance must be non-null");
		});

		it("throws when no el", function() {
			(() => {
				undelegate({});
			}).should.throw("Instance.$el must be non-null");
		});

		it("should only undelegate namespaced events", function() {

			let test = {
				$el: $("<div><div class='inner' /></div>"),
				events: () => ({ "click .inner": () => {} })
			};
			delegate(test);
			test.$el.on("TEST", () => {});

			let getEventKeys = () => {
				return Object.keys($._data(test.$el[0], "events"));
			};

			getEventKeys().length.should.equal(2);

			undelegate(test);

			getEventKeys().length.should.equal(1);
			getEventKeys()[0].should.equal("TEST");
		});
	});

	describe("Mixin", function() {

		it("Should be a function", function() {
			eventr.should.exist.and.be.a("function");
		});

		it("Should have shortcuts to raw functions", function() {
			eventr.delegate.should.equal(delegate);
			eventr.undelegate.should.equal(undelegate);
		});

		it("Applies methods to prototype", function() {

			class Test { }

			should.not.exist(Test.prototype.delegate);
			should.not.exist(Test.prototype.undelegate);

			eventr(Test);

			Test.prototype.delegate.should.exist;
			Test.prototype.undelegate.should.exist;
		});

		it("Prototype methods return instance", function() {

			class Test {
				constructor() { this.$el = $("<div/>"); }
				events() { return {}; }
			}
			eventr(Test);

			let test = new Test();

			test.delegate().should.equal(test);
			test.undelegate().should.equal(test);
		});

		it("Mixed in methods have correct args", function() {
			var spy = sinon.spy(eventr, "delegate");

			class Test {
				constructor() { this.$el = $("<div/>"); }
				events() { return {}; }
			}
			eventr(Test);

			let test = new Test();
			test.delegate();

			spy.withArgs(test).should.be.calledOnce.and.be.calledOn(test);
		});

	});

});
