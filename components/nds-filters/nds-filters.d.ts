declare module "@nice-digital/nds-filters" {
	import React = require("react");

	export interface FilterSummaryProps {
		className?: string;
		children: React.ReactNode;
		sorting: SortingType[];
		activeFilters?: FilterType[];
		[prop: string]: unknown;
	}

	export type SortingType = {
		title: string;
		onClick: function;
		active?: boolean | undefined;
	};

	export type FilterType = {
		title: string;
		onClick: function;
	};

	export const FilterSummary: React.ComponentType<FilterSummaryProps>;

	export interface FilterPanelProps {
		[prop: string]: unknown;
		className?: string;
		heading: string;
	}

	export const FilterPanel: React.ComponentType<FilterPanelProps>;

	export interface FilterGroupProps {
		[prop: string]: unknown;
		heading: string;
		id?: string;
		collapseByDefault?: boolean;
		selectedCount: number;
		children: React.ReactNode;
	}

	export const FilterGroup: React.ComponentType<FilterGroupProps>;

	export interface FilterOptionProps {
		[prop: string]: unknown;
		isSelected: boolean;
		children: string;
		value?: string;
		onChanged: function;
	}

	export const FilterOption: React.ComponentType<FilterOptionProps>;
}
