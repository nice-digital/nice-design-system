import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Breadcrumb } from "../src/Breadcrumb";

describe("Breadcrumb", () => {
	it("should match snapshot for no location", () => {
		const wrapper = shallow(<Breadcrumb>Home</Breadcrumb>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot for anchor", () => {
		const wrapper = shallow(<Breadcrumb to="/">Home</Breadcrumb>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should use tag prop to render custom link tag", () => {
		const CustomLink = () => <span />;

		const wrapper = shallow(
			<Breadcrumb to="/" tag={CustomLink}>
				Home
			</Breadcrumb>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass on props to rendered anchor", () => {
		const wrapper = shallow(
			<Breadcrumb to="/" aria-current={true}>
				Home
			</Breadcrumb>
		);
		expect(wrapper.find("a").props()).toEqual({
			href: "/",
			children: "Home",
			["aria-current"]: true
		});
	});
});
