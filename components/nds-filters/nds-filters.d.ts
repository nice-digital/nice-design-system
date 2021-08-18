declare module "@nice-digital/nds-filters" {
	import React = require("react");

	export interface FilterSummaryProps {
		className?: string;
		children: React.ReactNode;
		sorting?: SortingType[];
		activeFilters?: FilterType[];
		[prop: string]: unknown;
	}

	export type SortingType = {
		label: string;
		onClick?: function;
		active?: boolean | undefined;
		elementType?: React.ElementType;
		className?: string;
	};

	export type FilterType = {
		label: string;
		onClick?: function;
		to?: string;
	};

	export const FilterSummary: React.ComponentType<FilterSummaryProps>;

	export interface FilterPanelProps {
		[prop: string]: unknown;
		className?: string;
		heading: string;
		fallback?: object;
	}

	export const FilterPanel: React.ComponentType<FilterPanelProps>;

	export interface FilterGroupProps {
		[prop: string]: unknown;
		heading: string;
		id?: string;
		collapseByDefault?: boolean;
		selectedCount?: number;
		children: React.ReactNode;
		className?: string;
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

	export interface FilterByInputProps {
		[prop: string]: unknown;
		label: string;
		name: string;
		buttonLabel?: string;
		className?: string;
		collapseByDefault?: boolean;
		type?:
			| "color"
			| "date"
			| "datetime-local"
			| "email"
			| "file"
			| "hidden"
			| "image"
			| "month"
			| "number"
			| "range"
			| "password"
			| "search"
			| "tel"
			| "text"
			| "time"
			| "url"
			| "week";
		inputProps?: unknown;
	}

	export const FilterByInput: React.FC<FilterByInputProps>;
}
