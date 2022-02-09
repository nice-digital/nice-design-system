"use strict";

import React from "react";
import { shallow } from "enzyme";

import { AZList } from "../AZList";

describe("A-Z List", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<AZList />);
		expect(wrapper).toHaveLength(1);
	});
});
