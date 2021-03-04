declare module "@nice-digital/nds-full-bleed" {
	import React = require("react");

	export interface FullBleedProps {
		children: React.ReactNode;
		className?: string;
		backgroundImage?: {
			src?: string;
			elementType?: React.ElementType;
			className?: string;
		};
		padding?: "small" | "medium" | "large";
		light?: boolean;
	}

	export const FullBleed: React.FC<FullBleedProps>;
}
