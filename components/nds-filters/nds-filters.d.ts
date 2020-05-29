declare module "@nice-digital/nds-filters" {
	import React = require("react");

	export interface FilterPanelProps {
		className?: string;
		heading: string;
	}

	export const FilterPanel: React.ComponentType<FilterPanelProps>;

	export interface FilterGroupProps {
		heading: string;
		id?: string;
		collapseByDefault?: boolean;
		selectedCount: number;
		children: React.ReactNode;
	}

	export const FilterGroup: React.ComponentType<FilterGroupProps>;

	export interface FilterOptionProps {
		isSelected: boolean;
		children: string;
		value?: string;
		onChanged: () => void;
	}

	export const FilterOption: React.ComponentType<FilterOptionProps>;
}
