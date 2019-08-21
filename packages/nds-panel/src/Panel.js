import React from "react";
import PropTypes from "prop-types";

import "./../scss/panel.scss";

export const Panel = props => {
	const { children, variant, className, ...rest } = props;

	const panelClasses = ["panel"];

	switch (variant) {
		case Panel.variants.impact:
			panelClasses.push("panel--impact");
			break;
		case Panel.variants.primary:
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

Panel.variants = {
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
		Panel.variants.supporting,
		Panel.variants.impact,
		Panel.variants.primary
	]),
	className: PropTypes.string
};

Panel.defaultProps = { variant: Panel.variants.supporting };
