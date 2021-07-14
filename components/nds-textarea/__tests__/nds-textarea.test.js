"use strict";

import React from "react";
import { shallow, mount } from "enzyme";

import { Textarea } from "../src/Textarea";

const props = {
	name: "name",
	label: "Label"
};

const extraProps = {
	error: true,
	errorMessage: "Error",
	hint: "Hint"
};

describe("@nice-digital/nds-textarea", () => {
	it("should render without crashing", () => {
		shallow(<Textarea {...props} />);
	});

	it("should render a textarea tag", () => {
		const wrapper = shallow(<Textarea {...props} />);
		expect(wrapper.find("textarea").length).toEqual(1);
	});

	it("should match snapshot", () => {
		const wrapper = shallow(<Textarea {...props} {...extraProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass down a ref to the textarea", () => {
		const myRefFunction = jest.fn(node => node.nodeName);
		mount(<Textarea {...props} textareaRef={myRefFunction} />);
		expect(myRefFunction).toReturnWith("TEXTAREA");
	});

	it("should cascade additional props to the container", () => {
		const wrapper = shallow(<Textarea {...props} data-track={false} />);
		expect(wrapper.find("textarea").props()["data-track"]).toEqual(false);
	});
});
