declare module "@nice-digital/nds-table" {
	import React = require("react");

	export interface TableProps {
		className?: string;
		striped?: boolean;
		bordered?: boolean;
		children: React.ReactNode;
	}

	export const Table: React.FC<TableProps>;
}
