import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { EnhancedPagination } from "../src/EnhancedPagination";
import { Link, MemoryRouter } from "react-router-dom";
import { elementType } from "prop-types";

const aFunction = () => console.log("hello");

const partialPagesActions = [
	{
		pageNumber: 1,
		destination: "#1",
		onClick: aFunction
	},
	{
		pageNumber: 30,
		destination: "#30",
		onClick: aFunction
	},
	{
		pageNumber: 31,
		destination: "#31",
		onClick: aFunction
	},
	{
		pageNumber: 32,
		destination: "#32",
		onClick: aFunction
	},
	{
		pageNumber: 33,
		destination: "#33",
		onClick: aFunction
	},
	{
		pageNumber: 34,
		destination: "#34",
		onClick: aFunction
	},
	{
		pageNumber: 49,
		destination: "#49",
		onClick: aFunction
	}
];

const props = {
	nextPageAction: {
		destination: "/next"
	},
	previousPageAction: {
		destination: "/previous"
	},
	pagesActions: partialPagesActions
};

describe("Enhanced Pagination", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<EnhancedPagination {...props} />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot with some default attributes", () => {
		const wrapper = shallow(<EnhancedPagination {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should default to an anchor if no elementType is provided", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} />
			</MemoryRouter>
		);
		const previousPageAction = wrapper.find("a[href='/previous']");
		expect(previousPageAction.length).toEqual(1);
	});

	it("should render a button if an elementType is provided", () => {
		const localProps = Object.assign({}, props, {
			elementType: "button"
		});
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("button");
		console.log("props >>>>>>>>>>>>>>>>>> ", localProps);
		expect(buttonElement.length).toEqual(4);
	});
});
