declare module "@nice-digital/nds-action-banner" {
	import React = require("react");

	export interface ActionBannerProps {
		[prop: string]: unknown;
		children: React.ReactNode;
		title: string;
		variant?: "default" | "subtle";
		cta?: React.ReactNode;
		onClosing?: (element: React.ReactElement) => void;
	}

	export class ActionBanner extends React.Component<ActionBannerProps> {}
}
