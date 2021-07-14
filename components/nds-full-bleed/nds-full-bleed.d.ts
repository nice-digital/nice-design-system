declare module "@nice-digital/nds-full-bleed" {
	import React = require("react");

	export interface FullBleedProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		className?: string;
		backgroundImage?: string;
		padding?: "small" | "medium" | "large";
		light?: boolean;
	}

	export const FullBleed: React.FC<FullBleedProps>;
}
