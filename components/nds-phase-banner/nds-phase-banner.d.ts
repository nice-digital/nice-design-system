declare module "@nice-digital/nds-phase-banner" {
	import React = require("react");

	export interface PhaseBannerProps {
		[prop: string]: unknown;
		alpha?: boolean;
		beta?: boolean;
		children: React.ReactNode;
		className?: string;
	}

	export const PhaseBanner: React.FC<PhaseBannerProps>;
}
