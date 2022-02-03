"use strict";

import React from "react";
import { shallow } from "enzyme";
import { ColumnList } from "../ColumnList";

const ListItems = () => (
	<>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</>
);

describe("ColumnList", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<ColumnList>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper).toHaveLength(1);
	});
	it("should add CSS module class name to parent list for standard (boxed) variant", () => {
		const wrapper = shallow(
			<ColumnList>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.hasClass("column-list--boxed")).toEqual(true);
	});
	it("should add CSS module class name to parent list for the plain variant", () => {
		const wrapper = shallow(
			<ColumnList plain>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.hasClass("column-list--plain")).toEqual(true);
	});
	it("should add CSS module class name to parent list for the 2 column variant", () => {
		const wrapper = shallow(
			<ColumnList columns={2}>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.hasClass("column-list--two-columns")).toEqual(true);
	});
	it("should add no CSS module class name to parent list for the 3 column variant", () => {
		const wrapper = shallow(
			<ColumnList columns={3}>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.hasClass("column-list--two-columns")).toEqual(false);
	});
	it("should append className prop to rendered class attribute", () => {
		const wrapper = shallow(
			<ColumnList className="test">
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.hasClass("test")).toEqual(true);
	});
	it("should render additional props as attributes", () => {
		const wrapper = shallow(
			<ColumnList aria-label="hello">
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.prop("aria-label")).toEqual("hello");
	});
});
