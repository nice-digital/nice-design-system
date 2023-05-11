import {
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterSummary,
	FilterByInput
} from "@nice-digital/nds-filters";

export const DefaultFilterSummary = () => (
	<FilterSummary
		activeFilters={[
			{
				label: "Guidance"
			},
			{
				label: "Pathway"
			}
		]}
	>
		Showing results 1 to 10 of 1209
	</FilterSummary>
);

export const DefaultFilterPanel = () => (
	<FilterPanel heading="A filter panel">
		<FilterGroup heading="Type">
			<FilterOption
				isSelected={true}
				value="This is an example"
				onChanged={() => console.log("Changed!")}
			>
				This is an example
			</FilterOption>
			<FilterOption
				isSelected={false}
				value="Another example"
				onChanged={() => console.log("Changed!")}
			>
				Another example
			</FilterOption>
		</FilterGroup>
	</FilterPanel>
);

export const DefaultFilterByInput = () => (
	<FilterPanel heading="A filter panel">
		<FilterByInput label="test" name="test"></FilterByInput>
	</FilterPanel>
);

export const DefaultMultipleFilters = () => (
	<FilterPanel heading="A filter panel">
		<FilterGroup heading="Type">
			<FilterOption
				isSelected={true}
				value="This is an example"
				onChanged={() => console.log("Changed!")}
			>
				This is an example
			</FilterOption>
			<FilterOption
				isSelected={false}
				value="Another example"
				onChanged={() => console.log("Changed!")}
			>
				Another example
			</FilterOption>
		</FilterGroup>
		<FilterByInput label="test" name="test"></FilterByInput>
	</FilterPanel>
);
