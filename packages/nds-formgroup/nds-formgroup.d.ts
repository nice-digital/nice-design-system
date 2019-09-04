declare module "@nice-digital/nds-formgroup" {
	import React = require("react");

	export interface FormGroupProps {
		inline?: boolean;
		name?: string;
		hint?: string;
		legend?: string;
		children: React.ReactNode;
		groupError?: string | boolean;
	}

	export const FormGroup: React.FC<FormGroupProps>;
}
