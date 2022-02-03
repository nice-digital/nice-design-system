declare module "@nice-digital/nds-column-list" {
	import React = require("react");

	export interface ColumnListProps {
		children: React.ReactNode;
		plain?: boolean;
		className?: string;
		/** Number of columns on desktop-width screens */
		columns?: 2 | 3;
		[prop: string]: unknown;
	}

	export const ColumnList: React.FC<ColumnListProps>;
}
