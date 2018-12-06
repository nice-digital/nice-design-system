"use strict";

import React from "react";
import { mount } from "enzyme";

import Button from "../src/Button";

describe("@nice-digital/nds-button", () => {

	let wrapper;

	it("renders without crashing", () => {
		wrapper = mount(<Button>Example</Button>);
	});

	it("should render a button", () => {
		expect(wrapper.find("button")).toBeTruthy();
	});

	it("matches snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
