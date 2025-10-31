import React from "react";
import { render } from "@testing-library/react";

import CheckboxGroup, { CheckboxGroupProps } from "./../src/Checkbox";
const props: CheckboxGroupProps = {
	name: "test",
	value: "test",
	label: "Test Checkbox",
	legendIsHeading: true,
	legend: "Select an option from the following options",
	options: [
		{ label: "example checkbox1", value: "test1", hint: "test hint1" },
		{ label: "example checkbox2", value: "test2", hint: "test hint2" },
		{ label: "example checkbox3", value: "test3", hint: "test hint3" }
	]
};
describe("Checkbox", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<CheckboxGroup {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with hint text supplied", () => {
		const wrapper = render(
			<CheckboxGroup {...props} hint="This is a hint to appear." />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should not render a checkbox control if it doesn't have a value", () => {
		const localProps = Object.assign({}, props);
		localProps.options = [];
		const wrapper = render(<CheckboxGroup {...localProps} />);
		expect(wrapper.queryAllByRole("checkbox")).toHaveLength(0);
	});

	it("should prevent actions if the button is disabled", () => {
		const localProps = Object.assign({}, props);
		localProps.disabled = true;
		const wrapper = render(<CheckboxGroup {...localProps} />);
		const input: HTMLInputElement = wrapper.getByRole(
			"checkbox"
		) as HTMLInputElement;
		expect(input.disabled).toBe(true);
	});

	it("should add an error class to the parent if the error prop is true", () => {
		const localProps = Object.assign({}, props);
		localProps.error = true;
		const { container } = render(<CheckboxGroup {...localProps} />);
		const parent = container.querySelector("div.checkbox--error");
		expect(parent).toBeInTheDocument();
	});

	it("should add display error text above the control if an error string is supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.error = "Error message here.";
		const { container } = render(<CheckboxGroup {...localProps} />);
		const parent = container.querySelector("p.checkbox__error-message");
		expect(parent?.textContent).toBe("Error message here.");
	});

	it("should pass through any additional attributes supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.defaultChecked = true;
		localProps["data-something"] = "test";
		const wrapper = render(<CheckboxGroup {...localProps} />);
		const checked: HTMLInputElement = wrapper.getByRole(
			"checkbox"
		) as HTMLInputElement;
		expect(checked.checked).toBe(true);
		expect(checked.getAttribute("data-something")).toBe("test");
	});
});
