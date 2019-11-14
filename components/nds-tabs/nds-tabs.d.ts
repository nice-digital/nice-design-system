declare module "@nice-digital/nds-tabs" {
	import React = require("react");

	export interface TabProps {
		id?: string;
		title: string;
		children: React.ReactNode;
	}

	export const Tab: React.FC<TabProps>;

	export interface TabsProps {
		children: React.ReactNode | React.ReactNode[];
	}

	export const Tabs: React.FC<TabsProps>;
}
