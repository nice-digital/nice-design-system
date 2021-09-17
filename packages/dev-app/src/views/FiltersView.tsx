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

let formReference: any;

const onChanged = (e: React.ReactEventHandler) => {
	console.log(e);
	alert("onChanged");
	console.log(serialize(formReference));
};

const onSubmit = (e: React.ReactEventHandler) => {
	// console.log(e);
	alert("FORM SUBMITTED!");
};

const sorting = [
	{ label: "onClick active", active: true, onClick: onChanged },
	{ label: "onClick inactive", onClick: onChanged },
	{
		// bog standard link
		label: "Anchor",
		destination: "https://google.com",
		method: "href"
	},
	{
		// custom link in gatsby
		label: "Gatsby",
		elementType: Link,
		destination: "/",
		method: "to"
	},
	{
		// custom link in Next
		label: "Next",
		elementType: Link,
		method: "monkey",
		destination: "/monkeylink"
	}
];

const getFormRef = (ref: any) => {
	formReference = ref;
	console.log("the form reference >>> ", formReference);
	let str = serialize(formReference);
	console.log("serialized >>> ", str);
};

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
				getFormRef={getFormRef}
			>
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
