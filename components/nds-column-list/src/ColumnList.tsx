import React from "react";
import "../scss/column-list.scss";

export interface ColumnListProps {
	children: React.ReactNode;
	plain?: boolean;
	className?: string;
	/** Number of columns on desktop-width screens */
	columns?: 2 | 3;
	[prop: string]: unknown;
}

export const ColumnList: React.FC<ColumnListProps> = (
	props: ColumnListProps
) => {
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
