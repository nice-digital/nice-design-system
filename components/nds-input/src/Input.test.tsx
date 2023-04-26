import React from "react";
import { render } from "@testing-library/react";

import { Input, InputProps } from "./Input";

const props: InputProps = {
	name: "name",
	label: "Label"
};

const extraProps: InputProps = {
	name: "name",
	label: "Label",
	error: true,
	errorMessage: "Error",
	hint: "Hint"
};

describe("@nice-digital/nds-input", () => {
	it("should render a input tag", () => {
		const wrapper = render(<Input {...props} />);
		expect(wrapper.getByRole("textbox")).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const wrapper = render(<Input {...extraProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass down a ref to the input", () => {
		const mockRefFunction = jest.fn();
		render(<Input {...props} inputRef={mockRefFunction} />);
		expect(mockRefFunction).toBeCalled();
	});

	it("should pass down additional props to the input", () => {
		const wrapper = render(<Input {...props} data-track="Monkey!" />);
		expect(wrapper.getByRole("textbox").getAttribute("data-track")).toBe(
			"Monkey!"
		);
	});

	it("should merge supplied classNames supplied with internal classes", () => {
		const { container } = render(<Input {...props} className="my-class" />);
		const inputContainer = container.querySelector(".input");
		expect(inputContainer).toBeInTheDocument();
		expect(inputContainer).toHaveClass("my-class");
	});

	it("should exclude a label if null option is passed for label prop", () => {
		const wrapper = render(<Input {...props} label={null} />);
		expect(wrapper.queryByRole("label")).toBe(null);
	});
});
