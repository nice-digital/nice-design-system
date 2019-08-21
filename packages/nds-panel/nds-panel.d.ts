declare module "@nice-digital/nds-panel" {
	import React = require("react");

	export interface PanelProps {
		children: React.ReactNode;
		variant?: "default" | "primary" | "impact";
	}

	export const Panel: React.FC<PanelProps>;
}
