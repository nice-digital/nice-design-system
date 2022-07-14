import React from "react";
import {
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterSummary,
	FilterByInput
} from "@nice-digital/nds-filters";

import { Link } from "react-router-dom";
const serialize = require("form-serialize");

const ref = React.createRef();

function handleFormSubmission() {
	console.log("serialize", serialize(ref.current));
}

const onChanged = (e: any) => {
	handleFormSubmission();
};

const onSubmit = (e: any) => {
	handleFormSubmission();
};

const callback = () => {
	console.log("Callback!");
};

const sorting = [
	{ label: "Item 1", value: "item-1", onSelected: callback },
	{ label: "Item 2", value: "item-2", onSelected: callback },
	{
		label: "Item 3 (active)",
		value: "item-3",
		onSelected: callback,
		active: true
	},
	{ label: "Item 4", value: "item-4", onSelected: callback },
	{ label: "Item 5", onClick: onChanged, value: "item-5", onSelected: callback }
];

export const FiltersView = () => {
	return (
		<>
			<FilterSummary sorting={sorting} activeFilters={sorting}>
				Showing results 1 to 10 of 1209
			</FilterSummary>
			<FilterPanel
				heading="A filter panel"
				fallback={{
					action: "/submit-form",
					method: "POST"
				}}
				onSubmit={onSubmit}
				innerRef={ref}
			>
				<FilterGroup
					heading="Type"
					id="ProductType"
					selectedCount={99}
					className="mb--f"
				>
					<FilterOption
						isSelected={true}
						onChanged={onChanged}
						data-track="important"
					>
						Guidance
					</FilterOption>
					<FilterOption isSelected={false} onChanged={onChanged}>
						Advice
					</FilterOption>
					<FilterOption isSelected={false} onChanged={onChanged}>
						NICE Pathways
					</FilterOption>
				</FilterGroup>
				<FilterByInput
					label="filter yo"
					name="filter"
					buttonLabel="Clik nmee!"
					collapseByDefault={true}
					className="mb--f"
					onChange={onChanged}
					inputProps={{
						hint: "enter your search term here",
						error: true,
						errorMessage: "NOOOO",
						"data-tracking": "message"
					}}
				/>
				<FilterGroup
					heading="Guidance programme"
					selectedCount={0}
					collapseByDefault={false}
				>
					<FilterOption isSelected={false} onChanged={onChanged}>
						NICE guidelines
					</FilterOption>
					<FilterOption isSelected={false} onChanged={onChanged}>
						Technology appraisal guidance
					</FilterOption>
					<FilterOption isSelected={false} onChanged={onChanged}>
						Diagnostics guidance
					</FilterOption>
				</FilterGroup>
			</FilterPanel>
		</>
	);
};
