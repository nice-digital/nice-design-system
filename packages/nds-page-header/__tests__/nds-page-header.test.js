"use strict";
import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { PageHeader } from "../src/PageHeader";

const props = {
	heading: "Products",
	cta: "See more below",
	preheading: "Systemic lupus erythematosus",
	lead: "A list of all our products on systemic lupus erythematosus"
};

describe("PageHeader", () => {
	it("should mount without crashing", () => {
		const wrapper = shallow(<PageHeader {...props} />);
		expect(wrapper.length).toEqual(1);
	});

	it("should match the snapshot with all props supplied", () => {
		const wrapper = shallow(<PageHeader {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match the snapshot with only required heading prop supplied", () => {
		const wrapper = shallow(<PageHeader heading="This is our heading" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should allow a component to be passed as a prop", () => {
		const button = <button onClick={() => false}>Click Me</button>;
		const wrapper = shallow(
			<PageHeader heading="This is our heading" cta={button} />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
