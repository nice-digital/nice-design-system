import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
	it("should match snapshot", () => {
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
		["open", "Collase", true, "Collase"]
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

		expect(screen.getByRole("group")).toHaveClass("details");
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
		).toHaveClass("summary");
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
			(_, node) => node?.className === "summary"
		);

		expect(summaryElement).toHaveAttribute("data-tracking", "Show");

		user.click(summaryElement);

		await waitFor(() => {
			expect(summaryElement).toHaveAttribute("data-tracking", "Hide");
		});
	});
});
