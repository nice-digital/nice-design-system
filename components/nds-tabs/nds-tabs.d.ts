declare module "@nice-digital/nds-tabs" {
	import React = require("react");

	export interface TabProps {
		[prop: string]: unknown;
		id?: string;
		title: string;
		children: React.ReactNode;
	}

	export const Tab: React.FC<TabProps>;

	export interface TabsProps {
		[prop: string]: unknown;
		children: React.ReactNode | React.ReactNode[];
		initialHash?: string;
		onTabChange?(hash: string): void;
	}

	export const Tabs: React.FC<TabsProps>;
}
