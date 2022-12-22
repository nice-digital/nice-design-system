import React from "react";
import classnames from "classnames";

import "../scss/table.scss";

export interface TableProps {
	[prop: string]: unknown;
	className?: string;
	children: React.ReactNode;
}

export const Table: React.FC<TableProps> = (props: TableProps) => {
	const { className, children, ...attributes } = props;

	const classNames = classnames({
		table: true,
		[`${className}`]: className && true
	});

	return (
		<table className={classNames} {...attributes}>
			{children}
		</table>
	);
};
