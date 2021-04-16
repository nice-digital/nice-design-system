declare module "@nice-digital/nds-container" {
	import React = require("react");

	export interface ContainerProps {
		/** Contents for the container element */
		children: React.ReactNode;
		/** Additional classes to add to the container */
		className?: string;
		/** Allow the container to defy the max-width and extend to the edges of the viewport */
		fullWidth?: boolean;
		/** The type of DOM node to render for the container item. Leave blank to default to div. */
		elementType?: React.ElementType;
	}

	/** A wrapper to house child grids */
	export const Container: React.FC<ContainerProps>;
}
