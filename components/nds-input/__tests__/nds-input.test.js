"use strict";

import React from "react";
import { shallow, mount } from "enzyme";

import { Input } from "../src/Input";

const props = {
	name: "name",
	label: "Label"
};

const extraProps = {
	error: true,
	errorMessage: "Error",
	hint: "Hint"
};

describe("@nice-digital/nds-input", () => {
	it("should render without crashing", () => {
		shallow(<Input {...props} />);
	});

	it("should render a input tag", () => {
		const wrapper = shallow(<Input {...props} />);
		expect(wrapper.find("input")).toBeTruthy();
	});

	it("should match snapshot", () => {
		const wrapper = shallow(<Input {...props} {...extraProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass down a ref to the input", () => {
		const myRefFunction = jest.fn(node => node.nodeName);
		mount(<Input {...props} inputRef={myRefFunction} />);
		expect(myRefFunction).toReturnWith("INPUT");
	});

	it("should pass down additional props to the input", () => {
		const wrapper = mount(<Input {...props} data-track={false} />);
		expect(wrapper.find("input").props()["data-track"]).toEqual(false);
	});
});
