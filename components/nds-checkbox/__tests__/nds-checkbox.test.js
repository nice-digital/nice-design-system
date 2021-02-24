import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Checkbox } from "./../src/Checkbox";

const props = {
	name: "contact-preference",
	label: "Email",
	value: "email"
};

describe("Checkbox", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<Checkbox {...props} />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with some default attributes", () => {
		const wrapper = shallow(<Checkbox {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot with hint text supplied", () => {
		const wrapper = shallow(
			<Checkbox {...props} hint="This is a hint to appear." />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should not render a checkbox control if it doesn't have a value", () => {
		const localProps = Object.assign({}, props);
		localProps.value = "";
		const wrapper = shallow(<Checkbox {...localProps} />);
		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("should prevent actions if the button is disabled", () => {
		const localProps = Object.assign({}, props);
		localProps.disabled = true;
		const wrapper = shallow(<Checkbox {...localProps} />);
		const input = wrapper.find("input[disabled]");
		expect(input.length).toEqual(1);
	});

	it("should add an error class to the parent if the error prop is true", () => {
		const localProps = Object.assign({}, props);
		localProps.error = true;
		const wrapper = shallow(<Checkbox {...localProps} />);
		const parent = wrapper.find("div.checkbox--error");
		expect(parent.length).toEqual(1);
	});

	it("should add dispaly error text above the control if an error string is supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.error = "Error message here.";
		const wrapper = shallow(<Checkbox {...localProps} />);
		const parent = wrapper.find("p.checkbox__error-message");
		expect(parent.text()).toEqual("Error message here.");
	});

	it("should pass through any additional attributes supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.defaultChecked = true;
		localProps["data-something"] = "test";
		const wrapper = mount(<Checkbox {...localProps} />);
		const checked = wrapper.find("input[defaultChecked]");
		expect(checked.length).toEqual(1);
		expect(checked.props()["data-something"]).toEqual("test");
	});
});
