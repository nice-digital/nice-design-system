declare module "@nice-digital/nds-radio" {
	import React = require("react");

	export interface RadioProps {
		disabled?: boolean;
		error?: boolean | string;
		name?: string;
		inline?: boolean;
		label?: React.ReactNode;
		value: string;
		hint?: string;
	}

	export const Radio: React.FC<RadioProps>;
}
