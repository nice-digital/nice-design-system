import React from "react";
import PropTypes from "prop-types";

export const Tab = props => {
	return null;
};

Tab.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Tab.defaultProps = {};

export default Tab;
