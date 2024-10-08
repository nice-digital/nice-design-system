import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

describe("AccordionGroup", () => {
	const accordions = [
		<Accordion key="1" title="Accordion 1">
			Accordion 1 body
		</Accordion>,
		<Accordion key="2" title="Accordion 2">
			Accordion 2 body
			<Accordion key="2" title="Accordion 3 (nested)">
				Accordion 3 body
			</Accordion>
		</Accordion>
	];

	it("should not render toggle button server side", () => {
		renderToString(<AccordionGroup>{accordions}</AccordionGroup>);

		expect(
			renderToString(<AccordionGroup>{accordions}</AccordionGroup>)
		).not.toContain("Show all sections");
	});

	it("should render toggle button client side", () => {
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		const toggleButton = screen.getAllByRole("button")[0];
		expect(toggleButton).toHaveTextContent("Show all sections");
	});

	it("should be collapsed by default", () => {
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		const toggleButton = screen.getAllByRole("button")[0];
		expect(toggleButton).toHaveAttribute("aria-expanded", "false");
		expect(toggleButton).toHaveTextContent("Show all sections");
	});

	it("should have default show text", () => {
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		expect(screen.getAllByRole("button")[0]).toHaveTextContent(
			"Show all sections"
		);
	});

	it("should have default hide text", async () => {
		const user = userEvent.setup();
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		const toggleButton = screen.getAllByRole("button")[0];
		user.click(toggleButton);
		await waitFor(() => {
			expect(toggleButton).toHaveTextContent("Hide all sections");
		});
	});

	it("should use toggle text function", async () => {
		const user = userEvent.setup();
		render(
			<AccordionGroup
				toggleText={(isOpen) => (isOpen ? "Hide it!" : "Show it!")}
			>
				{accordions}
			</AccordionGroup>
		);
		const toggleButton = screen.getAllByRole("button")[0];
		expect(toggleButton).toHaveTextContent("Show it!");
		user.click(toggleButton);

		await waitFor(() => {
			expect(toggleButton).toHaveTextContent("Hide it!");
		});
	});

	it("should toggle aria expanded on toggle", async () => {
		const user = userEvent.setup();
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		const toggleButton = screen.getAllByRole("button")[0];
		user.click(toggleButton);

		await waitFor(() => {
			expect(toggleButton).toHaveAttribute("aria-expanded", "true");
		});
	});

	it("should toggle data tracking attrbiute on toggle", async () => {
		const user = userEvent.setup();
		render(<AccordionGroup>{accordions}</AccordionGroup>);
		const toggleButton = screen.getAllByRole("button")[0];
		expect(toggleButton).toHaveAttribute("data-tracking", "Show all sections");
		user.click(toggleButton);
		await waitFor(() => {
			expect(toggleButton).toHaveAttribute(
				"data-tracking",
				"Hide all sections"
			);
		});
	});

	it("should call toggle function with correct isOpen boolean argument", async () => {
		const user = userEvent.setup();
		const toggleFn = jest.fn();
		render(<AccordionGroup onToggle={toggleFn}>{accordions}</AccordionGroup>);
		user.click(screen.getAllByRole("button")[0]);
		await waitFor(() => {
			expect(toggleFn).toHaveBeenCalledWith(true);
		});

		user.click(screen.getAllByRole("button")[0]);
		await waitFor(() => {
			expect(toggleFn).toHaveBeenCalledWith(false);
		});
	});

	it("should show all child accordions on show button click", async () => {
		const user = userEvent.setup();
		render(<AccordionGroup>{accordions}</AccordionGroup>);

		const accordionElements = screen
			.getAllByRole<HTMLButtonElement>("button")
			.slice(0, 2);

		expect(accordionElements).toSatisfyAll((a: HTMLButtonElement) => {
			return !a.ariaExpanded;
		});

		user.click(screen.getAllByRole("button")[0]);

		waitFor(() => {
			accordionElements.forEach((a) => {
				expect(a).toHaveProperty("aria-expanded", true);
			});
		});
	});

	xit("should not show descendent accordions on show button click", () => {
		const user = userEvent.setup();
		render(<AccordionGroup>{accordions}</AccordionGroup>);

		const nestedAccordion = screen.getAllByRole<HTMLDetailsElement>("group")[2];

		expect(nestedAccordion).toHaveProperty("open", false);
		user.click(screen.getByRole("button"));
		expect(nestedAccordion).toHaveProperty("open", false);
	});
});
