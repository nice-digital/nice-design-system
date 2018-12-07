"use strict";

import React from "react";
import { mount } from "enzyme";

import Button from "../src/Button";

describe("@nice-digital/nds-button", () => {

	let wrapper;

	it("renders without crashing", () => {
		wrapper = mount(<Button>Example</Button>);
	});

	it("matches snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("renders a button tag", () => {
		expect(wrapper.find("button")).toBeTruthy();
	});

	it("renders button type attribute", () => {
		expect(wrapper.find("button").prop("type")).toEqual("button");
	});

	describe("contents", () => {
		it("renders text prop string as content", () => {
			wrapper = mount(<Button type="anchor">Test contents</Button>);
			expect(wrapper.find("a").text()).toBe("Test contents");
		});

		it("renders child element as content", () => {
			wrapper = mount(<Button type="anchor"><span>test child</span></Button>);
			expect(wrapper.find("a").text()).toBe("test child");
		});
	});

	describe("anchors", () => {
		it("renders an a tag when type prop is anchor", () => {
			wrapper = mount(<Button type="anchor" />);
			expect(wrapper.find("a")).toBeTruthy();
		});

		it("renders an href attribute from href prop", () => {
			wrapper = mount(<Button type="anchor" href="/test" />);
			expect(wrapper.find("a").prop("href")).toEqual("/test");
		});
	});

	describe("props", () => {
		it("renders type attribute from type prop", () => {
			wrapper = mount(<Button type="submit" />);
			expect(wrapper.find("button").prop("type")).toEqual("submit");
		});

		it("calls onClick handler", () => {
			const clickHandler = jest.fn();
			let wrapper = mount(<Button onClick={clickHandler} />);
			wrapper.find("button").simulate("click");
			expect(clickHandler).toHaveBeenCalled();
		});

		it("adds modifier prop to class name", () => {
			let wrapper = mount(<Button modifier="inverse" />);
			expect(wrapper.find("button").prop("className")).toEqual("btn btn--inverse");
		});

		it("throws error from unsupported modifier", () => {
			const original = console.error;
			console.error = jest.fn();
			expect(() => {
				mount(<Button modifier="invalid" />);
			}).toThrow("Expected modifier to be one of cta, secondary, inverse but found 'invalid'");
			console.error = original;
		});

		it("renders props as attributes", () => {
			wrapper = mount(<Button type="submit" disabled="disabled" modifier={Button.modifiers.cta}>txt</Button>);
			expect(wrapper.find("button").props()).toEqual({
				children: "txt",
				className: "btn btn--cta",
				type: "submit",
				disabled: "disabled"
			});
		});
	});
});
