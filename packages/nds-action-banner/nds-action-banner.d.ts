declare module "@nice-digital/nds-action-banner" {
	import React = require("react");

	export interface ActionBannerProps {
		children: React.ReactNode;
		title: string;
		variant?: "default" | "subtle";
		cta?: React.ReactNode;
		onClosing?: (element: React.ReactElement) => void;
	}

	interface ActionBannerComponent extends React.Component<ActionBannerProps> {}

	export const ActionBanner: ActionBannerComponent;
}
