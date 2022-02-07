import React from "react";
import PropTypes from "prop-types";
import "../scss/column-list.scss";

export const ColumnList = props => {
	const { children, plain, className, columns, ...attrs } = props;

	return (
		<ol
			className={[
				"column-list",
				plain ? "column-list--plain" : "column-list--boxed",
				columns === 2 ? "column-list--two-columns" : "",
				className
			]
				.filter(Boolean)
				.join(" ")}
			{...attrs}
		>
			{children}
		</ol>
	);
};

ColumnList.propTypes = {
	children: PropTypes.node.isRequired,
	plain: PropTypes.bool,
	className: PropTypes.string,
	columns: PropTypes.number
};
