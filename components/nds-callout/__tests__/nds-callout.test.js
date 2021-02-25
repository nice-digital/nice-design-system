import React from "react";
import { shallow } from "enzyme";
import { Callout } from "../src/Callout";

describe("Callout", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Callout />);
		expect(wrapper).toHaveLength(1);
	});
});
