import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { EnhancedPagination } from "../src/EnhancedPagination";
import { Link, MemoryRouter } from "react-router-dom";
import { elementType } from "prop-types";

const aFunction = () => console.log("hello");

const generateProps = options => {
	let pagesActions = [];
	for (let i = 1; i <= options.totalPages; i++) {
		pagesActions.push({
			pageNumber: i,
			destination: `#${i}`,
			onClick: options.clickHandler || aFunction
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

	console.log("THE PAGES ACTIONS ARE ", pagesActions);

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
				<EnhancedPagination {...props} elementType="button" />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("button");
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

	it("render a button with a callable onClick handler", () => {
		const clickHandler = jest.fn();
		const localProps = generateProps({
			clickHandler: clickHandler,
			totalPages: 10
		});

		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} elementType="button" />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("button").at(1);
		expect(buttonElement.props()["onClick"]).toBeTruthy;
		buttonElement.simulate("click");
		expect(clickHandler).toHaveBeenCalled();
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

	it("should render truncation ellipses when there are more than 8 pages and the current page is in the middle of the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 5 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(2);
		expect(
			wrapper
				.find(".pagination__item")
				.at(2)
				.text()
		).toBe("…");
		expect(
			wrapper
				.find(".pagination__item")
				.at(6)
				.text()
		).toBe("…");
	});

	it("should render a single ellipsis when there are more than 8 pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 8 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(1);
		expect(
			wrapper
				.find(".pagination__item")
				.at(2)
				.text()
		).toBe("…");
		wrapper.setProps({
			children: <EnhancedPagination {...localProps} currentPage={2} />
		});
		wrapper.update();
		expect(wrapper.find(".pagination__item--spacer").length).toEqual(1);
		expect(
			wrapper
				.find(".pagination__item")
				.at(5)
				.text()
		).toBe("…");
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

	it("should render a next page element when current page is 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 2 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(
			wrapper
				.find(".pagination__link")
				.at(1)
				.text()
		).toEqual("Next page");
	});

	it("should render a previous page element when current page is > 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 2, totalPages: 2 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(
			wrapper
				.find(".pagination__link")
				.at(0)
				.text()
		).toEqual("Previous page");
	});

	it("should render items whose page number matches their destination", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 5 });
		const randomNumberFrom2to5 = Math.floor(
			Math.random() * (5 - 2 + 1) + 2
		).toString();
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		let dynamicHref = `[href='#${randomNumberFrom2to5}']`;
		let linkElementByHref = wrapper.find(dynamicHref);
		console.log("the random number ----> ", randomNumberFrom2to5);
		console.log("the wrapper ----> ", wrapper.debug());
		console.log("the dynamic href is ", dynamicHref);
		console.log("the link element by href text is ", linkElementByHref.text());
		expect(linkElementByHref.text()).toEqual(randomNumberFrom2to5);
	});
});

// Renders the correct number of pages DONE
// Renders Next Page element when appropriate DONE
// Renders Previous Page element when appropriate DONE
// Renders starting ellipsis when appropriate DONE
// Renders ending ellipsis when appropriate DONE
// Renders current page indicator element DONE
// Renders a button when a custom element is provided DONE
// Renders a button with an onClick that can be called by clicking DONE
// Renders a range of pages when >5 pages
// matches page number to the correct destination
