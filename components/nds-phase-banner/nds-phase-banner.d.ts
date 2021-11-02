declare module "@nice-digital/nds-phase-banner" {
	import React = require("react");

	interface BaseProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		className?: string;
	}

	export interface PhaseBannerAlpha extends BaseProps {
		alpha: boolean;
	}

	export interface PhaseBannerBeta extends BaseProps {
		beta: boolean;
	}

	export const PhaseBanner: React.FC<PhaseBannerAlpha | PhaseBannerBeta>;
}
