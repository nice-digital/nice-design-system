declare module "@nice-digital/nds-in-page-nav" {
	import React = require("react");

	export interface InPageNavProps {
		[prop: string]: unknown;
		className?: string;
		headingsContainerSelector?: string;
		headingsSelector?: string;
		headingsExcludeSelector?: string;
		scrollTolerance?: number;
	}

	export const InPageNav: React.FC<InPageNavProps>;
}
