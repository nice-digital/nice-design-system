import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { EnhancedPagination } from "../src/EnhancedPagination";
import { MemoryRouter } from "react-router-dom";

const mapPageNumberToHref = (pageNumber) => `#${pageNumber}`;

const generateProps = (options) => {
	let props = {
		currentPage: options.currentPage || 5,
		totalPages: options.totalPages || 20,
		mapPageNumberToHref: mapPageNumberToHref
	};

	return props;
};

const props = generateProps({});

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
		const pageLinks = wrapper.find("a[className='pagination__link']");
		expect(pageLinks.length).toEqual(8);
	});

	it("should render a button if an elementType is provided", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} elementType="button" />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find("button");
		expect(buttonElement.length).toEqual(8);
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

	it("renders pagination links with the given element type", () => {
		const customElementType = () => {
			return <button>some button</button>;
		};

		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} elementType={customElementType} />
			</MemoryRouter>
		);
		const buttonElement = wrapper.find(".pagination__link").at(0);
		expect(buttonElement.is(customElementType)).toBeTruthy();
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
		expect(wrapper.find(".pagination__item--bookend").length).toEqual(2);
		expect(wrapper.find(".pagination__item").at(2).text()).toBe("…");
		expect(wrapper.find(".pagination__item").at(8).text()).toBe("…");
	});

	it("should render a single ellipsis when there are 7 or more pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 7, currentPage: 1 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__inactive").length).toEqual(2);
		expect(wrapper.find(".pagination__item").at(3).text()).toBe("…");
		wrapper.setProps({
			children: <EnhancedPagination {...localProps} currentPage={5} />
		});
		wrapper.update();
		expect(wrapper.find(".pagination__inactive").length).toEqual(2);
		expect(wrapper.find(".pagination__item").at(2).text()).toBe("…");
	});

	it("should render a single ellipsis when there are more than 8 pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 8 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__inactive").length).toEqual(2);
		expect(wrapper.find(".pagination__item").at(2).text()).toBe("…");
		wrapper.setProps({
			children: <EnhancedPagination {...localProps} currentPage={2} />
		});
		wrapper.update();
		expect(wrapper.find(".pagination__inactive").length).toEqual(2);
		expect(wrapper.find(".pagination__item").at(5).text()).toBe("…");
	});

	it("should render the correct number of items", () => {
		const localProps = generateProps({ totalPages: 20 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__item").length).toEqual(12);
	});

	it("should render a next page element when current page is 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 2 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__link").at(1).text()).toEqual("Next page");
	});

	it("should render a previous page element when current page is > 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 2, totalPages: 2 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(wrapper.find(".pagination__link").at(0).text()).toEqual(
			"Previous page"
		);
	});

	it("should use given function for pagination link href", () => {
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...props} />
			</MemoryRouter>
		);
		const firstPaginationLink = wrapper.find(".pagination__link").at(0);

		expect(firstPaginationLink.prop("href")).toEqual("#4");
	});

	it("should not render a page link when current page = totalPages and totalPages = 1", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 1 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(
			wrapper.findWhere((node) => node.hasClass("pagination__inactive"))
		).toHaveLength(1);
		expect(
			wrapper.findWhere((node) => node.hasClass("pagination__link"))
		).toHaveLength(0);
	});

	// no next link
	it("should not render a next page element when current page = totalPages", () => {
		const localProps = generateProps({ currentPage: 100, totalPages: 100 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(
			wrapper.findWhere((node) => node.text() === "Next page")
		).toHaveLength(0);
	});
	// no previous link
	it("should not render a previous page element when current page is 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 2 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);
		expect(
			wrapper.findWhere((node) => node.text() === "Previous page")
		).toHaveLength(0);
	});
	// less than 7 totalPages

	it("should render a range of pages when total pages < 7 and current page is early in range", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 6 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);

		// starting at 2 to skip "current Page of 1"
		for (let i = 2; i < 7; i++) {
			// const element = array[i];
			expect(
				wrapper
					.findWhere(
						(node) => node.text() == i.toString() && node.type() == "a"
					)
					.prop("href")
			).toEqual(`#${i}`);
		}
	});

	it("should render a range of pages when total pages > 7", () => {
		const localProps = generateProps({ currentPage: 50, totalPages: 100 });
		const wrapper = mount(
			<MemoryRouter>
				<EnhancedPagination {...localProps} />
			</MemoryRouter>
		);

		const paginationItems = wrapper.find(".pagination__item");
		expect(paginationItems.at(3).text()).toEqual("48");
		expect(paginationItems.at(7).text()).toEqual("52");
	});
});
