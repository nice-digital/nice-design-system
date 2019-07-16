import React from "react";
import PropTypes from "prop-types";

import "./../scss/panel.scss";

export const Panel = props => {
	const { children, ...rest } = props;
	return (
		<div {...rest} className="panel">
			{children}
		</div>
	);
};

Panel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Panel.defaultProps = {};

export default Panel;
