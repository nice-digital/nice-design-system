declare module "@nice-digital/nds-prev-next" {
	import * as React from "react";

	interface PrevNextLink {
		text: string;
		destination: string;
		elementType?: React.ElementType;
		intro?: string;
		method?: string;
	}

	interface PrevNextProps {
		previousPageLink?: PrevNextLink;
		nextPageLink?: PrevNextLink;
	}

	export const PrevNext: React.FC<PrevNextProps>;
}
