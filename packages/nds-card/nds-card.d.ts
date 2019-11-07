declare module "@nice-digital/nds-card" {
	import React = require("react");

	interface CardHeadingLinkProps {
		destination?: string;
		elementType?: React.ElementType;
	}

	interface CardMetaDataProps {
		label?: string;
		value: React.ReactNode;
	}

	export interface CardProps {
		headingText: string;
		containerElementType: React.ElementType;
		elementType?: React.ElementType;
		link?: CardHeadingLinkProps;
		metadata?: Array<CardMetaDataProps>;
	}

	export const Card: React.FC<CardProps>;
}
