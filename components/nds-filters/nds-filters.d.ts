declare module "@nice-digital/nds-filters" {
	import React = require("react");

	export interface FilterSummaryProps {
		[prop: string]: unknown;
		sorting?: SortingType[];
		activeFilters?: FilterType[];
		children: React.ReactNode;
		className?: string;
	}

	export type SortingType = {
		label: string;
		destination?: string;
		onClick?: React.MouseEventHandler;
		elementType?: React.ElementType;
		method?: string;
		className?: string;
		active?: boolean | undefined;
	};

	export type FilterType = {
		label: string;
		destination?: string;
		onClick?: React.MouseEventHandler;
		elementType?: React.ElementType;
		method?: string;
		className?: string;
	};

	export const FilterSummary: React.ComponentType<FilterSummaryProps>;

	export interface FilterPanelProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		className?: string;
		heading: string;
		fallback?: {
			action?: string;
			method?: "GET" | "POST";
		};
	}

	export const FilterPanel: React.ComponentType<FilterPanelProps>;

	export interface FilterGroupProps {
		[prop: string]: unknown;
		heading: string;
		id?: string;
		selectedCount?: number;
		collapseByDefault?: boolean;
		children: React.ReactNode;
		className?: string;
	}

	export const FilterGroup: React.ComponentType<FilterGroupProps>;

	export interface FilterOptionProps {
		[prop: string]: unknown;
		groupId?: string;
		groupHeading?: string;
		isSelected: boolean;
		children: string;
		value?: string;
		onChanged: React.ChangeEventHandler<InputEvent>;
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
