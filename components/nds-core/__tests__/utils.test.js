/* eslint-env node, mocha, jquery */

import { slugify, nextUniqueId, camelCase } from "../src/utils";

describe("Utils", function () {
	describe("slugify", function () {
		it("lowercases the input", function () {
			let s = slugify("DOGBONE");

			expect(s).toEqual("dogbone");
		});

		it("replaces space characters with dashes", function () {
			let s = slugify("dog bone");

			expect(s).toEqual("dog-bone");
		});

		it("replaces multiple space characters with single dash", function () {
			let s = slugify("dog  bone");

			expect(s).toEqual("dog-bone");
		});

		it("replaces multiple dash characters with single dash", function () {
			let s = slugify("dog--bone");

			expect(s).toEqual("dog-bone");
		});

		it("replaces ampersands with the word 'and'", function () {
			let s = slugify("dog & bone");

			expect(s).toEqual("dog-and-bone");
		});

		it("replaces non word characters", function () {
			let s = slugify("dog () & * bone 2");

			expect(s).toEqual("dog-and-bone-2");
		});

		it("removes dashes from the start", function () {
			let s = slugify("* dog");

			expect(s).toEqual("dog");
		});

		it("removes dashes from the end", function () {
			let s = slugify("dog *");

			expect(s).toEqual("dog");
		});
	});

	describe("nextUniqueId", function () {
		it("prefixes with 'uid' by default", function () {
			expect(nextUniqueId().indexOf("uid-")).toEqual(0);
		});

		it("prefixes with the given prefix", function () {
			expect(nextUniqueId("test").indexOf("test-")).toEqual(0);
		});

		it("increments counter on subsequent calls", function () {
			let a = Number(nextUniqueId().match(/\d+/)[0]),
				b = Number(nextUniqueId().match(/\d+/)[0]);

			expect(b).toEqual(a + 1);
		});
	});

	describe("camelCase", function () {
		it("turns a Title Case string into a camelCase string", function () {
			expect(camelCase("Title Case")).toEqual("titleCase");
		});
		it("turns a Sentence case string into a camelCase string", function () {
			expect(camelCase("Sentence case")).toEqual("sentenceCase");
		});
		it("turns a kebab-case string into a camelCase string", function () {
			expect(camelCase("this-is-kebab-case")).toEqual("thisIsKebabCase");
		});
	});
});
