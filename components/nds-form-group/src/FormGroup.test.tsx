import React from "react";
import { render } from "@testing-library/react";
import { FormGroup } from "./FormGroup";

const props = {
	legend: "This is the legend text",
	hint: "This is the hint text",
	groupError: "This is the error text",
	inline: false,
	name: "group-name"
};

describe("FormGroup", () => {
	it("should match the snapshot when no props are passed", () => {
		const wrapper = render(
			<FormGroup>
				<span>Render</span>
			</FormGroup>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match the snapshot when all possible props are passed", () => {
		const wrapper = render(
			<FormGroup {...props}>
				<span>Render</span>
			</FormGroup>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass any additional props down to the cloned child components", () => {
		const localProps = Object.assign({}, props);
		const { container } = render(
			<FormGroup {...localProps}>
				<span>Render</span>
			</FormGroup>
		);
		const child = container.querySelector("span");
		expect(child?.getAttribute("name")).toBe("group-name");
	});
});
