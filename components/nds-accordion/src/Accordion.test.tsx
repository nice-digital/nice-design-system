import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // for the 'toBeInTheDocument' matcher

import userEvent from "@testing-library/user-event";

import { Accordion, accordionVariants } from "./Accordion";

describe.only("Accordion", () => {
	it("should match snapshot", () => {
		render(
			<Accordion title="Some title">
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
					title="Some title"
					open={defaultOpen}
					showLabel={defaultOpen ? undefined : actualLabel}
					hideLabel={defaultOpen ? actualLabel : undefined}
				>
					<p>Body content</p>
				</Accordion>
			);
			expect(screen.getByRole("group")).toHaveProperty(
				"open",
				Boolean(defaultOpen)
			);
			expect(
				screen.getByText(
					(_content, element) =>
						element?.textContent === `${expectedLabel} Some title`,
					{
						selector: "summary"
					}
				)
			).toBeInTheDocument();
		}
	);

	it("should add class for styling details", () => {
		render(
			<Accordion title="Test">
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByRole("group")).toHaveClass("accordion__details");
	});

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

		const summary = screen.getByText(
			(_content, element) => element?.textContent === `Show Test`,
			{
				selector: "summary"
			}
		);

		user.click(summary);

		await waitFor(() => {
			expect(summary).toHaveTextContent("Hide Test");
		});
	});

	it("should open when default open prop changed from false to true", async () => {
		const { rerender } = render(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		const summary = screen.getByText(
			(_content, element) => element?.textContent === `Show Test`,
			{
				selector: "summary"
			}
		);

		rerender(
			<Accordion title="Test" open={true}>
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByRole("group")).toHaveProperty("open", true);

		await waitFor(() => {
			expect(summary).toHaveTextContent("Hide Test");
		});
	});

	it("should close when default open prop changed from true to false", async () => {
		const { rerender } = render(
			<Accordion title="Test" open={true}>
				<p>Body content</p>
			</Accordion>
		);

		const summary = screen.getByText(
			(_content, element) => element?.textContent === `Hide Test`,
			{
				selector: "summary"
			}
		);

		rerender(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.getByRole("group")).toHaveProperty("open", false);

		await waitFor(() => {
			expect(summary).toHaveTextContent("Show Test");
		});
	});

	it("should have appropriate data tracking attribute", async () => {
		const user = userEvent.setup();
		render(
			<Accordion title="Test" open={false}>
				<p>Body content</p>
			</Accordion>
		);

		const summaryElement = screen.getByText(
			(_, node) => node?.className === "accordion__summary"
		);

		expect(summaryElement).toHaveAttribute("data-tracking", "Show");

		user.click(summaryElement);

		await waitFor(() => {
			expect(summaryElement).toHaveAttribute("data-tracking", "Hide");
		});
	});

	it("should throw error when variant is not valid", () => {
		expect(() =>
			render(
				<Accordion
					title="Test"
					variant={"invalid" as unknown as "default" | "caution"}
				>
					<p>Body content</p>
				</Accordion>
			)
		).toThrowError(
			"Expected variant to be one of 'default', 'caution' but found 'invalid'"
		);
	});

	it.each(Object.keys(accordionVariants))(
		"should render without error for the valid variant %s",
		(variant) => {
			const { container } = render(
				<Accordion
					title="Test"
					variant={variant as keyof typeof accordionVariants}
				>
					<p>Body content</p>
				</Accordion>
			);

			expect(container).toBeInTheDocument();
		}
	);

	it("should add a WarningIcon when variant is caution", () => {
		render(
			<Accordion title="Test" variant="caution">
				<p>Body content</p>
			</Accordion>
		);

		const cautionIcon = document.querySelector(".accordion__icon--caution");
		expect(cautionIcon).toBeInTheDocument();
	});
});
