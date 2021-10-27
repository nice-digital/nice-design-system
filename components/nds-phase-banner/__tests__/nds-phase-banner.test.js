import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { PhaseBanner } from "../src/PhaseBanner";

describe("Phase Banner", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<PhaseBanner alpha>Some content</PhaseBanner>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the default snapshot", () => {
		const wrapper = shallow(<PhaseBanner alpha>Some content</PhaseBanner>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should merge additional classes", () => {
		const wrapper = shallow(
			<PhaseBanner alpha className="mt--0s">
				Some content
			</PhaseBanner>
		);
		expect(wrapper.find("p").props()["className"]).toContain("mt--0");
		expect(wrapper.find("p").props()["className"]).toContain("phase-banner");
	});
});
