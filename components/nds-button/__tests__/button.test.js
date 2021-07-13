"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";

import { Button } from "../src/Button";

describe("@nice-digital/nds-button", () => {
	it("should render without crashing", () => {
		shallow(<Button>Example</Button>);
	});

	it("should render a button tag", () => {
		const wrapper = shallow(<Button>Example</Button>);
		expect(wrapper.find("button")).toBeTruthy();
	});

	it("should match snapshot", () => {
		const wrapper = shallow(<Button>Example</Button>);
		expect(wrapper).toMatchSnapshot();
	});

	describe("contents", () => {
		it("should render children prop into button contents", () => {
			const wrapper = shallow(<Button>Test contents</Button>);
			expect(wrapper.find("button").text()).toBe("Test contents");
		});

		it("should render multiple children as content", () => {
			const wrapper = shallow(
				<Button>
					<span>1</span>
					<span>2</span>
				</Button>
			);
			expect(wrapper.find("button span").length).toBe(2);
		});
	});

	describe("button types", () => {
		it("should default to type button when no buttonType prop", () => {
			const wrapper = shallow(<Button>Test contents</Button>);
			expect(wrapper.find("button").prop("type")).toEqual("button");
		});

		it("should pass buttonType prop into type attribute on rendered button", () => {
			const wrapper = shallow(
				<Button buttonType="submit">Test contents</Button>
			);
			expect(wrapper.find("button").prop("type")).toEqual("submit");
		});
	});

	describe("variants", () => {
		it("should just use btn class for primary variant", () => {
			const wrapper = shallow(<Button variant="primary">Primary</Button>);
			expect(wrapper.find("button").prop("className")).toEqual("btn");
		});

		it("should append cta modifier class for cta variant", () => {
			const wrapper = shallow(<Button variant="cta">CTA</Button>);
			expect(wrapper.find("button").prop("className")).toEqual("btn btn--cta");
		});

		it("should append secondary modifier class for secondary variant", () => {
			const wrapper = shallow(<Button variant="secondary">Secondary</Button>);
			expect(wrapper.find("button").prop("className")).toEqual(
				"btn btn--secondary"
			);
		});

		it("should append inverse modifier class for inverse variant", () => {
			const wrapper = shallow(<Button variant="inverse">Inverse</Button>);
			expect(wrapper.find("button").prop("className")).toEqual(
				"btn btn--inverse"
			);
		});

		it("throws error from unsupported variant", () => {
			const original = console.error;
			console.error = jest.fn();
			expect(() => {
				shallow(<Button variant="invalid">Test</Button>);
			}).toThrow(
				"Expected variant to be one of 'cta', 'primary', 'secondary', 'inverse' but found 'invalid'"
			);
			console.error = original;
		});
	});

	describe("anchors", () => {
		it("should render an anchor when to prop is passed", () => {
			const wrapper = shallow(<Button to="/test">Test</Button>);
			expect(wrapper.find("a")).toBeTruthy();
		});

		it("should render an href attribute with value from to prop", () => {
			const wrapper = shallow(
				<Button type="anchor" to="/test">
					Test
				</Button>
			);
			expect(wrapper.find("a").prop("href")).toEqual("/test");
		});

		it("should use tag prop to render custom link tag", () => {
			const CustomFakeLinkTagType = () => null;

			const wrapper = shallow(
				<Button to="/" elementType={CustomFakeLinkTagType}>
					Home
				</Button>
			);
			expect(wrapper.find(CustomFakeLinkTagType).props()).toEqual({
				to: "/",
				className: "btn",
				children: "Home"
			});
		});
	});

	describe("props", () => {
		it("should pass props as attributes on rendered element", () => {
			const wrapper = shallow(
				<Button type="submit" disabled="disabled" variant="cta">
					txt
				</Button>
			);
			expect(wrapper.find("button").props()).toEqual({
				children: "txt",
				className: "btn btn--cta",
				type: "submit",
				disabled: "disabled"
			});
		});

		it("should append given className prop to rendered className attribute", () => {
			const wrapper = shallow(
				<Button className="mt--0" to="/test">
					txt
				</Button>
			);
			expect(wrapper.find("a").props()).toEqual({
				children: "txt",
				className: "btn mt--0",
				href: "/test"
			});
		});

		it("should call onClick handler", () => {
			const clickHandler = jest.fn();
			let wrapper = shallow(<Button onClick={clickHandler}>Test</Button>);
			wrapper.find("button").simulate("click");
			expect(clickHandler).toHaveBeenCalled();
		});
	});

	describe("should render the appropriate link method for the supplied elementType and method", () => {
		const wrapper = mount(
			<MemoryRouter>
				<Button method="pigeon" to="/one" className="one">
					One
				</Button>
				<Button elementType="a" to="/two" className="two">
					Two
				</Button>
				<Button elementType={Link} to="/three" className="three">
					Three
				</Button>
			</MemoryRouter>
		);
		it("should use any supplied method", () => {
			expect(wrapper.find("a.one").props()["pigeon"]).toEqual("/one");
		});
		it("should use href is elementType is anchor", () => {
			expect(wrapper.find("a.two").props()["href"]).toEqual("/two");
		});
		it("should not use href if elementType is custom", () => {
			expect(wrapper.find(Link).props().to).toEqual("/three");
		});
	});
});
