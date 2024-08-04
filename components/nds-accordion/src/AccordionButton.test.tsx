import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AccordionButton } from "./AccordionButton";

describe("AccordionButton", () => {
	const mockToggleAccordion = jest.fn();
	const mockGeneratedId = "accordion-id";
	const mockShowLabel = "Show";
	const mockHideLabel = "Hide";
	const mockTitle = "Test Title";
	const mockVariant = "caution";

	it("should render correctly when accordion is open", () => {
		render(
			<AccordionButton
				isOpen={true}
				toggleAccordion={mockToggleAccordion}
				generatedId={mockGeneratedId}
				showLabel={mockShowLabel}
				hideLabel={mockHideLabel}
				title={mockTitle}
			/>
		);

		expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
		expect(screen.getByRole("button")).toHaveAttribute(
			"aria-controls",
			mockGeneratedId
		);
		expect(screen.getByRole("button")).toMatchSnapshot();
	});

	it("should render correctly when accordion is closed", () => {
		render(
			<AccordionButton
				isOpen={false}
				toggleAccordion={mockToggleAccordion}
				generatedId={mockGeneratedId}
				showLabel={mockShowLabel}
				hideLabel={mockHideLabel}
				title={mockTitle}
			/>
		);
		expect(screen.getByRole("button")).toHaveAttribute(
			"aria-expanded",
			"false"
		);
		expect(screen.getByRole("button")).toHaveAttribute(
			"aria-controls",
			mockGeneratedId
		);
		expect(screen.getByRole("button")).toMatchSnapshot();
	});

	it("should call toggleAccordion when clicked", () => {
		render(
			<AccordionButton
				isOpen={true}
				toggleAccordion={mockToggleAccordion}
				generatedId={mockGeneratedId}
				showLabel={mockShowLabel}
				hideLabel={mockHideLabel}
				title={mockTitle}
			/>
		);

		fireEvent.click(screen.getByRole("button"));
		expect(mockToggleAccordion).toHaveBeenCalledTimes(1);
	});

	it("should render correctly when variant is caution", () => {
		render(
			<AccordionButton
				isOpen={true}
				toggleAccordion={mockToggleAccordion}
				generatedId={mockGeneratedId}
				showLabel={mockShowLabel}
				hideLabel={mockHideLabel}
				title={mockTitle}
				variant={mockVariant}
			/>
		);

		expect(screen.getByRole("button")).toMatchSnapshot();
	});
});
