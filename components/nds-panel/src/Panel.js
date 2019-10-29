import React from "react";
import PropTypes from "prop-types";

import "./../scss/panel.scss";

export const Panel = props => {
	const { children, variant, className, ...rest } = props;

	const panelClasses = ["panel"];

	switch (variant) {
		case Panel.variant.impact:
			panelClasses.push("panel--impact");
			break;
		case Panel.variant.primary:
			panelClasses.push("panel--primary");
			break;
		default:
			break;
	}

	if (className) panelClasses.push(className);

	return (
		<div className={panelClasses.join(" ")} {...rest}>
			{children}
		</div>
	);
};

Panel.variant = {
	supporting: "supporting",
	impact: "impact",
	primary: "primary"
};

Panel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	variant: PropTypes.oneOf([
		Panel.variant.supporting,
		Panel.variant.impact,
		Panel.variant.primary
	]),
	className: PropTypes.string
};

Panel.defaultProps = { variant: Panel.variant.supporting };
