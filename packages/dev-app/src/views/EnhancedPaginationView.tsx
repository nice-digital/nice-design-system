import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const pagesDestinations = [
	{ destination: "#1" },
	{ destination: "#2" },
	{ destination: "#3" },
	{ destination: "#4" },
	{ destination: "#5" },
	{ destination: "#6" },
	{ destination: "#7" },
	{ destination: "#8" },
	{ destination: "#9" }
];

const elementType = "button";
const method = "aMethod";

const aFunction = () => console.log("HIYA!!!!");

const nextPageDestination = "#somewhere";

const nextPageAction = {
	destination: "#somewhere",
	onClick: aFunction
};

const previousPageDestination = "#somewhereelse";
const previousPageAction = {
	destination: "#somewhereElse",
	function: aFunction
};

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination
				currentPage={3}
				elementType={elementType}
				method={method}
				nextPageDestination={nextPageDestination}
				previousPageDestination={previousPageDestination}
				pagesDestinations={pagesDestinations}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				onClick={aFunction}
			/>
		</>
	);
};
