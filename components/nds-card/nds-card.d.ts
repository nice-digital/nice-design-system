declare module "@nice-digital/nds-card" {
	import React = require("react");

	interface CardHeadingLinkProps {
		[prop: string]: unknown;
		destination?: string;
		elementType?: React.ElementType;
	}

	interface CardMetaDataProps {
		[prop: string]: unknown;
		label?: string;
		value: React.ReactNode;
	}

	export interface CardProps {
		[prop: string]: unknown;
		summary?: React.ReactNode;
		elementType?: React.ElementType;
		headingElementType?: React.ElementType;
		headingText: React.ReactNode;
		image?: React.ReactNode;
		link?: CardHeadingLinkProps;
		metadata?: Array<CardMetaDataProps>;
	}

	export const Card: React.FC<CardProps>;
}
