import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/table.scss";

export const Table = props => {
	const { className, children, ...attributes } = props;

	const classNames = classnames({
		table: true,
		[className]: className && true
	});

	return (
		<table className={classNames} {...attributes}>
			{children}
		</table>
	);
};

Table.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};
