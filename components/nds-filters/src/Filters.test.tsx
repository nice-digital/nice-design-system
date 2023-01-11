import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FilterSummary, FilterSummaryProps } from "./FilterSummary";
import { FilterPanel, FilterPanelProps } from "./FilterPanel";
import { FilterGroup, FilterGroupProps } from "./FilterGroup";
import { FilterOption, FilterOptionProps } from "./FilterOption";
import { FilterByInput, FilterByInputProps } from "./FilterByInput";

const aFunction = jest.fn();

const filterSummaryProps: FilterSummaryProps = {
	sorting: [
		{ label: "Active", active: true },
		{ label: "Button", onSelected: aFunction }
	],
	activeFilters: [
		{
			label: "Another filter",
			onClick: aFunction
		}
	],
	children: "Showing results 1 to 10 of 1209"
};

const filterPanelProps: FilterPanelProps = {
	heading: "Some filters",
	fallback: {
		method: "GET",
		action: "/submit"
	},
	onSubmit: aFunction,
	children: "A filter panel"
};

const filterGroupProps: FilterGroupProps = {
	heading: "Some filters",
	children: "A filter group"
};

const filterOptionProps: FilterOptionProps = {
	isSelected: true,
	onChanged: aFunction,
	children: "A filter option"
};

const filterByInputProps: FilterByInputProps = {
	label: "Filter by name",
	name: "Filter by name"
};

describe("@nice-digital/nds-filters", () => {
	// describe("Crash test", () => {
	// 	it("should render filter summary without crashing", () => {
	// 		render(<FilterSummary {...filterSummaryProps} />);
	// 	});

	// 	it("should render filter panel without crashing", () => {
	// 		render(<FilterPanel {...filterPanelProps} />);
	// 	});

	// 	it("should render filter group without crashing", () => {
	// 		render(<FilterGroup {...filterGroupProps} />);
	// 	});

	// 	it("should render a filter option without crashing", () => {
	// 		render(<FilterOption {...filterOptionProps} />);
	// 	});

	// 	it("should render a filter by input component without crashing", () => {
	// 		render(<FilterByInput {...filterByInputProps} />);
	// 	});

	// 	it("should match snapshot", () => {
	// 		const wrapper = render(
	// 			<>
	// 				<FilterSummary {...filterSummaryProps} />
	// 				<FilterPanel {...filterPanelProps}>
	// 					<FilterGroup {...filterGroupProps}>
	// 						<FilterOption {...filterOptionProps}>A filter</FilterOption>
	// 					</FilterGroup>
	// 					<FilterByInput {...filterByInputProps} />
	// 				</FilterPanel>
	// 			</>
	// 		);
	// 		expect(wrapper).toMatchSnapshot();
	// 	});
	// });

	// describe("FilterSummary component", () => {
	// 	it("should preselect whichever sorting option has an active property", () => {
	// 		const callback = () => {
	// 			console.log("Callback!");
	// 		};

	// 		const sorting = [
	// 			{ label: "Item 1", value: "item-1", onSelected: callback },
	// 			{ label: "Item 2", value: "item-2", onSelected: callback },
	// 			{
	// 				label: "Item 3 (active)",
	// 				value: "item-3",
	// 				onSelected: callback,
	// 				active: true
	// 			}
	// 		];
	// 		const { container } = render(
	// 			<FilterSummary
	// 				sorting={sorting}
	// 				activeFilters={filterSummaryProps.activeFilters}
	// 			>
	// 				Showing results 1 to 10 of 1209
	// 			</FilterSummary>
	// 		);
	// 		const selectedItem = container.querySelector('[value="item-3"]');
	// 		expect(selectedItem?.hasAttribute("selected")).toBe(true);
	// 	});
	// });

	// describe("FilterByInput component", () => {
	// 	it("should pass inputProps down to the input ", () => {
	// 		const { container } = render(
	// 			<>
	// 				<FilterPanel {...filterPanelProps}>
	// 					<FilterByInput
	// 						{...filterByInputProps}
	// 						inputProps={{
	// 							hint: "enter your search term here"
	// 						}}
	// 					/>
	// 				</FilterPanel>
	// 			</>
	// 		);
	// 		const input = container.querySelector("p");
	// 		expect(input?.textContent).toBe("enter your search term here");
	// 	});
	// });

	// describe("FilterGroup component", () => {
	// 	it("should collapse the filter group when set to collapse by default", () => {
	// 		const { container } = render(
	// 			<FilterGroup {...filterGroupProps} collapseByDefault={true}>
	// 				A filter group
	// 			</FilterGroup>
	// 		);
	// 		const fieldset = container.querySelector("fieldset");
	// 		expect(fieldset?.getAttribute("aria-hidden")).toBe("true");
	// 	});

	// 	it("should expand the filter group when filters are selected despite it being set to collapse by default", () => {
	// 		const { container } = render(
	// 			<FilterGroup
	// 				{...filterGroupProps}
	// 				collapseByDefault={true}
	// 				selectedCount={1}
	// 			>
	// 				A filter group
	// 			</FilterGroup>
	// 		);
	// 		const fieldset = container.querySelector("fieldset");
	// 		expect(fieldset?.getAttribute("aria-hidden")).toBe("false");
	// 	});

	// 	it("should collapse the expanded filter group when the title is clicked", async () => {
	// 		const wrapper = render(
	// 			<FilterGroup {...filterGroupProps}>
	// 				<span>Filter group</span>
	// 			</FilterGroup>
	// 		);

	// 		const button = wrapper.getByRole("button");
	// 		userEvent.click(button);

	// 		await waitFor(() => {
	// 			const fieldset = wrapper.container.querySelector("fieldset");
	// 			expect(fieldset?.getAttribute("aria-hidden")).toBe("true");
	// 		});
	// 	});
	// });

	// describe("FilterOptions component", () => {
	// 	it("should pass the filter group heading down to the filter option and use it plus the child set the input id when no id or value is present", () => {
	// 		const wrapper = render(
	// 			<>
	// 				<FilterPanel {...filterPanelProps}>
	// 					<FilterGroup {...filterGroupProps}>
	// 						<FilterOption {...filterOptionProps}>First filter</FilterOption>
	// 					</FilterGroup>
	// 				</FilterPanel>
	// 			</>
	// 		);
	// 		const input = wrapper.getByRole("checkbox");
	// 		expect(input.id).toBe("filter_some-filters_first-filter");
	// 	});

	// 	it("should pass the filter group id down to the filter option and use it plus filter option value to set the input id when present ", () => {
	// 		const wrapper = render(
	// 			<>
	// 				<FilterPanel {...filterPanelProps}>
	// 					<FilterGroup {...filterGroupProps} id="group-id">
	// 						<FilterOption {...filterOptionProps} value="override-child">
	// 							First filter
	// 						</FilterOption>
	// 					</FilterGroup>
	// 				</FilterPanel>
	// 			</>
	// 		);
	// 		const input = wrapper.getByRole("checkbox");
	// 		expect(input.id).toBe("filter_group-id_override-child");
	// 	});

	// 	it("should fire an onChange function if one is supplied", async () => {
	// 		const wrapper = render(
	// 			<FilterOption {...filterOptionProps}>Second filter</FilterOption>
	// 		);
	// 		const checkbox = wrapper.getByRole("checkbox");
	// 		userEvent.click(checkbox);

	// 		await waitFor(() => {
	// 			expect(aFunction).toHaveBeenCalledTimes(1);
	// 		});
	// 	});
	// });

	describe("FilterPanel component", () => {
		it("should always have fallback properties present", async () => {
			const { container } = render(
				<FilterPanel {...filterPanelProps}>Second filter</FilterPanel>
			);
			const form = container.querySelector("form");
			// ...but why not use getByRole("form")?
			// This is why: https://github.com/testing-library/dom-testing-library/issues/474#issuecomment-597606894
			expect(form?.getAttribute("method")).toBe("GET");
			expect(form?.getAttribute("action")).toBe("/submit");
		});

		it("should cascade the heading level from the filter panel down to the filter group and filter by item components", () => {
			const { container } = render(
				<FilterPanel {...filterPanelProps} headingLevel={3}>
					<FilterGroup {...filterGroupProps}>
						<FilterOption {...filterOptionProps}>First filter</FilterOption>
						<FilterOption {...filterOptionProps}>Second filter</FilterOption>
					</FilterGroup>
					<FilterByInput label="something" name="something">
						Filter by name
					</FilterByInput>
				</FilterPanel>
			);

			const filterPanelHeading = container.querySelector(
				".filter-panel__heading"
			);
			expect(filterPanelHeading?.tagName).toEqual("H3");

			const filterGroupHeading = container.querySelector(
				".filter-group__heading"
			);
			expect(filterGroupHeading?.tagName).toEqual("H4");

			const filterByInputHeading = container.querySelector(
				".inputFilterBox__heading"
			);
			expect(filterByInputHeading?.tagName).toEqual("H4");
		});
	});
});
