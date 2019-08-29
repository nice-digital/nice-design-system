import React from "react";
import { shallow, mount } from "enzyme";

import { Checkbox } from "./../src/Checkbox";

describe("Checkbox", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<Checkbox />);
		expect(wrapper).toHaveLength(1);
	});
});
