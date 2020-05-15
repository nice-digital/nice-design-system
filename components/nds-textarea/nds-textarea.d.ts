declare module "@nice-digital/nds-textarea" {
	import React = require("react");

	export interface TextareaProps {
		defaultValue?: string;
		error?: boolean;
		errorMessage?: string;
		hint?: string;
		label: string;
		name: string;
		textareaRef?: React.Ref<HTMLElement>;
	}

	export const Textarea: React.FC<TextareaProps>;
}
