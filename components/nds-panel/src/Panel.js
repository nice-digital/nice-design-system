import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./../scss/panel.scss";

export const Panel = props => {
	const { children, variant, className, ...rest } = props;

	const classes = classnames([
		"panel",
		className,
		variant ? "panel--" + variant : "panel--supporting"
	]);

	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
};

Panel.variant = {
	supporting: "supporting",
	impact: "impact",
	primary: "primary",
	inverse: "inverse",
	"impact-alt": "impact-alt"
};

Panel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	variant: PropTypes.oneOf([
		Panel.variant.supporting,
		Panel.variant.impact,
		Panel.variant.primary,
		Panel.variant.inverse,
		Panel.variant["impact-alt"]
	]),
	className: PropTypes.string
};
