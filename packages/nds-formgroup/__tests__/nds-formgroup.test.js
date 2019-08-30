"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import { FormGroup } from "./../src/FormGroup";

describe("FormGroup", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<FormGroup />);
		expect(wrapper).toHaveLength(1);
	});
});
