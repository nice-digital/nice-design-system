import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/table.scss";

export const Table = props => {
	const { striped, bordered, className, children, ...attributes } = props;

	const classNames = classnames({
		table: true,
		"table--striped": striped,
		"table--bordered": bordered,
		[className]: className && true
	});

	return (
		<table className={classNames} {...attributes}>
			{children}
		</table>
	);
};

Table.propTypes = {
	bordered: PropTypes.bool,
	striped: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};
