import React from "react";
import { Link, MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { StackedNav, StackedNavLink } from "../src/StackedNav";

const heading = {
	label: "Stacked Nav Heading",
	elementType: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		isCurrent: true,
		elementType: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		elementType: "a",
		hint: "This is a piece of hint text"
	},
	{
		label: "Link Three",
		destination: "#",
		elementType: "a"
	},
	{
		label: "Link Four",
		destination: "#",
		elementType: "a"
	},
	{
		destination: "#",
		elementType: "a"
	}
];

const subNav = (
	<>
		<StackedNavLink>Nested nav one</StackedNavLink>
		<StackedNavLink>Nested nav two</StackedNavLink>
		<StackedNavLink>Nested nav three</StackedNavLink>
	</>
);

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

	it("should match snapshot with supplied nested links", () => {
		const wrapper = mount(
			<StackedNav {...heading}>
				<StackedNavLink {...links[0]} nested={subNav} />
			</StackedNav>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render a custom tag when passed to the header", () => {
		const localHeading = Object.assign({}, heading, {
			elementType: "h6"
		});
		const wrapper = mount(
			<StackedNav {...localHeading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.find("h6")).toHaveLength(1);
	});

	it("should render a custom method in the heading if one is supplied", () => {
		const localHeading = Object.assign({}, heading, {
			elementType: "h6",
			link: {
				method: "pigeon",
				label: "Pigeon",
				destination: "/pigeon"
			}
		});
		const wrapper = mount(
			<StackedNav {...localHeading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.find("h6 a").props()["pigeon"]).toEqual("/pigeon");
	});

	it("should render an appropriate navigation attribute depending on the options supplied", () => {
		const links = [
			{
				label: "One",
				destination: "one"
			},
			{
				label: "Two",
				destination: "two",
				method: "pigeon"
			},
			{
				label: "Three",
				destination: "three",
				elementType: Link
			}
		];

		const wrapper = mount(
			<MemoryRouter>
				<StackedNav>
					{links.map((item, index) => (
						<StackedNavLink key={index} {...item} />
					))}
				</StackedNav>
			</MemoryRouter>
		);

		expect(
			wrapper
				.find("a")
				.at(0)
				.props().href
		).toEqual("one");

		expect(
			wrapper
				.find("a")
				.at(1)
				.props().pigeon
		).toEqual("two");

		expect(wrapper.find(Link).props().to).toEqual("three");
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

	it("should pass any additionally supplied props to the parent nav and to the child link", () => {
		const wrapper = mount(
			<StackedNav data-test="true">
				<StackedNavLink label="One" data-another-test="true">
					Two
				</StackedNavLink>
				<StackedNavLink>Two</StackedNavLink>
			</StackedNav>
		);
		expect(wrapper.props()["data-test"]).toEqual("true");
		expect(
			wrapper
				.find("li")
				.first()
				.props()["data-another-test"]
		).toEqual("true");
	});
});
