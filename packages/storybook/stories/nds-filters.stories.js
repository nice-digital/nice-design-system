/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
	FilterSummary,
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterByInput
} from "@nice-digital/nds-filters";

const filterSummaryProps = {
	sorting: [
		{ label: "Date", active: true },
		{ label: "Title", onClick: action("Click") }
	],
	activeFilters: [
		{
			label: "Guidance",
			onClick: action("Click")
		},
		{
			label: "Pathway",
			onClick: action("Click")
		}
	],
	children: "Showing results 1 to 10 of 1209"
};

const filterPanelProps = {
	heading: "Some filters",
	fallback: {
		method: "GET",
		action: "/submit"
	}
};

const filterGroupProps = {
	heading: "Filter by guidance type"
};

const filterOptionProps = {
	isSelected: true,
	onChanged: action("Click")
};

const filterByInputProps = {
	label: "Filter by name",
	name: "Filter by name"
};

const filterSummary = () => (
	<FilterSummary {...filterSummaryProps}>
		{text("Message", "Showing results 1 to 10 of 1209")}
	</FilterSummary>
);

const filterPanelWithGroup = () => (
	<FilterPanel {...filterPanelProps}>
		<FilterGroup {...filterGroupProps}>
			<FilterOption {...filterOptionProps}>Guidance</FilterOption>
			<FilterOption {...filterOptionProps}>Technology Appraisals</FilterOption>
			<FilterOption {...filterOptionProps}>Quality Statements</FilterOption>
		</FilterGroup>
	</FilterPanel>
);

const filterPanelWithInput = () => (
	<FilterPanel {...filterPanelProps}>
		<FilterByInput {...filterByInputProps} />
	</FilterPanel>
);

const filterPanelWithBoth = () => (
	<FilterPanel {...filterPanelProps}>
		<FilterByInput
			{...filterByInputProps}
			inputProps={{
				hint: text("Input hint", "Enter your search term here"),
				error: boolean("Is error present", true),
				errorMessage: text(
					"The error message to show",
					"You can only search for names"
				)
			}}
			buttonLabel={text("Button text", "Filter")}
		/>
		<FilterGroup
			{...filterGroupProps}
			heading="Filter by last updated"
			collapseByDefault={true}
		>
			<FilterOption {...filterOptionProps} isSelected={false}>
				Today
			</FilterOption>
			<FilterOption {...filterOptionProps}>Last 30 days</FilterOption>
			<FilterOption {...filterOptionProps} isSelected={false}>
				Last year
			</FilterOption>
		</FilterGroup>
		<FilterGroup
			{...filterGroupProps}
			selectedCount={number("selectedCount", 3)}
		>
			<FilterOption {...filterOptionProps}>Guidance</FilterOption>
			<FilterOption {...filterOptionProps}>Technology Appraisals</FilterOption>
			<FilterOption {...filterOptionProps}>Quality Statements</FilterOption>
		</FilterGroup>
	</FilterPanel>
);

storiesOf("Components/Filters", module)
	.add("Filter Summary", filterSummary)
	.add("Filter Panel with Filter Group", filterPanelWithGroup)
	.add("Filter Panel with Filter by Input", filterPanelWithInput)
	.add("Filter Panel with multiple filters", filterPanelWithBoth);
