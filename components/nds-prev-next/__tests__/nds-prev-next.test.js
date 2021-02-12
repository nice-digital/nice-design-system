import React from "react";
import { shallow } from "enzyme";
import { PrevNext } from "../src/PrevNext";

describe("Previous & Next", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<PrevNext />);
		expect(wrapper).toHaveLength(1);
	});
});
