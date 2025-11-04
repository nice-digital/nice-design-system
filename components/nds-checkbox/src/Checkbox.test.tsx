import React from "react";
import { render, screen } from "@testing-library/react";

import { Checkbox, CheckboxGroupProps } from "./../src/Checkbox";

const baseProps: CheckboxGroupProps = {
	name: "contact-methods",
	legend: "How would you like to be contacted?",
	options: [
		{ label: "Email", value: "email", name: "contact-email" },
		{ label: "Telephone", value: "telephone", name: "contact-telephone" },
		{ label: "Text message", value: "text-message", name: "contact-text" }
	]
};
describe("Checkbox", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(<Checkbox {...baseProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with hint text supplied", () => {
		const wrapper = render(
			<Checkbox {...baseProps} hint="This is a hint to appear." />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should render a fieldset with a legend", () => {
		render(<Checkbox {...baseProps} />);
		const legend = screen.getByText("How would you like to be contacted?");
		expect(legend.tagName).toBe("LEGEND");
	});

	it("should render all options", () => {
		render(<Checkbox {...baseProps} />);
		const checkboxes = screen.getAllByRole("checkbox");
		expect(checkboxes.length).toBe(3);
		expect(screen.getByLabelText("Email")).toBeInTheDocument();
		expect(screen.getByLabelText("Telephone")).toBeInTheDocument();
		expect(screen.getByLabelText("Text message")).toBeInTheDocument();
	});

	it("should render the legend text inside an <h1> when legendIsHeading is true", () => {
		const { container, getByRole } = render(
			<Checkbox
				{...baseProps}
				legendIsHeading={true}
				legend="How would you like to be contacted?"
			/>
		);

		// Find the fieldset
		const fieldset = container.querySelector("fieldset");
		expect(fieldset).toBeInTheDocument();

		// Find the legend element
		const legend = fieldset?.querySelector("legend");
		expect(legend).toBeInTheDocument();

		// Assert that legend contains an h1 with the legend text
		const heading = legend?.querySelector("h1");
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("How would you like to be contacted?");
	});

	it("should render the legend text as plain text when legendIsHeading is false", () => {
		const { container } = render(
			<Checkbox
				{...baseProps}
				legendIsHeading={false}
				legend="How would you like to be contacted?"
			/>
		);

		const legend = container.querySelector("legend");
		expect(legend).toBeInTheDocument();
		expect(legend?.textContent).toBe("How would you like to be contacted?");
		expect(legend?.querySelector("h1")).toBeNull();
	});

	it("should apply inline class when inline prop is true", () => {
		const { container } = render(<Checkbox {...baseProps} inline />);
		expect(
			container.querySelector(".checkbox-group--inline")
		).toBeInTheDocument();
	});

	it("should display group hint when provided", () => {
		const { container } = render(
			<Checkbox {...baseProps} hint="Select all that apply" />
		);
		expect(screen.getByText("Select all that apply")).toHaveClass(
			"fieldset__hint"
		);
		expect(
			container.querySelector("#contact-methods-hint")
		).toBeInTheDocument();
	});

	it("should display per-option hint when provided", () => {
		const { container } = render(
			<Checkbox
				{...baseProps}
				options={[
					{
						label: "Email",
						value: "email",
						name: "contact-email",
						hint: "We'll send updates to your inbox"
					}
				]}
			/>
		);
		expect(screen.getByText("We'll send updates to your inbox")).toHaveClass(
			"checkbox-group__hint"
		);
		expect(
			container.querySelector(".checkbox-group__hint")
		).toBeInTheDocument();
	});

	it("should add error class and message when error string is provided", () => {
		const { container } = render(
			<Checkbox {...baseProps} error="This is an error message" />
		);

		const errorMsg = screen.getByText("This is an error message");
		expect(errorMsg).toHaveClass("fieldset__error-message");
		expect(
			container.querySelector(".checkbox-group--error")
		).toBeInTheDocument();
	});

	it("should not add error class when error prop is false or undefined", () => {
		const { container, rerender } = render(<Checkbox {...baseProps} />);
		expect(
			container.querySelector(".checkbox-group--error")
		).not.toBeInTheDocument();

		rerender(<Checkbox {...baseProps} error={false} />);
		expect(
			container.querySelector(".checkbox-group--error")
		).not.toBeInTheDocument();
	});

	it("should link aria-describedby to hint and error if present", () => {
		const { container } = render(
			<Checkbox {...baseProps} hint="Hint text" error="Error text" />
		);

		const fieldset = container.querySelector("fieldset")!;
		expect(fieldset).toHaveAttribute(
			"aria-describedby",
			expect.stringContaining("contact-methods-hint")
		);
		expect(fieldset).toHaveAttribute(
			"aria-describedby",
			expect.stringContaining("contact-methods-error")
		);
	});

	it("should return null if no options are provided", () => {
		const { container } = render(<Checkbox {...baseProps} options={[]} />);
		expect(container.firstChild).toBeNull();
	});
});
