declare module "@nice-digital/nds-panel" {
	import React = require("react");

	export interface PanelProps {
		children: React.ReactNode;
		variant?: "supporting" | "primary" | "impact" | "inverse" | "impact-alt";
	}

	interface PanelComponent extends React.FC<PanelProps> {
		variant: {
			supporting: "supporting";
			impact: "impact";
			primary: "primary";
			inverse: "inverse";
			"impact-alt": "impact-alt";
		};
	}

	export const Panel: PanelComponent;
}
