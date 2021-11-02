declare module "@nice-digital/nds-hero" {
	import React = require("react");

	export interface HeroProps {
		[prop: string]: unknown;
		actions?: React.ReactNode;
		extra?: React.ReactNode;
		footer?: React.ReactNode;
		header?: React.ReactNode;
		intro?: React.ReactNode;
		title: React.ReactNode;
		className?: string;
	}

	export const Hero: React.FC<HeroProps>;
}
