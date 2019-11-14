"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { FormGroup } from "./../src/FormGroup";

const props = {
	legend: "This is the legend text",
	hint: "This is the hint text",
	groupError: "This is the error text",
	inline: false,
	name: "group-name"
};

describe("FormGroup", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<FormGroup {...props}>
				<span>Render</span>
			</FormGroup>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot when no props are passed", () => {
		const wrapper = shallow(
			<FormGroup>
				<span>Render</span>
			</FormGroup>
		);
		expect(toJson(wrapper, { noKey: true })).toMatchSnapshot();
	});

	it("should match the snapshot when all possible props are passed", () => {
		const wrapper = shallow(
			<FormGroup {...props}>
				<span>Render</span>
			</FormGroup>
		);
		expect(toJson(wrapper, { noKey: true })).toMatchSnapshot();
	});

	it("should pass any additional props down to the cloned child components", () => {
		const localProps = Object.assign({}, props);
		localProps.inline = true;
		const wrapper = shallow(
			<FormGroup {...localProps}>
				<span>Render</span>
			</FormGroup>
		);
		const child = wrapper.find("span");
		expect(child.props()["name"]).toEqual("group-name");
		expect(child.props()["inline"]).toEqual(true);
	});
});
