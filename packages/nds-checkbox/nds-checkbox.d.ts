declare module "@nice-digital/nds-checkbox" {
	import React = require("react");

	export interface Props {
		name: string;
		label: React.ReactNode;
		value: string;
		inline?: boolean;
		error?: boolean;
	}

	export const Checkbox: React.FC<Props>;
}
