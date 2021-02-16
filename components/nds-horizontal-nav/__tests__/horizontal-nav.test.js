import React from "react";
import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";

import { HorizontalNav } from "../src/HorizontalNav";

describe("HorizontalNav", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper).toHaveLength(1);
	});
});
