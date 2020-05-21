declare module "@nice-digital/nds-simple-pagination" {
	import * as React from "react";

	export interface SimplePaginationProps {
		disabled?: boolean;
		error?: boolean | string;
		name?: string;
		inline?: boolean;
		label?: React.ReactNode;
		value: string;
		hint?: string;
	}

	export const SimplePagination: React.FC<any>;
}
