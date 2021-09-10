import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { EnhancedPagination } from "../src/EnhancedPagination";
import { Link, MemoryRouter } from "react-router-dom";
import { elementType } from "prop-types";

const aFunction = () => console.log("hello");

const generateProps = options => {
	let pagesActions = [];
	for (let i = 0; i < options.totalPages; i++) {
		pagesActions.push({
			pageNumber: i,
			destination: `#${i}`,
			onClick: aFunction
		});
	}

	let props = {
		currentPage: options.currentPage || 32,
		totalPages: options.totalPages || 49,
		previousPageAction: {
			destination: "#previous",
			onClick: aFunction
		},
		nextPageAction: {
			destination: "#next",
			onClick: aFunction
		},
		pagesActions
	};

	return props;
};

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

const props = generateProps({ partialPagesActions });

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
		const previousPageAction = wrapper.find("a[href='#previous']");
		expect(previousPageAction.length).toEqual(1);
	});

	it("should render a button if an elementType is provided", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} elementType="CustomElement" />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("CustomElement");
		expect(buttonElement.length).toEqual(6);
	});

	it("should render a button with an onClick attribute", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} elementType="button" />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("button").first();
		expect(buttonElement.props()["onClick"]).toBeTruthy;
	});

	it("should render a single current page indicator element", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} />
			</MemoryRouter>
		);
		const currentPageElement = wrapper.find(".pagination__item--current");
		expect(currentPageElement.length).toEqual(1);
	});

	it("should render a pair of ellipses when there are more than 8 pages and the current page is in the middle of the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 5 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(2);
	});

	it("should render a single ellipsis when there are more than 8 pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 8 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(1);
		wrapper.setProps({
			children: <EnhancedPagination {...localProps} currentPage={2} />
		});
		wrapper.update();
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(1);
	});

	it("should render the correct number of items", () => {
		const localProps = generateProps({ totalPages: 20 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item").length).toEqual(8);
	});
});

// Renders the correct number of pages
// Renders Next Page element when appropriate
// Renders Previous Page element when appropriate
// Renders starting ellipsis when appropriate
// Renders ending ellipsis when appropriate
// Renders a range of pages when >5 pages
// Renders current page indicator element
// Renders a button when a custom element is provided
// Renders a button with an onClick that can be called by clicking
// matches page number to the correct destination
