declare module "@nice-digital/nds-enhanced-pagination" {
	import * as React from "react";

	export interface EnhancedPaginationProps {
		[prop: string]: unknown;
		currentPage: number;
		pagesActions: ActionType[];
		previousPageAction: ActionType;
		nextPageAction: ActionType;
		totalPages: number;
		elementType?: React.ElementType;
		method?: string;
	}

	export type ActionType = {
		destination?: string;
		onClick?: React.EventHandler;
		pageNumber?: number;
	};

	export const EnhancedPagination: React.FC<EnhancedPaginationProps>;
}
