import React from "react";
import { render } from "@testing-library/react";

import { Checkbox, CheckboxProps } from "./../src/Checkbox";

const props: CheckboxProps = {
	name: "contact-preference",
	label: "Email",
	value: "email",
	disabled: false,
	error: false
};

describe("Checkbox", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<Checkbox {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with hint text supplied", () => {
		const wrapper = render(
			<Checkbox {...props} hint="This is a hint to appear." />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should not render a checkbox control if it doesn't have a value", () => {
		const localProps = Object.assign({}, props);
		localProps.value = "";
		const wrapper = render(<Checkbox {...localProps} />);
		expect(wrapper.queryByRole("checkbox")).toBe(null);
	});

	it("should prevent actions if the button is disabled", () => {
		const localProps = Object.assign({}, props);
		localProps.disabled = true;
		const wrapper = render(<Checkbox {...localProps} />);
		const input: HTMLInputElement = wrapper.getByRole(
			"checkbox"
		) as HTMLInputElement;
		expect(input.disabled).toBe(true);
	});

	it("should add an error class to the parent if the error prop is true", () => {
		const localProps = Object.assign({}, props);
		localProps.error = true;
		const { container } = render(<Checkbox {...localProps} />);
		const parent = container.querySelector("div.checkbox--error");
		expect(parent).toBeInTheDocument();
	});

	it("should add display error text above the control if an error string is supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.error = "Error message here.";
		const { container } = render(<Checkbox {...localProps} />);
		const parent = container.querySelector("p.checkbox__error-message");
		expect(parent?.textContent).toBe("Error message here.");
	});

	it("should pass through any additional attributes supplied", () => {
		const localProps = Object.assign({}, props);
		localProps["data-something"] = "test";
		const wrapper = render(<Checkbox {...localProps} />);
		const checked = wrapper.getByRole("checkbox");
		expect(checked.getAttribute("data-something")).toBe("test");
	});
});
