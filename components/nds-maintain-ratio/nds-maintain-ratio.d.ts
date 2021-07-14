declare module "@nice-digital/nds-maintain-ratio" {
	import React = require("react");

	export interface MaintainRatioProps {
		[prop: string]: unknown;
		ratio?: "16:9" | "21:9" | "4:3" | "square" | "1:1";
		className?: string;
		stretchFirstChild?: boolean;
		children: React.ReactNode;
	}

	export const MaintainRatio: React.FC<MaintainRatioProps>;
}
