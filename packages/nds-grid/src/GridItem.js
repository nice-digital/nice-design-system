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
		elementType: GridItemElementType,
		...rest
	} = props;

	let gridColsAttr = [cols.toString()];

	if (push) gridColsAttr.push("push:" + push);
	if (pull) gridColsAttr.push("pull:" + pull);

	const bpGridDefs = { xs, sm, md, lg, xl };
	const mapBpToAttr = bp => {
		const bpGridDef = bpGridDefs[bp];

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
	gridColsAttr = gridColsAttr
		.concat(Object.keys(bpGridDefs).map(mapBpToAttr))
		.filter(col => col)
		.join(" ");

	return (
		<GridItemElementType data-g={gridColsAttr} className={className} {...rest}>
			{children}
		</GridItemElementType>
	);
};

const breakpointPropType = PropTypes.oneOfType([
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
	xs: breakpointPropType,
	sm: breakpointPropType,
	md: breakpointPropType,
	lg: breakpointPropType,
	xl: breakpointPropType,
	className: PropTypes.string,
	elementType: PropTypes.elementType
};

GridItem.defaultProps = {
	elementType: "div"
};
