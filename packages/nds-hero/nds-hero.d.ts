declare module "@nice-digital/nds-hero" {
	import React = require("react");

	export interface HeroProps {
		children?: React.ReactNode;
		groupError?: string | boolean;
		hint?: string;
		inline?: boolean;
		legend?: string;
		name?: string;
	}

	export const Hero: React.FC<HeroProps>;
}
