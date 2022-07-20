"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { AZList } from "../AZList";

describe("A-Z List", () => {
	const AZListItems = () => (
		<>
			<li>Item one</li>
			<li>Item two</li>
		</>
	);
	const mockAlphabet = () => (
		<ol>
			<li>
				<a href="#a">A</a>
			</li>
			<li>
				<a href="#b">B</a>
			</li>
		</ol>
	);

	it("should render without crashing", () => {
		const wrapper = shallow(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should render an ordered list component", () => {
		const wrapper = shallow(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.children("ol").length).toEqual(1);
	});

	it("should render an ordered list with the expected class name", () => {
		const wrapper = shallow(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.children("ol").hasClass("a-z-list")).toEqual(true);
	});

	it("should append className prop to rendered class attribute for the list", () => {
		const wrapper = shallow(
			<AZList className="test" alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.children("ol").hasClass("test")).toEqual(true);
	});

	it("should render additional props as attributes for the list", () => {
		const wrapper = shallow(
			<AZList aria-label="test" alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.children("ol").prop("aria-label")).toEqual("test");
	});

	it("should match snapshot with default attributes", () => {
		const wrapper = mount(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
		wrapper.unmount();
	});

	it("should match snapshot with custom attributes", () => {
		const wrapper = mount(
			<AZList
				className="test-class"
				aria-label="test-label"
				alphabet={mockAlphabet}
			>
				<AZListItems />
			</AZList>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
		wrapper.unmount();
	});

	it("should render an alphabet component that has been passed in", () => {
		const wrapper = mount(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.find(mockAlphabet)).toHaveLength(1);
		wrapper.unmount();
	});

	it("should render an alphabet component with a custom class", () => {
		const customAlphabet = () => <div className="test-class">Alphabet</div>;
		const wrapper = mount(
			<AZList alphabet={customAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(
			wrapper.find(customAlphabet).childAt(0).hasClass("test-class")
		).toEqual(true);
		wrapper.unmount();
	});
});
