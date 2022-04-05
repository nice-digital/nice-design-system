// A swatch used to demonstrate a colour value

import React from "react";
import PropTypes from "prop-types";

export const Swatch = ({ colour }) => (
	<span className="storybook-swatch" style={{ background: colour }}></span>
);

Swatch.propTypes = {
	colour: PropTypes.string.isRequired
};
