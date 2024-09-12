import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
	it("should match snapshot", () => {
		render(
			<Accordion title="Some title">
				<p>test para</p>
			</Accordion>
		);

		expect(screen.getByRole("button").parentElement).toMatchSnapshot();
	});

	it("should render the Accordion as open if rendered from server (mimic server side render)", () => {
		//mimic server side rendering and JS disabled
		const accordionHtml = renderToString(
			<Accordion
				title="Server rendered accordion"
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<h3>Accordion body heading</h3>
				<p>Accordion body content</p>
			</Accordion>
		);

		const container = document.createElement("div");
		container.innerHTML = accordionHtml;
		document.body.appendChild(container);

		const button = screen.getByRole("button");
		const contentDiv = screen.getByLabelText(/Server rendered accordion/i);

		expect(button).toHaveAttribute("aria-expanded", "false");
		expect(contentDiv).toBeVisible();
		expect(contentDiv).not.toHaveAttribute("hidden");

		// Clean up
		document.body.removeChild(container);
	});

	it("should render the Accordion as closed if JS is enabled", () => {
		const accordion = render(
			<Accordion
				title="Server rendered accordion with JS enabled"
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				<h3>Accordion body heading</h3>
				<p>Accordion body content</p>
			</Accordion>
		);

		const accordionHeadingText = screen.getByText(
			/Server rendered accordion with JS enabled/
		);
		expect(accordionHeadingText).toBeVisible();

		const accordionContentText = screen.getByText(/Accordion body content/);
		expect(accordionContentText).toBeInTheDocument();
		expect(accordionContentText).not.toBeVisible();
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
			const button = screen.getByRole("button");
			expect(button).toHaveAttribute(
				"aria-expanded",
				defaultOpen ? "true" : "false"
			);
			expect(button).toHaveTextContent(`${expectedLabel} Some title`);
		}
	);

	it.each([
		[2, "heading2"],
		[3, "heading3"],
		[4, "heading4"],
		[5, "heading5"],
		[6, "heading6"]
	])(
		"should show a heading element if one is passed and displayTitleAsHeading is true",
		(heading, headingText) => {
			render(
				<Accordion
					title={headingText}
					displayTitleAsHeading={true}
					headingLevel={heading}
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

	it("should not show a heading element if displayTitleAsHeading is false", () => {
		render(
			<Accordion title="Some title" headingLevel={2}>
				<p>Body content</p>
			</Accordion>
		);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
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

		expect(button).toHaveAttribute("aria-expanded", "true");

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

	it("should allow the passing of custom classes through className", () => {
		render(
			<Accordion title="test title" className="custom-class-name">
				test content
			</Accordion>
		);

		const accordionHeader = screen.getByRole("button").parentElement;
		const accordion = accordionHeader?.parentElement;
		expect(accordion).toHaveClass("custom-class-name");
	});

	it("should allow the passing of caution variant", () => {
		render(
			<Accordion
				title="test title"
				variant="caution"
				displayTitleAsHeading={true}
				headingLevel={2}
			>
				test content
			</Accordion>
		);

		const accordionHeader = screen.getByRole("button").parentElement;
		const accordion = accordionHeader?.parentElement;
		expect(accordion).toMatchSnapshot();
	});
});
