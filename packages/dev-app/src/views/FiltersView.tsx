import React from "react";
import {
	FilterPanel,
	FilterGroup,
	FilterOption
} from "@nice-digital/nds-filters";

const onChanged = () => {};

export const FiltersView = () => {
	return (
		<>
			<h1>Filters</h1>
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
					collapseByDefault={true}
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
