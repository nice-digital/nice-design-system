import React from "react";
import {
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterSummary,
	FilterByInput
} from "@nice-digital/nds-filters";

const onChanged = (e: React.ReactEventHandler) => {
	console.log(e);
	alert("onChanged");
};

const onSubmit = (e: React.ReactEventHandler) => {
	// console.log(e);
	alert("FORM SUBMITTED!");
};

const sorting = [
	{ title: "Relevance", onClick: onChanged },
	{ title: "Date", active: true, onClick: onChanged },
	{
		title: "Pertinence",
		elementType: "a", // optional default <a>
		to: "somewhere",
		onClick: () => {} // optional
	}
];

const activeFilters = [
	{
		title: "My filter",
		elementType: "a", // optional default <a>
		to: "somewhere",
		onClick: () => {} // optional
	},
	{
		title: "Another filter",
		onClick: onChanged
	}
];

export const FiltersView = () => {
	return (
		<>
			<FilterSummary sorting={sorting} activeFilters={activeFilters}>
				Showing results 1 to 10 of 1209
			</FilterSummary>
			<FilterPanel heading="A filter panel"
				fallback={{
					action: "/submit-form",
					method: "POST"
				}}>
				<FilterGroup
					heading="Type"
					id="ProductType"
					selectedCount={99}
					className="mb--f"
				>
					<FilterOption isSelected={true} onChanged={onChanged}>
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
