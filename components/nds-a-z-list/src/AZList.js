import React from "react";
import PropTypes from "prop-types";
import "../scss/a-z-list.scss";

export const AZList = props => {
	const { children, className, ...attrs } = props;

	return (
		<ol className={["a-z-ist", className]} {...attrs}>
			{children}
		</ol>
	);
};

AZList.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};
