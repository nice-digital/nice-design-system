import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination totalPages={6} currentPage={1} />
		</>
	);
};

// Props we probably need - elementType, className, onClick,
