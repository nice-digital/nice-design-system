import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Breadcrumbs, Breadcrumb } from "../src/Breadcrumbs";

describe("Breadcrumbs", () => {
	// We need to change environment to test minification of JsonLd, but we want
	// to reset after the test have finished
	const env = Object.assign({}, process.env);
	afterAll(() => {
		process.env = env;
	});

	it("should render without crashing", () => {
		const wrapper = shallow(
			<Breadcrumbs>
				<Breadcrumb>Test</Breadcrumb>
			</Breadcrumbs>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot for single level", () => {
		const wrapper = shallow(
			<Breadcrumbs>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot for multiple levels", () => {
		const wrapper = shallow(
			<Breadcrumbs>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb to="/topics/">Topics</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should minify json ld in production", () => {
		process.env.NODE_ENV = "production";
		const wrapper = shallow(
			<Breadcrumbs>
				<Breadcrumb to="/">Home</Breadcrumb>
				<Breadcrumb>Page</Breadcrumb>
			</Breadcrumbs>
		);
		expect(toJson(wrapper.find("script"))).toMatchSnapshot();
	});
});
