import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { GridItem } from "./GridItem";
import "../scss/grid.scss";
export { GridItem };

type ValidGridItemProps =
	| React.ReactElement<typeof GridItem>
	| boolean
	| null
	| undefined;

export const gutterTypes = {
	standard: "standard",
	none: "none",
	compact: "compact",
	loose: "loose"
} as const;

export const horizontalAlignmentTypes = {
	left: "left",
	center: "center",
	right: "right"
} as const;

export const verticalAlignmentTypes = {
	top: "top",
	middle: "middle",
	bottom: "bottom"
} as const;

export interface GridProps {
	/** Grid item elements */
	children: ValidGridItemProps[] | ValidGridItemProps;
	/** Renders grid items in the opposite way to the source order */
	reverse?: boolean;
	/** Make children of grid items ahve 100% height to fill the vertical space */
	equalHeight?: boolean;
	/** The horizontal alignment of items within the grid, when there are empty columns. Leave blank to default to left. */
	horizontalAlignment?: keyof typeof horizontalAlignmentTypes;
	/** The vertical alignment of items within the grid. Leave blank to default to top. */
	verticalAlignment?: keyof typeof verticalAlignmentTypes;
	/** The gap between grid cells. Leave blank to default to the standard gutter. */
	gutter?: keyof typeof gutterTypes;
	/** Debug puts a coloured outline around the grid and its cells */
	debug?: boolean;
	/** Additional classes to add to the grid, for example mt--e */
	className?: string;
	/** The type of DOM node to render for the grid. Leave blank to default to div. */
	elementType?: React.ElementType;
}

export const Grid = (props: GridProps) => {
	const {
		children,
		reverse,
		equalHeight,
		gutter,
		horizontalAlignment,
		verticalAlignment,
		debug,
		className,
		elementType,
		...rest
	} = props;

	const classNames = classnames({
		grid: true,
		"grid--rev": reverse,
		"grid--equal-height": equalHeight,
		"grid--gutterless": gutter === gutterTypes.none,
		"grid--compact": gutter === gutterTypes.compact,
		"grid--loose": gutter === gutterTypes.loose,
		"grid--center": horizontalAlignment === horizontalAlignmentTypes.center,
		"grid--right": horizontalAlignment === horizontalAlignmentTypes.right,
		"grid--middle": verticalAlignment === verticalAlignmentTypes.middle,
		"grid--bottom": verticalAlignment === verticalAlignmentTypes.bottom,
		"grid--debug": debug,
		[`${className}`]: className
	});

	const GridElementType = elementType || "div";

	return (
		<GridElementType className={classNames} {...rest}>
			{children}
		</GridElementType>
	);
};

// Legacy references - deprecated!
Grid.gutter = gutterTypes;
Grid.horizontalAlignment = horizontalAlignmentTypes;
Grid.verticalAlignment = verticalAlignmentTypes;
