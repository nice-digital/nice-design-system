declare module "@nice-digital/nds-tabs" {
	import React = require("react");

	export interface TabProps {
		id?: string;
		title: React.ReactNode;
		children: React.ReactNode;
	}

	export const Tab: React.FC<TabProps>;

	export interface TabsProps {
		children: React.ReactNode<Tab> | React.ReactNode<Tab>[];
	}

	export const Tabs: React.FC<TabsProps>;
}
