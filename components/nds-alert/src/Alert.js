import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/alert.scss";

const allowedTypes = ["info", "caution", "error", "success"];

export const Alert = (props) => {
	const { children, type, ...rest } = props;
	const classNames = classnames({
		alert: true,
		[`alert--${type}`]: true
	});
	return (
		<div {...rest} className={classNames}>
			{children}
		</div>
	);
};

Alert.propTypes = {
	type: PropTypes.oneOf(allowedTypes),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Alert.defaultProps = {
	type: "info"
};
