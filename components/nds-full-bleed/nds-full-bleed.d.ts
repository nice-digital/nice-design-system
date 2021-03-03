declare module "@nice-digital/nds-full-bleed" {
	import React = require("react");

	export interface FullBleedProps {
		children: React.ReactNode;
		className?: string;
		backgroundImage?: React.ReactNode;
		padding?: "small" | "medium" | "large";
		light?: boolean;
	}

	export const FullBleed: React.FC<FullBleedProps>;
}
