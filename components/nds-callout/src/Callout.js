import React from "react";
import PropTypes from "prop-types";
import "../scss/callout.scss";

export const Callout = ({ children }) => {
	return <h1>{children}</h1>;
};

Callout.propTypes = {
	children: PropTypes.node
};
