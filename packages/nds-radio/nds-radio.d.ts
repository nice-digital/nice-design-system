declare module "@nice-digital/nds-radio" {
	import React = require("react");

	export interface RadioProps {
		children?: React.ReactNode;
		disabled?: boolean;
		error?: boolean;
		group: string;
		inline?: boolean;
		label: string;
		value: string;
	}

	export const Radio: React.FC<RadioProps>;
}
