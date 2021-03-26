declare module "@nice-digital/nds-grid" {
	import React = require("react");

	type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	type PullOrPush = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
	type BreakPointGridDefinition =
		| Columns
		| {
				/** The number of columns at this breakpoint */
				cols: Columns;
				/** The number of columns to pull at this breakpoint */
				pull?: PullOrPush;
				/** The number of columns to push at this breakpoint */
				push?: PullOrPush;
		  };

	export interface GridItemProps {
		/** Contents of the grid item */
		children: React.ReactNode;
		/** The number of columns for the first (smallest) screen size */
		cols?: Columns;
		/** The number of columns to pull the grid item for the first (smallest) screen size */
		pull?: PullOrPush;
		/** The number of columns to push the grid item for the first (smallest) screen size */
		push?: PullOrPush;
		/** Grid definition from the xs breakpoint */
		xs?: BreakPointGridDefinition;
		/** Grid definition from the sm breakpoint */
		sm?: BreakPointGridDefinition;
		/** Grid definition from the md breakpoint */
		md?: BreakPointGridDefinition;
		/** Grid definition from the lg breakpoint */
		lg?: BreakPointGridDefinition;
		/** Grid definition from the xl breakpoint */
		xl?: BreakPointGridDefinition;
		/** Additional classes to add to the grid, for example mt--e */
		className?: string;
		/** The type of DOM node to render for the grid item. Leave blank to default to div. */
		elementType?: React.ElementType;
	}

	/** An item within the grid than spans up to 12 columnns */
	export const GridItem: React.FC<GridItemProps>;

	type ValidGridItemProps =
		| React.ReactElement<GridItem>
		| boolean
		| null
		| undefined;

	export interface GridProps {
		/** Grid item elements */
		children: ValidGridItemProps[] | ValidGridItemProps;
		/** Renders grid items in the opposite way to the source order */
		reverse?: boolean;
		/** Make children of grid items ahve 100% height to fill the vertical space */
		equalHeight?: boolean;
		/** The horizontal alignment of items within the grid, when there are empty columns. Leave blank to default to left. */
		horizontalAlignment?: "left" | "center" | "right";
		/** The vertical alignment of items within the grid. Leave blank to default to top. */
		verticalAlignment?: "top" | "middle" | "bottom";
		/** The gap between grid cells. Leave blank to default to the standard gutter. */
		gutter?: "standard" | "none" | "compact" | "loose";
		/** Debug puts a coloured outline around the grid and its cells */
		debug?: boolean;
		/** Additional classes to add to the grid, for example mt--e */
		className?: string;
		/** The type of DOM node to render for the grid. Leave blank to default to div. */
		elementType?: React.ElementType;
	}

	interface GridComponent extends React.FC<GridProps> {
		gutter: {
			none: "none";
			standard: "standard";
			compact: "compact";
			loose: "loose";
		};
		horizontalAlignment: {
			left: "left";
			center: "center";
			right: "right";
		};
		verticalAlignment: {
			top: "top";
			middle: "middle";
			bottom: "bottom";
		};
	}

	/** A mobile first, 12 columns grid component */
	export const Grid: GridComponent;

	export interface ContainerProps {
		/** Contents for the container element */
		children: React.ReactNode;
		/** Additional classes to add to the container */
		className?: string;
		/** Allow the container to defy the max-width and extend to the edges of the viewport */
		fullWidth?: boolean;
		/** The type of DOM node to render for the container item. Leave blank to default to div. */
		elementType?: React.ElementType;
	}

	/** A wrapper to house child grids */
	export const Container: React.FC<ContainerProps>;
}
