import React from "react";
import PropTypes from "prop-types";
import "../scss/callout.scss";
import classnames from "classnames";
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

export const Callout = ({ className, children, ...rest }) => {
	return (
		<div className={classnames("callout", className)} {...rest}>
			{children}
		</div>
	);
};

export const CalloutBody = ({ children, className, ...rest }) => {
	return (
		<div className={classnames("callout__body", className)} {...rest}>
			{children}
		</div>
	);
};

export const CalloutImage = ({ className, children, ...rest }) => {
	return (
		<div className={classnames("callout__image", className)} {...rest}>
			<MaintainRatio ratio="16:9">{children}</MaintainRatio>
		</div>
	);
};

Callout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

CalloutImage.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

CalloutBody.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};
