declare module "@nice-digital/nds-checkbox" {
	import React = require("react");

	export interface Props {
		/** The name attribute for the checkbox */
		name: string;
		/** The label for the checkbox. If none supplied will use the value */
		label?: React.ReactNode;
		/** The value for the checkbox */
		value: string;
		/** Add to checkboxes that you would like to display inline, left to right */
		inline?: boolean;
		/** Option for putting the checkbox into a visual error state. Set to true for error styling or supply a string for error styling and addional error text*/
		error?: boolean | string;
		/** Add hint text for extra context to the checkbox */
		hint?: string;
	}

	export const Checkbox: React.FC<Props>;
}
