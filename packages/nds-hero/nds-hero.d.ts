declare module "@nice-digital/nds-hero" {
	import React = require("react");

	export interface HeroProps {
		title: React.ReactNode;
		intro?: React.ReactNode;
		actions?: React.ReactNode;
		extra?: React.ReactNode;
	}

	export const Hero: React.FC<HeroProps>;
}
