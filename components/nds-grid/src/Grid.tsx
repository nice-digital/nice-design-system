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

export enum HorizontalAlignmentEnum {
	left = "left",
	center = "center",
	right = "right"
}

export enum VerticalAlignmentEnum {
	top = "top",
	middle = "middle",
	bottom = "bottom"
}

export enum GutterEnum {
	standard = "standard",
	none = "none",
	compact = "compact",
	loose = "loose"
}

export interface GridProps {
	/** Grid item elements */
	children: ValidGridItemProps[] | ValidGridItemProps;
	/** Renders grid items in the opposite way to the source order */
	reverse?: boolean;
	/** Make children of grid items ahve 100% height to fill the vertical space */
	equalHeight?: boolean;
	/** The horizontal alignment of items within the grid, when there are empty columns. Leave blank to default to left. */
	horizontalAlignment?: HorizontalAlignmentEnum;
	/** The vertical alignment of items within the grid. Leave blank to default to top. */
	verticalAlignment?: VerticalAlignmentEnum;
	/** The gap between grid cells. Leave blank to default to the standard gutter. */
	gutter?: GutterEnum;
	/** Debug puts a coloured outline around the grid and its cells */
	debug?: boolean;
	/** Additional classes to add to the grid, for example mt--e */
	className?: string;
	/** The type of DOM node to render for the grid. Leave blank to default to div. */
	elementType?: React.ElementType;
}

export const Grid: React.FC<GridProps> = (props) => {
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
		"grid--gutterless": gutter === GutterEnum.none,
		"grid--compact": gutter === GutterEnum.compact,
		"grid--loose": gutter === GutterEnum.loose,
		"grid--center": horizontalAlignment === HorizontalAlignmentEnum.center,
		"grid--right": horizontalAlignment === HorizontalAlignmentEnum.right,
		"grid--middle": verticalAlignment === VerticalAlignmentEnum.middle,
		"grid--bottom": verticalAlignment === VerticalAlignmentEnum.bottom,
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
