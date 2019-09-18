import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { GridItem } from "../src/Grid";

describe("GridItem", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<GridItem cols={6}>Test</GridItem>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot", () => {
		const wrapper = mount(<GridItem cols={6}>Test</GridItem>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should add push columns to data attribute", () => {
		const wrapper = mount(
			<GridItem cols={6} push={2}>
				Test
			</GridItem>
		);
		expect(wrapper.find("div").props()["data-g"]).toEqual("6 push:2");
	});

	it("should add pull columns to data attribute", () => {
		const wrapper = mount(
			<GridItem cols={6} pull={2}>
				Test
			</GridItem>
		);
		expect(wrapper.find("div").props()["data-g"]).toEqual("6 pull:2");
	});

	describe("breakpoints", () => {
		const pushDef = { cols: 4, push: 2, toString: () => "push 2" };
		const pullDef = { cols: 3, pull: 1, toString: () => "pull 1" };

		it.each([
			["xs", 8, "xs:8"],
			["xs", pushDef, "xs:4 xs:push:2"],
			["xs", pullDef, "xs:3 xs:pull:1"],
			["sm", 8, "sm:8"],
			["sm", pushDef, "sm:4 sm:push:2"],
			["sm", pullDef, "sm:3 sm:pull:1"],
			["md", 8, "md:8"],
			["md", pushDef, "md:4 md:push:2"],
			["md", pullDef, "md:3 md:pull:1"],
			["lg", 8, "lg:8"],
			["lg", pushDef, "lg:4 lg:push:2"],
			["lg", pullDef, "lg:3 lg:pull:1"],
			["xl", 8, "xl:8"],
			["xl", pushDef, "xl:4 xl:push:2"],
			["xl", pullDef, "xl:3 xl:pull:1"]
		])(
			"for breakpoint '%s' and grid definition '%s' should set data-g to '%s'",
			(breakpointName, breakpointGridDef, expected) => {
				const cols = 6;
				const breakPointProps = {
					[breakpointName]: breakpointGridDef
				};
				const wrapper = mount(
					<GridItem cols={cols} {...breakPointProps}>
						Test
					</GridItem>
				);
				expect(wrapper.find("div").props()["data-g"]).toEqual(
					cols + " " + expected
				);
			}
		);
	});

	it("should add given additional class names to rendered grid item class names", () => {
		const wrapper = shallow(
			<GridItem cols={6} className="mt--d">
				Test
			</GridItem>
		);
		expect(wrapper.find("[data-g]").props().className).toEqual("mt--d");
	});

	it("should add other props to rendered grid item", () => {
		const wrapper = shallow(
			<GridItem cols={6} aria-label="test">
				Test
			</GridItem>
		);
		expect(wrapper.find("[data-g]").props()["aria-label"]).toEqual("test");
	});

	it("should use elementType prop as rendered DOM node type", () => {
		const wrapper = shallow(
			<GridItem cols={6} elementType="li">
				Test
			</GridItem>
		);
		expect(wrapper.find("[data-g]").type()).toEqual("li");
	});
});
