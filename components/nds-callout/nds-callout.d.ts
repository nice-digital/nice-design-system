declare module "@nice-digital/nds-callout" {
	import React = require("react");

	export interface CalloutImageProps {
		[prop: string]: unknown;
		children: React.ReactElement;
		className?: string;
	}

	export interface CalloutBodyProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		className?: string;
	}

	export interface CalloutProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		className?: string;
	}

	export const CalloutImage: React.FC<CalloutImageProps>;

	export const CalloutBody: React.FC<CalloutBodyProps>;

	export const Callout: React.FC<CalloutProps>;
}
