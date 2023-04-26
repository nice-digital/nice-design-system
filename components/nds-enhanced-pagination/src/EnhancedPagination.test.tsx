import React from "react";
import { render } from "@testing-library/react";

import {
	EnhancedPagination,
	EnhancedPaginationProps
} from "./EnhancedPagination";

const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

const generateProps = (
	options: EnhancedPaginationProps | {}
): EnhancedPaginationProps => {
	const paginationOptions = options as EnhancedPaginationProps;

	return {
		currentPage: paginationOptions.currentPage || 5,
		totalPages: paginationOptions.totalPages || 20,
		mapPageNumberToHref: mapPageNumberToHref
	};
};

const props = generateProps({});

describe("Enhanced Pagination", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<EnhancedPagination {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should default to an anchor if no elementType is provided", () => {
		const { container } = render(<EnhancedPagination {...props} />);
		const pageLinks = container.querySelector(".pagination__link");
		expect(pageLinks?.tagName).toBe("A");
	});

	it("should render a button if an elementType is provided", () => {
		const wrapper = render(
			<EnhancedPagination {...props} elementType="button" />
		);
		const buttonElements = wrapper.getAllByRole("button");
		expect(buttonElements.length).toBe(8);
	});

	it("renders pagination links with the given element type", () => {
		const buttonText = "some button";
		const customElementType = () => {
			return <button>{buttonText}</button>;
		};

		const wrapper = render(
			<EnhancedPagination {...props} elementType={customElementType} />
		);
		const buttonElement = wrapper.getAllByRole("button")[0];
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement.textContent).toBe(buttonText);
	});

	it("should render a single current page indicator element", () => {
		const { container } = render(<EnhancedPagination {...props} />);
		const currentPageElement = container.querySelector(
			".pagination__item--current"
		);
		expect(currentPageElement).toBeInTheDocument();
	});

	it("should render truncation ellipses when there are more than 8 pages and the current page is in the middle of the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 5 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(
			container.querySelectorAll(".pagination__item--bookend").length
		).toBe(2);
		expect(container.querySelectorAll(".pagination__item")[2].textContent).toBe(
			"…"
		);
		expect(container.querySelectorAll(".pagination__item")[8].textContent).toBe(
			"…"
		);
	});

	it("should render a single ellipsis when there are 7 or more pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 7, currentPage: 1 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__inactive").length).toBe(2);
		expect(container.querySelectorAll(".pagination__item")[3].textContent).toBe(
			"…"
		);

		const wrapper = render(
			<EnhancedPagination {...localProps} currentPage={5} />
		);
		expect(
			wrapper.container.querySelectorAll(".pagination__inactive").length
		).toEqual(2);
		expect(
			wrapper.container.querySelectorAll(".pagination__item")[2].textContent
		).toBe("…");
	});

	it("should render a single ellipsis when there are more than 8 pages and the current page is early or late in the range", () => {
		const localProps = generateProps({ totalPages: 10, currentPage: 8 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__inactive").length).toBe(2);
		expect(container.querySelectorAll(".pagination__item")[2].textContent).toBe(
			"…"
		);

		const wrapper = render(
			<EnhancedPagination {...localProps} currentPage={2} />
		);
		expect(
			wrapper.container.querySelectorAll(".pagination__inactive").length
		).toBe(2);
		expect(
			wrapper.container.querySelectorAll(".pagination__item")[5].textContent
		).toBe("…");
	});

	it("should render the correct number of items", () => {
		const localProps = generateProps({ totalPages: 20 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__item").length).toEqual(12);
	});

	it("should render a next page element when current page is 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 2 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__link")[1].textContent).toBe(
			"Next page"
		);
	});

	it("should render a previous page element when current page is > 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 2, totalPages: 2 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__link")[0].textContent).toBe(
			"Previous page"
		);
	});

	it("should use given function for pagination link href", () => {
		const { container } = render(<EnhancedPagination {...props} />);
		const firstPaginationLink =
			container.querySelectorAll(".pagination__link")[0];

		expect(firstPaginationLink.getAttribute("href")).toBe("#4");
	});

	it("should not render a page link when current page = totalPages and totalPages = 1", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 1 });
		const { container } = render(<EnhancedPagination {...localProps} />);
		expect(container.querySelectorAll(".pagination__inactive").length).toBe(1);
		expect(container.querySelectorAll(".pagination__link").length).toBe(0);
	});

	it("should not render a next page element when current page = totalPages", () => {
		const localProps = generateProps({ currentPage: 100, totalPages: 100 });
		const wrapper = render(<EnhancedPagination {...localProps} />);
		expect(wrapper.queryByText("Next page")).toBe(null);
	});

	it("should not render a previous page element when current page is 1 and total pages > 1 ", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 2 });
		const wrapper = render(<EnhancedPagination {...localProps} />);
		expect(wrapper.queryByText("Previous page")).toBe(null);
	});

	it("should render a range of pages when total pages < 7 and current page is early in range", () => {
		const localProps = generateProps({ currentPage: 1, totalPages: 6 });
		const wrapper = render(<EnhancedPagination {...localProps} />);

		// starting at 2 to skip "current Page of 1"
		for (let i = 2; i < 7; i++) {
			const link = wrapper.getByRole("link", {
				name: `Go to page ${i.toString()}`
			});
			expect(link.getAttribute("href")).toBe(`#${i}`);
		}
	});

	it("should render a range of pages when total pages > 7", () => {
		const localProps = generateProps({ currentPage: 50, totalPages: 100 });
		const { container } = render(<EnhancedPagination {...localProps} />);

		const paginationItems = container.querySelectorAll(".pagination__item");
		expect(paginationItems[3].textContent).toBe("48");
		expect(paginationItems[7].textContent).toBe("52");
	});
});
