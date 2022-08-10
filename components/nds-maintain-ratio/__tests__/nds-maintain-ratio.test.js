"use strict";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { MaintainRatio } from "../src/MaintainRatio";

describe("nds-maintain-ratio", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<MaintainRatio>
				<p>Test</p>
			</MaintainRatio>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot with no options", () => {
		const wrapper = shallow(
			<MaintainRatio>
				<p>Test</p>
			</MaintainRatio>
		);
		expect(toJson(wrapper, { noKey: true })).toMatchSnapshot();
	});

	it("should pass down classname and extra props", () => {
		const wrapper = shallow(
			<MaintainRatio className="testing" data-test="yes">
				<p>Test</p>
			</MaintainRatio>
		);
		expect(wrapper.props()["className"]).toContain("testing");
		expect(wrapper.props()["data-test"]).toEqual("yes");
	});

	Object.keys(MaintainRatio.ratios).forEach((ratio) => {
		it(`should apply the class for the ratio: ${ratio}`, () => {
			const wrapper = shallow(
				<MaintainRatio ratio={ratio}>
					<p>Test</p>
				</MaintainRatio>
			);
			expect(wrapper.props()["className"]).toContain(
				`maintain-ratio--${MaintainRatio.ratios[ratio].replace(":", "-")}`
			);
		});
	});
});
