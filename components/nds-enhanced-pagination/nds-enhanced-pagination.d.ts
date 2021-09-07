declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		pagesActions: ActionType[];
		previousPageAction: ActionType;
		nextPageAction: ActionType;
		elementType?: React.ElementType;
		method?: string;
	}

	export type ActionType = {
		destination?: string;
		onClick?: React.EventHandler;
	};

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
