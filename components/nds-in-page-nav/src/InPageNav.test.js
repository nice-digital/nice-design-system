import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { InPageNav } from "../src/InPageNav";

describe("InPageNav", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<InPageNav />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot", () => {
		const wrapper = mount(<InPageNav />);
		expect(wrapper).toMatchSnapshot();
	});
});
