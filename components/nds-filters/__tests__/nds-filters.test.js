"use strict";

import React from "react";
import { mount } from "enzyme";
import {
	FilterSummary,
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterByInput
} from "../src/Filters.js";

const aFunction = () => {};

const filterSummaryProps = {
	sorting: [
		{ label: "Active", active: true },
		{ label: "Button", onClick: aFunction },
		{
			// bog standard link
			label: "Anchor",
			destination: "https://google.com"
		},
		{
			// custom link in gatsby
			label: "Gatsby",
			elementType: "MadeupType",
			method: "to",
			destination: "/"
		},
		{
			// custom link in Next
			label: "Next",
			elementType: "MadeupType",
			method: "href",
			destination: "/monkeylink"
		}
	],
	activeFilters: [
		{
			label: "Another filter",
			onClick: aFunction
		}
	],
	children: "Showing results 1 to 10 of 1209"
};

const filterPanelProps = {
	heading: "Some filters"
};

const filterGroupProps = {
	heading: "Some filters",
	collapseByDefault: true,
	selectedCount: 99,
	className: "testClass"
};

const filterOptionProps = {
	isSelected: true,
	onChanged: aFunction
};

const filterByInputProps = {
	label: "Filter by name",
	name: "Filter by name"
};

describe("@nice-digital/nds-filters", () => {
	it("should render filter summary without crashing", () => {
		mount(<FilterSummary {...filterSummaryProps} />);
	});

	it("should render filter panel without crashing", () => {
		mount(<FilterPanel {...filterPanelProps} />);
	});

	it("should render filter group without crashing", () => {
		mount(<FilterGroup {...filterGroupProps} />);
	});

	it("should render a filter option without crashing", () => {
		mount(<FilterOption {...filterOptionProps}>A filter</FilterOption>);
	});

	it("should render a filter by input component without crashing", () => {
		mount(<FilterByInput {...filterByInputProps} />);
	});

	it("should match snapshot", () => {
		const wrapper = mount(
			<>
				<FilterSummary {...filterSummaryProps} />
				<FilterPanel {...filterPanelProps}>
					<FilterGroup {...filterGroupProps}>
						<FilterOption {...filterGroupProps}>A filter</FilterOption>
					</FilterGroup>
					<FilterByInput {...filterByInputProps} />
				</FilterPanel>
			</>
		);
		expect(wrapper).toMatchSnapshot();
	});

	describe("FilterSummary component", () => {
		it("should create a button if passed an onClick prop ", () => {
			const wrapper = mount(<FilterSummary {...filterSummaryProps} />);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(
				sortingElements
					.find("span")
					.at(3)
					.childAt(1)
					.type()
			).toEqual("button");
		});

		it("should create an anchor if passed no elementType or onClick prop ", () => {
			const wrapper = mount(<FilterSummary {...filterSummaryProps} />);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(
				sortingElements
					.find("span")
					.at(4)
					.childAt(1)
					.type()
			).toEqual("a");
		});

		it("should create the elementType if passed an elementType ", () => {
			const wrapper = mount(<FilterSummary {...filterSummaryProps} />);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(
				sortingElements
					.find("span")
					.at(5)
					.childAt(1)
					.type()
			).toEqual("MadeupType");
		});
	});

	describe("FilterByInput component", () => {
		it("should pass inputProps down to the input ", () => {
			const wrapper = mount(
				<>
					<FilterPanel {...filterPanelProps}>
						<FilterByInput
							{...filterByInputProps}
							inputProps={{
								hint: "enter your search term here"
							}}
						/>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("p");
			expect(input.text()).toEqual("enter your search term here");
		});
	});

	describe("FilterOptions component", () => {
		it("should pass the filter group heading down to the filter option and use it plus the child set the input id when no id or value is present", () => {
			const wrapper = mount(
				<>
					<FilterPanel {...filterPanelProps}>
						<FilterGroup {...filterGroupProps}>
							<FilterOption {...filterGroupProps}>First filter</FilterOption>
						</FilterGroup>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("input");
			expect(input.props()["id"]).toEqual("filter_some-filters_first-filter");
		});

		it("should pass the filter group id down to the filter option and use it plus filter option value to set the input id when present ", () => {
			const wrapper = mount(
				<>
					<FilterPanel {...filterPanelProps}>
						<FilterGroup {...filterGroupProps} id="group-id">
							<FilterOption {...filterGroupProps} value="override-child">
								First filter
							</FilterOption>
						</FilterGroup>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("input");
			expect(input.props()["id"]).toEqual("filter_group-id_override-child");
		});

		it("should expand the filter group when options are selected despite it being set to collapse by default", () => {
			const wrapper = mount(
				<>
					<FilterPanel {...filterPanelProps}>
						<FilterGroup
							{...filterGroupProps}
							collapseByDefault={true}
							selectedCount={1}
						>
							<FilterOption {...filterGroupProps}>First filter</FilterOption>
							<FilterOption {...filterGroupProps}>Second filter</FilterOption>
						</FilterGroup>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("input");
			expect(input.length).toEqual(2);
		});
	});
});
