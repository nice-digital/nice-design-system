declare module "@nice-digital/nds-table" {
	import React = require("react");

	export interface TableProps {
		className?: string;
		children: React.ReactNode;
	}

	export const Table: React.FC<TableProps>;
}
