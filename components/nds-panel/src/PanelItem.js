import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const PanelItem = ({ children, className, icon } = {}) => {
	const classes = classnames("nds-panel__item", className);
	return (
		<div className={classes}>
			{icon && <i className={icon} />}
			{children}
		</div>
	);
};

PanelItem.PropTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.string
};
