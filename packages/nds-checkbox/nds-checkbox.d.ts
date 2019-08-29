declare module "@nice-digital/nds-checkbox" {
	import React = require("react");

	export interface Props {
		monkey?: boolean;
	}

	export const Checkbox: React.FC<Props>;
}
