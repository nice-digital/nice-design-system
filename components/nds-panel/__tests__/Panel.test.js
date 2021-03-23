import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Panel } from "../src/Panel";

describe("Panel", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Panel>Some panel content</Panel>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot for default panel", () => {
		const wrapper = shallow(<Panel>Some panel content</Panel>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should use correct CSS class modifier for impact panel", () => {
		const wrapper = shallow(<Panel variant="impact">Some panel content</Panel>);
		expect(wrapper.props()["className"]).toEqual("panel panel--impact");
	});

	it("should use correct CSS class modifier for primary panel", () => {
		const wrapper = shallow(
			<Panel variant="primary">Some panel content</Panel>
		);
		expect(wrapper.props()["className"]).toEqual("panel panel--primary");
	});

	it("should append given className prop to rendered classes", () => {
		const wrapper = shallow(
			<Panel variant="primary" className="mt--0">
				Some panel content
			</Panel>
		);
		expect(wrapper.props()["className"]).toEqual("panel panel--primary mt--0");
	});

	it("should pass arbitrary prop into panel div", () => {
		const wrapper = shallow(
			<Panel data-something="test">Some panel content</Panel>
		);
		expect(wrapper.props()["data-something"]).toEqual("test");
	});
});
