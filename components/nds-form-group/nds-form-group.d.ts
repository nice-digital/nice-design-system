declare module "@nice-digital/nds-form-group" {
	import React = require("react");

	export interface FormGroupProps {
		[prop: string]: unknown;
		inline?: boolean;
		name?: string;
		hint?: React.ReactNode;
		legend?: string;
		children: React.ReactNode;
		groupError?: string | boolean;
	}

	export const FormGroup: React.FC<FormGroupProps>;
}
