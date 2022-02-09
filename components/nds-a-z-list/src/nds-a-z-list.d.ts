declare module "@nice-digital/nds-a-z-list" {
	import React = require("react");

	export interface AZListProps {
		alphabet: React.ReactNode;
		children: React.ReactNode;
		className?: string;
		[prop: string]: unknown;
	}

	export interface AZListItemProps {
		title: string;
		children: React.ReactNode;
	}

	export const AZList: React.FC<AZListProps>;
	export const AZListItem: React.FC<AZListItemProps>;
}
