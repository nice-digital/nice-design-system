import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const aFunction = () => console.log("HI!");

const pagesActions = [
	{ destination: "#1", onClick: aFunction },
	{ destination: "#2", onClick: aFunction },
	{ destination: "#3", onClick: aFunction },
	{ destination: "#4", onClick: aFunction },
	{ destination: "#5", onClick: aFunction },
	{ destination: "#6", onClick: aFunction },
	{ destination: "#7", onClick: aFunction },
	{ destination: "#8", onClick: aFunction },
	{ destination: "#9", onClick: aFunction }
];

const elementType = "button";
const method = "aMethod";

const nextPageAction = {
	destination: "#somewhere",
	onClick: aFunction
};

const previousPageAction = {
	destination: "#somewhereElse",
	onClick: aFunction
};

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination
				currentPage={3}
				elementType={elementType}
				method={method}
				pagesActions={pagesActions}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
			/>
		</>
	);
};
