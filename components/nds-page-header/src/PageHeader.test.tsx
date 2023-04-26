"use strict";
import React from "react";
import { render } from "@testing-library/react";
import { PageHeader, PageHeaderProps } from "./PageHeader";

const props: PageHeaderProps = {
	heading: "Products",
	cta: "See more below",
	preheading: "Systemic lupus erythematosus",
	lead: "A list of all our products on systemic lupus erythematosus"
};

describe("PageHeader", () => {
	it("should match the snapshot with all props supplied", () => {
		const wrapper = render(<PageHeader {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match the snapshot with only required heading prop supplied", () => {
		const wrapper = render(<PageHeader heading="This is our heading" />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should allow a component to be passed as a prop", () => {
		const button = <button onClick={() => false}>Click Me</button>;
		const wrapper = render(
			<PageHeader heading="This is our heading" cta={button} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass additional props to the container", () => {
		const { container } = render(
			<PageHeader heading="This is our heading" data-track={false} />
		);
		expect(container.querySelector("div")?.getAttribute("data-track")).toBe(
			"false"
		);
	});

	it("should merge classes with the container", () => {
		const { container } = render(
			<PageHeader heading="This is our heading" className="mt--0" />
		);
		expect(container.querySelector("div")).toHaveClass("mt--0");
	});
});
