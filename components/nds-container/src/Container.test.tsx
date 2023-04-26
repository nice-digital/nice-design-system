import React from "react";
import { render } from "@testing-library/react";

import { Container } from "./Container";

const Content = () => <p>Test</p>;

describe("Container", () => {
	it("should match snapshot", () => {
		const wrapper = render(
			<Container>
				<Content />
			</Container>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should add additional classNames", () => {
		const { container } = render(
			<Container className="testclass">
				<Content />
			</Container>
		);
		expect(container.querySelector(".container")).toHaveClass("testclass");
	});

	it("should add full width class if bool supplied", () => {
		const { container } = render(
			<Container fullWidth>
				<Content />
			</Container>
		);
		expect(container.querySelector(".container")).toHaveClass(
			"container--full"
		);
	});

	it("should use elementType prop as rendered DOM node type", () => {
		const wrapper = render(
			<Container elementType="main">
				<Content />
			</Container>
		);
		expect(wrapper.getByRole("main")).toHaveClass("container");
	});

	it("should spread other props against the container", () => {
		const { container } = render(
			<Container data-track="trackme">
				<Content />
			</Container>
		);
		expect(
			container.querySelector(".container")?.getAttribute("data-track")
		).toBe("trackme");
	});
});
