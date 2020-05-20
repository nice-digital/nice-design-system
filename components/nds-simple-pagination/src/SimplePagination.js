import React from "react";
import PropTypes from "prop-types";

import "./../scss/simple-pagination.scss";

export const SimplePagination = props => {
	const { children } = props;
	return (
		<>
			<h1>Simple Pagination</h1>
			<div>{children}</div>
		</>
	);
};

SimplePagination.propTypes = {
	children: PropTypes.node
};
