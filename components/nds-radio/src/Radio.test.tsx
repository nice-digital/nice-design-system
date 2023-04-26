import React from "react";
import { render } from "@testing-library/react";

import { Radio, RadioProps } from "./Radio";

const props: RadioProps = {
	label: "Yes, please.",
	value: "yes",
	disabled: false,
	error: false,
	inline: false,
	name: "radio-group"
};

describe("Radio", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<Radio {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with hint text supplied", () => {
		const wrapper = render(
			<Radio {...props} hint="This is a hint to appear." />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should not render a radio control if it doesn't have a value", () => {
		const localProps = Object.assign({}, props);
		localProps.value = "";
		const wrapper = render(<Radio {...localProps} />);
		expect(wrapper.queryByRole("radio")).toBe(null);
	});

	it("should prevent actions if the button is disabled", () => {
		const localProps = Object.assign({}, props);
		localProps.disabled = true;
		const wrapper = render(<Radio {...localProps} />);
		const input: HTMLInputElement = wrapper.getByRole(
			"radio"
		) as HTMLInputElement;
		expect(input.disabled).toBe(true);
	});

	it("should add an error class to the parent if the error prop is true", () => {
		const localProps = Object.assign({}, props);
		localProps.error = true;
		const { container } = render(<Radio {...localProps} />);
		const parent = container.querySelector("div.radio--error");
		expect(parent).toBeInTheDocument();
	});

	it("should display error text above the control if an error string is supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.error = "Error message here.";
		const { container } = render(<Radio {...localProps} />);
		const parent = container.querySelector("p.radio__error-message");
		expect(parent?.textContent).toBe("Error message here.");
	});

	it("should pass through any additional attributes supplied", () => {
		const localProps = Object.assign({}, props);
		localProps.defaultChecked = true;
		localProps["data-something"] = "test";
		const wrapper = render(<Radio {...localProps} />);
		const checked: HTMLInputElement = wrapper.getByRole(
			"radio"
		) as HTMLInputElement;
		expect(checked.checked).toBe(true);
		expect(checked.getAttribute("data-something")).toBe("test");
	});
});
