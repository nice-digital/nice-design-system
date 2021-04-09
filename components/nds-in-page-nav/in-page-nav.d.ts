declare module "@nice-digital/nds-in-page-nav" {
	import React = require("react");

	export interface InPageNavProps {
		className?: string;
		headingsContainerSelector?: string;
		headingsSelector?: string;
		headingsExcludeSelector?: string;
		scrollTolerance?: number;
		[prop: string]: unknown;
	}

	export const InPageNav: React.FC<InPageNavProps>;
}
