import React from "react";

export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type PullOrPush = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type BreakPointGridDefinition =
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

export const GridItem: React.FC<GridItemProps> = (props) => {
	const {
		children,
		cols = 12,
		push,
		pull,
		xs,
		sm,
		md,
		lg,
		xl,
		className,
		elementType: GridItemElementType = "div",
		...rest
	} = props;

	let gridColsAttr: string | string[] = [cols.toString()];

	if (push) gridColsAttr.push("push:" + push);
	if (pull) gridColsAttr.push("pull:" + pull);

	const bpGridDefs = { xs, sm, md, lg, xl };
	const mapBpToAttr = (bp: string): string | null => {
		const key = bp as keyof typeof bpGridDefs;
		const bpGridDef: BreakPointGridDefinition | undefined = bpGridDefs[key];

		if (!bpGridDef) return null;

		// E.g. "xs:6"
		if (typeof bpGridDef === "number") return bp + ":" + bpGridDef;

		// E.g. "xs:6 xs:push:3"
		const { cols, pull, push } = bpGridDef;
		let gridDefAttr = bp + ":" + cols;
		if (pull) gridDefAttr += ` ${bp}:pull:${pull}`;
		if (push) gridDefAttr += ` ${bp}:push:${push}`;
		return gridDefAttr;
	};

	const bpGridDefKeys = Object.keys(bpGridDefs).map(mapBpToAttr) as string[];

	gridColsAttr = gridColsAttr
		.concat(bpGridDefKeys)
		.filter((col) => col)
		.join(" ");

	return (
		<GridItemElementType
			data-g={gridColsAttr}
			data-component="grid-item"
			className={className}
			{...rest}
		>
			{children}
		</GridItemElementType>
	);
};
