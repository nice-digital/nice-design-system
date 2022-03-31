import React from "react";

// eslint-disable-next-line react/prop-types
export const Swatch = ({ colour }) => (
	<span className="storybook-swatch" style={{ background: colour }}></span>
);
