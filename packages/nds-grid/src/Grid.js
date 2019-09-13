import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/grid.scss";

import { GridItem } from "./GridItem";

export { GridItem };

export const Grid = props => {
	const {
		children,
		reverse,
		gutter,
		horizontalAlignment,
		verticalAlignment,
		debug,
		className,
		...rest
	} = props;

	const classNames = classnames({
		grid: true,
		"grid--rev": reverse,
		"grid--gutterless": gutter === Grid.gutter.none,
		"grid--compact": gutter === Grid.gutter.compact,
		"grid--loose": gutter === Grid.gutter.loose,
		"grid--center": horizontalAlignment === Grid.horizontalAlignment.center,
		"grid--right": horizontalAlignment === Grid.horizontalAlignment.right,
		"grid--middle": verticalAlignment === Grid.verticalAlignment.middle,
		"grid--bottom": verticalAlignment === Grid.verticalAlignment.bottom,
		"grid--debug": debug,
		[className]: className
	});
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

Grid.gutter = {
	none: "none",
	standard: "standard",
	compact: "compact",
	loose: "loose"
};

Grid.horizontalAlignment = {
	left: "left",
	center: "center",
	right: "right"
};

Grid.verticalAlignment = {
	top: "top",
	middle: "middle",
	bottom: "bottom"
};

Grid.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired,
	reverse: PropTypes.bool,
	horizontalAlignment: PropTypes.oneOf([
		Grid.horizontalAlignment.left,
		Grid.horizontalAlignment.center,
		Grid.horizontalAlignment.right
	]),
	verticalAlignment: PropTypes.oneOf([
		Grid.verticalAlignment.top,
		Grid.verticalAlignment.middle,
		Grid.verticalAlignment.bottom
	]),
	gutter: PropTypes.oneOf([
		Grid.gutter.standard,
		Grid.gutter.none,
		Grid.gutter.compact,
		Grid.gutter.loose
	]),
	debug: PropTypes.bool,
	className: PropTypes.string
};

Grid.defaultProps = {
	reverse: false,
	gutter: Grid.gutter.standard,
	horizontalAlignment: Grid.horizontalAlignment.left,
	verticalAlignment: Grid.verticalAlignment.top
};
