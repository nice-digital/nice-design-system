declare module "@nice-digital/nds-full-bleed" {
	import React = require("react");

	export interface FullBleedProps {
		children: React.ReactNode;
		className?: string;
		backgroundImage?: React.ReactNode;
		padding?: 1 | 2 | 3 | 4 | 5 | 6;
	}

	export const FullBleed: React.FC<FullBleedProps>;
}
