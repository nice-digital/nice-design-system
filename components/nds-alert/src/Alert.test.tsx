import React from "react";
import { render } from "@testing-library/react";

import { Alert } from "../src/Alert";

const content = (
	<>
		<h1>Alert Title</h1>
		<p>Alert body content</p>
	</>
);

describe("Alert", () => {
	it("should match snapshot for default alert if type not supplied", () => {
		const wrapper = render(<Alert>{content}</Alert>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot for a supplied type", () => {
		const wrapper = render(<Alert type="success">{content}</Alert>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should contain 'polite' aria-live attribute if nonIntrusive alert", () => {
		const { container } = render(<Alert nonIntrusive>{content}</Alert>);
		expect(container.querySelector(".alert")?.getAttribute("aria-live")).toBe(
			"polite"
		);
	});

	it("should cascade any additional attributes to the container", () => {
		const { container } = render(<Alert data-hidden={false}>{content}</Alert>);
		expect(container.querySelector(".alert")?.getAttribute("data-hidden")).toBe(
			"false"
		);
	});
});
