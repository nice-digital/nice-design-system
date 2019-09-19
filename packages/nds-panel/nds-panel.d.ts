declare module "@nice-digital/nds-panel" {
	import React = require("react");

	export interface PanelProps {
		children: React.ReactNode;
		variant?: "supporting" | "primary" | "impact";
	}

	interface PanelComponent extends React.FC<PanelProps> {
		variant: {
			supporting: "supporting";
			impact: "impact";
			primary: "primary";
		};
	}

	export const Panel: PanelComponent;
}
