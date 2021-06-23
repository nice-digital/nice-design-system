declare module "@nice-digital/nds-prev-next" {
	import * as React from "react";

	interface PrevNextLink {
		[prop: string]: unknown;
		text: string;
		destination: string;
		elementType?: React.ElementType;
		intro?: string;
	}

	interface PrevNextProps {
		[prop: string]: unknown;
		previousPageLink?: PrevNextLink;
		nextPageLink?: PrevNextLink;
	}

	export const PrevNext: React.FC<PrevNextProps>;
}
