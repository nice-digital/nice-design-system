import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { StackedNav, StackedNavLink } from "../src/StackedNav";

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
		linkTag: "a",
		hint: "This is a piece of hint text"
	},
	{
		label: "Link Three",
		destination: "#",
		linkTag: "a"
	},
	{
		label: "Link Four",
		destination: "#",
		linkTag: "a"
	},
	{
		destination: "#",
		linkTag: "a"
	}
];

describe("StackedNav", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<StackedNav {...heading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with supplied props", () => {
		const wrapper = shallow(
			<StackedNav {...heading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should not render a ul if no links are supplied", () => {
		const wrapper = shallow(<StackedNav {...heading} />);
		expect(wrapper.find("ul")).toHaveLength(0);
	});

	it("should render a custom tag when passed to the header", () => {
		const localHeading = Object.assign({}, heading, {
			labelTag: "h6"
		});
		const wrapper = mount(<StackedNav {...localHeading} />);
		expect(wrapper.find("h6")).toHaveLength(1);
	});

	it("should not render a root tag unless the label is present", () => {
		const wrapper = mount(
			<StackedNav>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.find(".stacked-nav__root")).toHaveLength(0);
	});

	it("should not render a link where a label isn't present", () => {
		const wrapper = mount(
			<StackedNav {...heading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.find("li")).toHaveLength(4);
	});

	it("should render a label as a priority over a child string", () => {
		const wrapper = mount(
			<StackedNav {...heading}>
				<StackedNavLink label="One">Two</StackedNavLink>
				<StackedNavLink>Two</StackedNavLink>
			</StackedNav>
		);
		expect(
			wrapper
				.find("li")
				.first()
				.text()
		).toEqual("One");
		expect(
			wrapper
				.find("li")
				.last()
				.text()
		).toEqual("Two");
	});
});
