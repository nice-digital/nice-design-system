declare module "@nice-digital/nds-card" {
	import React = require("react");

	interface CardHeadingProps {
		headingText: string;
		destination?: string;
		linkTag?: React.ReactNode;
		headingTag?: string;
	}

	interface CardMetaDataProps {
		label?: string;
		value: React.ReactNode;
	}

	export interface CardProps {
		heading: CardHeadingProps;
		metadata?: Array<CardMetaDataProps>;
	}

	export const Card: React.FC<CardProps>;
}
