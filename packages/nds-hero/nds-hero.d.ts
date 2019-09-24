declare module "@nice-digital/nds-hero" {
	import React = require("react");

	export interface HeroProps {
		actions?: React.ReactNode;
		extra?: React.ReactNode;
		footer?: {
			elementType?: React.ElementType;
			content: React.ReactNode;
		};
		header?: ReactNode;
		intro?: React.ReactNode;
		title: React.ReactNode;
	}

	export const Hero: React.FC<HeroProps>;
}
