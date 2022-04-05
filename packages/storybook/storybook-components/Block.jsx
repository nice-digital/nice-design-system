// Just a coloured block! Useful for demonstrating sizes etc.

import React from "react";
import PropTypes from "prop-types";

export const Block = ({ width }) => (
	<span className={`storybook-block storybook-block--${width}`}></span>
);

Block.propTypes = {
	width: PropTypes.string.isRequired
};
