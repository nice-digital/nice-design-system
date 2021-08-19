"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import {
	FilterSummary,
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterByInput
} from "../src/Filters.js";

const aFunction = jest.fn();

const filterSummaryProps = {
	sorting: [
		{ label: "Active", active: true },
		{ label: "Button", onClick: aFunction }
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
	onChange: aFunction
};

const filterByInputProps = {
	label: "Filter by name",
	name: "Filter by name"
};

describe("@nice-digital/nds-filters", () => {
	it("should render filter summary without crashing", () => {
		shallow(<FilterSummary {...filterSummaryProps} />);
	});

	it("should render filter panel without crashing", () => {
		shallow(<FilterPanel {...filterPanelProps} />);
	});

	it("should render filter group without crashing", () => {
		shallow(<FilterGroup {...filterGroupProps} />);
	});

	it("should render a filter option without crashing", () => {
		shallow(<FilterOption {...filterOptionProps}>A filter</FilterOption>);
	});

	it("should render a filter by input component without crashing", () => {
		shallow(<FilterByInput {...filterByInputProps} />);
	});

	it("should match snapshot", () => {
		const wrapper = mount(
			<>
				<FilterSummary {...filterSummaryProps} />
				<FilterPanel {...filterPanelProps}>
					<FilterGroup {...filterGroupProps}>
						<FilterOption {...filterOptionProps}>A filter</FilterOption>
					</FilterGroup>
					<FilterByInput {...filterByInputProps} />
				</FilterPanel>
			</>
		);
		expect(wrapper).toMatchSnapshot();
	});

	describe("FilterSummary component", () => {
		it("should create a button if passed an onClick prop with onClick set with the function passed", () => {
			const sorting = [
				{ label: "Active", active: true },
				{ label: "Button", onClick: aFunction }
			];
			const wrapper = mount(
				<FilterSummary sorting={sorting} activeFilters={sorting}>
					Showing results 1 to 10 of 1209
				</FilterSummary>
			);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(sortingElements.find("button").length).toEqual(1);
			expect(sortingElements.find("button").props().onClick).toEqual(aFunction);
		});

		it("should create an anchor with an href if passed no elementType or onClick prop ", () => {
			const sorting = [
				{ label: "Active", active: true },
				{
					label: "Anchor",
					destination: "https://google.com"
				}
			];
			const wrapper = mount(
				<FilterSummary sorting={sorting} activeFilters={sorting}>
					Showing results 1 to 10 of 1209
				</FilterSummary>
			);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(sortingElements.find("a").length).toEqual(1);
			expect(sortingElements.find("a").props().href).toEqual(
				"https://google.com"
			);
		});

		it("should create the elementType if passed an elementType with the passed method and destination", () => {
			const sorting = [
				{ label: "Active", active: true },
				{
					label: "Special Link Element",
					elementType: "MadeupType",
					method: "aMethod",
					destination: "/somewhere"
				}
			];
			const wrapper = mount(
				<FilterSummary sorting={sorting} activeFilters={sorting}>
					Showing results 1 to 10 of 1209
				</FilterSummary>
			);
			const sortingElements = wrapper.find(".filter-summary__sort");
			expect(sortingElements.find("MadeupType").length).toEqual(1);
			expect(sortingElements.find("MadeupType").props().aMethod).toEqual(
				"/somewhere"
			);
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
							<FilterOption {...filterOptionProps}>First filter</FilterOption>
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
							<FilterOption {...filterOptionProps} value="override-child">
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
							<FilterOption {...filterOptionProps}>First filter</FilterOption>
							{/* TODO: don't think this is right */}
							<FilterOption {...filterOptionProps}>Second filter</FilterOption>
						</FilterGroup>
					</FilterPanel>
				</>
			);
			const input = wrapper.find("input");
			expect(input.length).toEqual(2);
		});

		it("should fire an onChange function if one is supplied", () => {
			const wrapper = mount(
				<FilterOption {...filterOptionProps}>Second filter</FilterOption>
			);
			const checkbox = wrapper.find("input");
			checkbox.simulate("change");
			expect(aFunction).toHaveBeenCalledTimes(1);
		});
	});
});
