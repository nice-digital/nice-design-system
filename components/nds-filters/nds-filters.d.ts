declare module "@nice-digital/nds-filters" {
	import React = require("react");

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
		onChanged: () => void;
	}

	export const FilterOption: React.ComponentType<FilterOptionProps>;
}
