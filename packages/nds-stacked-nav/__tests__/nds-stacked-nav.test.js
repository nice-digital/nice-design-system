import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { StackedNav } from "../src/StackedNav";

const heading = {
	label: "Stacked Nav Heading",
	labelTag: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		isCurrent: true,
		linkTag: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		isCurrent: false,
		linkTag: "a",
		hint: "This is a piece of hint text, what do you reckon?"
	},
	{
		label: "Link Three",
		destination: "#",
		isCurrent: false,
		linkTag: "a"
	}
];

describe("StackedNav", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<StackedNav />);
		expect(wrapper.length).toEqual(1);
	});

	it("should match snapshot with supplied props", () => {
		const wrapper = shallow(<StackedNav heading={heading} links={links} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should not render a heading if none is supplied", () => {
		const wrapper = shallow(<StackedNav links={links} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should not render a links block container if one isn't supplied", () => {
		const wrapper = shallow(<StackedNav heading={heading} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render an ARIA current attribute if the isCurrent prop is supplied", () => {
		const wrapper = mount(<StackedNav heading={heading} links={links} />);
		const firstLink = wrapper
			.find("li")
			.first()
			.find("a");
		expect(firstLink.props()["aria-current"]).toEqual("page");
	});
});
