import React from "react";
import PropTypes from "prop-types";

export const GridItem = props => {
	const {
		children,
		cols,
		push,
		pull,
		xs,
		sm,
		md,
		lg,
		xl,
		className,
		...rest
	} = props;

	let gridCols = cols.toString();

	if (push) gridCols += " push:" + push;
	if (pull) gridCols += " pull:" + pull;

	if (xs) {
		gridCols += " xs:" + xs;
	}
	if (sm) {
		gridCols += " sm:" + sm;
	}
	if (md) {
		gridCols += " md:" + md;
	}
	if (lg) {
		gridCols += " lg:" + lg;
	}
	if (xl) {
		gridCols += " xl:" + xl;
	}

	return (
		<div data-g={gridCols} className={className} {...rest}>
			{children}
		</div>
	);
};

const GridItemBreakPointPropType = PropTypes.oneOf([
	PropTypes.number,
	PropTypes.shape({
		cols: PropTypes.number.isRequired,
		push: PropTypes.number,
		pull: PropTypes.number
	})
]);

GridItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	cols: PropTypes.number.isRequired,
	push: PropTypes.number,
	pull: PropTypes.number,
	xs: GridItemBreakPointPropType,
	sm: GridItemBreakPointPropType,
	md: GridItemBreakPointPropType,
	lg: GridItemBreakPointPropType,
	xl: GridItemBreakPointPropType,
	className: PropTypes.string
};
