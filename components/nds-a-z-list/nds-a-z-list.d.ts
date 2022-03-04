declare module "@nice-digital/nds-a-z-list" {
	import React = require("react");

	export interface AZListProps {
		alphabet: React.ElementType;
		children: React.ReactNode;
		className?: string;
		[prop: string]: unknown;
	}

	export interface AZListItemProps {
		id?: string;
		title: string;
		children: React.ReactNode;
		className?: string;
		[prop: string]: unknown;
	}

	export const AZList: React.FC<AZListProps>;
	export const AZListItem: React.FC<AZListItemProps>;
}
