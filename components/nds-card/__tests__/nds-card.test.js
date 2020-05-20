import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Card } from "../src/Card";
import { Link, MemoryRouter } from "react-router-dom";

const headingProps = {
	headingText: "Card heading text",
	headingElementType: "h1",
	link: {
		destination: "/about",
		elementType: "a"
	}
};
const metadataProps = [
	{
		value: "john.smith@email.com",
		label: "Email address"
	},
	{
		value: "sarah.smith@email.com",
		label: "Email address"
	}
];

const props = {
	...headingProps,
	metadata: metadataProps
};

describe("Card", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Card {...props}>Body</Card>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with some default attributes", () => {
		const wrapper = shallow(
			<Card
				{...props}
				image={{
					src: "http://placehold.it/200x200",
					alt: "Some engaging alt text"
				}}
			>
				<p>Some summary text</p>
			</Card>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should pass extra props to the containing element", () => {
		const localProps = Object.assign({}, props, {
			"data-tracker": "my-tracker"
		});
		const wrapper = shallow(<Card {...localProps} />);
		expect(wrapper.props()["data-tracker"]).toEqual("my-tracker");
	});

	it("should create a card with the containing element type as supplied", () => {
		const wrapper = shallow(<Card headingText="My Heading" elementType="li" />);
		expect(wrapper.find("li").length).toEqual(1);
	});

	it("should render each metadata item with a value", () => {
		const wrapper = shallow(<Card {...props} />);
		expect(wrapper.find(".card__metadatum")).toHaveLength(2);
	});

	it("should not render an a metadata item without a value", () => {
		const localMetadataProps = [...metadataProps];
		localMetadataProps[0].value = "";
		const wrapper = shallow(
			<Card {...headingProps} metadata={localMetadataProps} />
		);
		expect(wrapper.find(".card__metadatum")).toHaveLength(1);
	});

	it("should render an href attribute if the elementType is an anchor", () => {
		const wrapper = mount(<Card {...headingProps} />);
		const anchor = wrapper.find("a");
		expect(anchor.props()["href"]).toEqual("/about");
	});

	it("should render a 'to' attribute if the elementType is anything other than an anchor", () => {
		const localHeadingProps = Object.assign({}, headingProps);
		localHeadingProps.link.elementType = Link;
		const wrapper = mount(
			<MemoryRouter>
				<Card {...localHeadingProps} />
			</MemoryRouter>
		);
		const anchor = wrapper.find(Link);
		expect(anchor.props()["to"]).toEqual("/about");
	});
});
