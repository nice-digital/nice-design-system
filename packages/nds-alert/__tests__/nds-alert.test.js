import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Alert } from "../src/Alert";

const content = (
	<>
		<h1>Alert Title</h1>
		<p>Alert body content</p>
	</>
);

describe("Alert", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Alert>Some panel content</Alert>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot for default alert if type not supplied", () => {
		const wrapper = shallow(<Alert>{content}</Alert>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot for a supplied type", () => {
		const wrapper = shallow(<Alert type="success">{content}</Alert>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should cascade any additional attributes to the container", () => {
		const wrapper = shallow(<Alert data-hidden={false}>{content}</Alert>);
		expect(wrapper.props()["data-hidden"]).toEqual(false);
	});
});
