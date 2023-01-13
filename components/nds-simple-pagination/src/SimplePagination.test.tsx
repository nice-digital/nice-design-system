import React from "react";
import { render } from "@testing-library/react";

import { SimplePagination } from "./SimplePagination";

const Link = () => <a href="#">I am a link</a>;

const props = {
	totalPages: 3,
	currentPage: 1,
	nextPageLink: {
		destination: "/next",
		elementType: Link
	},
	previousPageLink: {
		destination: "#previous"
	}
};

describe("Simple Pagination", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<SimplePagination {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should default to an anchor if no elementType is provided", () => {
		const { container } = render(<SimplePagination {...props} />);
		const previousLink = container.querySelector("a[href='#previous']");
		expect(previousLink).toBeInTheDocument();
	});

	it("should use a custom navigation attribute if supplied", () => {
		const localProps = Object.assign({}, props, {
			previousPageLink: {
				destination: "#previous",
				method: "pigeon"
			}
		});
		const { container } = render(<SimplePagination {...localProps} />);
		const previousLink = container.querySelector("a[pigeon='#previous']");
		expect(previousLink).toBeInTheDocument();
	});

	it("should pass extra props to the container element", () => {
		const localProps = Object.assign({}, props, {
			"data-tracker": "my-tracker"
		});
		const { container } = render(<SimplePagination {...localProps} />);
		const pagination = container.querySelector(".simple-pagination");
		expect(pagination?.getAttribute("data-tracker")).toBe("my-tracker");
	});

	it("should default to 'page 1' only if no props are provided", () => {
		const wrapper = render(<SimplePagination />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should merge any additional classes on to the existing wrapper class", () => {
		const { container } = render(
			<SimplePagination className="testing hello" />
		);
		const pagination = container.querySelector(".simple-pagination");
		expect(pagination).toHaveClass("simple-pagination testing hello");
	});
});
