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

	interface CardImageProps {
		src: string;
		alt?: string;
	}

	export interface CardProps {
		children?: React.ReactNode;
		elementType?: React.ElementType;
		headingElementType?: React.ElementType;
		headingText: React.ReactNode;
		image?: CardImageProps;
		link?: CardHeadingLinkProps;
		metadata?: Array<CardMetaDataProps>;
	}

	export const Card: React.FC<CardProps>;
}
