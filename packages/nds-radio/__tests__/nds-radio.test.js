import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Radio } from "../src/Radio";

const props = {
	label: "Yes, please.",
	value: "yes",
	disabled: false,
	error: false,
	inline: false,
	group: "radio-group"
};

describe("Radio", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Radio {...props} />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with some default attributes", () => {
        const wrapper = shallow(<Radio {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should not render a radio control if it doesn't have a value", () => {
        const localProps = Object.assign({}, props);
        localProps.value = "";
        const wrapper = shallow(<Radio {...localProps} />);
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    it("should prevent actions if the button is disabled", () => {
        const localProps = Object.assign({}, props);
        localProps.disabled = true;
        const wrapper = shallow(<Radio {...localProps} />);
        const input = wrapper.find("input[disabled]");
        expect(input.length).toEqual(1);
    });

    it("should add an error class to the parent if the error prop is true", () => {
        const localProps = Object.assign({}, props);
        localProps.error = true;
        const wrapper = shallow(<Radio {...localProps} />);
        const parent = wrapper.find("div.radio--error");
        expect(parent.length).toEqual(1);
    });

    it("should pass through any additional attributes supplied", () => {
        const localProps = Object.assign({}, props);
        localProps.defaultChecked = true;
        localProps["data-something"] = "test";
        const wrapper = mount(<Radio {...localProps} />);
        const checked = wrapper.find("input[defaultChecked]");
        expect(checked.length).toEqual(1);
        expect(checked.props()["data-something"]).toEqual("test");
    });
});
