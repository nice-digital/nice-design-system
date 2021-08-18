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
	sorting: [{ title: "Relevance", onClick: aFunction }],
	activeFilters: [
		{
			title: "Another filter",
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

	describe("FilterByInput component", () => {
		it("should pass inputProps down to the input ", () => {
			const wrapper = mount(
				<>
					<FilterPanel {...filterPanelProps}>
						<FilterByInput
							{...filterByInputProps}
							inputProps={{
								"data-tracking": "message"
							}}
						/>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("input");
			expect(input.props()["data-tracking"]).toEqual("message");
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
						</FilterGroup>
					</FilterPanel>
				</>
			);
			const button = wrapper.find("button");
			expect(button.at(1).props()["aria-expanded"]).toEqual(true);
		});
	});
});
