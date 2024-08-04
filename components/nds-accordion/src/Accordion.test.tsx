import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
	xit("should match snapshot", () => {
		render(
			<Accordion title={<h3>Some title</h3>}>
				<p>test para</p>
			</Accordion>
		);

		expect(screen.getByRole("group")).toMatchSnapshot();
	});

	it.each([
		["closed", "Show", undefined, undefined],
		["closed", "Expand", undefined, "Expand"],
		["closed", "Show", false, undefined],
		["closed", "Expand", false, "Expand"],
		["open", "Hide", true, undefined],
		["open", "Collapse", true, "Collapse"]
	])(
		"should render %s accordion with label of %s",
		(_expectedState, expectedLabel, defaultOpen, actualLabel) => {
			render(
				<Accordion
					title={<h3>Some title</h3>}
					open={defaultOpen}
					showLabel={defaultOpen ? undefined : actualLabel}
					hideLabel={defaultOpen ? actualLabel : undefined}
				>
					<p>Body content</p>
				</Accordion>
			);
			const button = screen.getByRole("button");
			expect(button).toHaveAttribute(
				"aria-expanded",
				defaultOpen ? "true" : "false"
			);
			expect(button).toHaveTextContent(`${expectedLabel} Some title`);
		}
	);

	xit("should add class for styling details", () => {
		render(
			<Accordion title="Test">
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByRole("group")).toHaveClass("accordion__details");
	});

	it.each([
		[2, "heading2"],
		[3, "heading3"],
		[4, "heading4"],
		[5, "heading5"],
		[6, "heading6"]
	])(
		"should show a heading element if one is passed ",
		(heading, headingText) => {
			render(
				<Accordion
					title={headingText}
					headingLevel={heading as 2 | 3 | 4 | 5 | 6}
				>
					<p>Body content</p>
				</Accordion>
			);

			expect(screen.getByRole("heading")).toHaveClass("accordion__heading");
			expect(screen.getByRole("heading")).toHaveProperty(
				"tagName",
				`H${heading}`
			);
			expect(screen.getByRole("heading")).toHaveTextContent(headingText);
		}
	);

	it("should add class for styling summary", () => {
		render(
			<Accordion title="Test">
				<p>Body content</p>
			</Accordion>
		);

		expect(
			screen.getByText(
				(_content, element) => element?.textContent === "Show Test"
			)
		).toHaveClass("accordion__summary");
	});

	it("should wrap string title in span", () => {
		render(
			<Accordion title="Test">
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByText("Test")).toHaveProperty("tagName", "SPAN");
	});

	it("should wrap number title in span", () => {
		render(
			<Accordion title={99}>
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByText("99")).toHaveProperty("tagName", "SPAN");
	});

	it("should update label when expanded", async () => {
		const user = userEvent.setup();
		render(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		const button = screen.getByText(
			(_content, element) => element?.textContent === `Show Test`,
			{
				selector: "button"
			}
		);

		user.click(button);

		await waitFor(() => {
			expect(button).toHaveTextContent("Hide Test");
		});
	});

	it("should open when default open prop changed from false to true", async () => {
		const { rerender } = render(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		const button = screen.getByText(
			(_content, element) => element?.textContent === `Show Test`,
			{
				selector: "button"
			}
		);

		rerender(
			<Accordion title="Test" open={true}>
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");

		await waitFor(() => {
			expect(button).toHaveTextContent("Hide Test");
		});
	});

	it("should close when default open prop changed from true to false", async () => {
		const { rerender } = render(
			<Accordion title="Test" open={true}>
				<p>Body content</p>
			</Accordion>
		);

		const button = screen.getByText(
			(_content, element) => element?.textContent === `Hide Test`,
			{
				selector: "button"
			}
		);

		rerender(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		expect(button).toHaveAttribute("aria-expanded", "false");

		await waitFor(() => {
			expect(button).toHaveTextContent("Show Test");
		});
	});

	it("should have appropriate data tracking attribute", async () => {
		const user = userEvent.setup();
		render(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		const buttonElement = screen.getByText(
			(_, node) => node?.className === "accordion__summary"
		);

		expect(buttonElement).toHaveAttribute("data-tracking", "Show");

		user.click(buttonElement);

		await waitFor(() => {
			expect(buttonElement).toHaveAttribute("data-tracking", "Hide");
		});
	});
});
