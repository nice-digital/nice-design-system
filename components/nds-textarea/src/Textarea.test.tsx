import React from "react";
import { render } from "@testing-library/react";

import { Textarea, TextareaProps } from "./Textarea";

const props: TextareaProps = {
	name: "name",
	label: "Label"
};

const extraProps: TextareaProps = {
	name: "name",
	label: "Label",
	error: true,
	errorMessage: "Error",
	hint: "Hint"
};

describe("@nice-digital/nds-textarea", () => {
	it("should render a textarea tag", () => {
		const wrapper = render(<Textarea {...props} />);
		expect(wrapper.getByRole("textbox")).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const wrapper = render(<Textarea {...props} {...extraProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass down a ref to the textarea", () => {
		const mockRefFunction = jest.fn();
		render(<Textarea {...props} textareaRef={mockRefFunction} />);
		expect(mockRefFunction).toBeCalled();
	});

	it("should cascade additional props to the container", () => {
		const wrapper = render(<Textarea {...props} data-track="chocolate" />);
		expect(wrapper.getByRole("textbox").getAttribute("data-track")).toBe(
			"chocolate"
		);
	});
});
