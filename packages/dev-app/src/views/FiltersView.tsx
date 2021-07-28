import React from "react";
import {
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterSummary
} from "@nice-digital/nds-filters";

const onChanged = () => {};

const sorting = [
	{ title: "Relevance", to: "/sort-rel" },
	{ title: "Date", to: "/", active: true },
	{ title: "Pertinence", to: "/sort-pert" }
];

export const FiltersView = () => {
	return (
		<>
			<FilterSummary className="monkey" sorting={sorting}>
				Showing results 1 to 10 of 1209
			</FilterSummary>
			<FilterPanel heading="A filter panel">
				<FilterGroup heading="Type" id="ProductType" selectedCount={99}>
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
