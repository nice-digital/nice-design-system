declare module "@nice-digital/nds-input" {
	import React = require("react");

	export interface InputProps {
		[prop: string]: unknown;
		defaultValue?: string;
		error?: boolean;
		errorMessage?: string;
		hint?: string;
		inputRef?: React.Ref<HTMLElement>;
		label: string | null;
		name: string;
		type?:
			| "color"
			| "date"
			| "datetime-local"
			| "email"
			| "file"
			| "hidden"
			| "image"
			| "month"
			| "number"
			| "range"
			| "password"
			| "search"
			| "tel"
			| "text"
			| "time"
			| "url"
			| "week";
	}

	export const Input: React.FC<InputProps>;
}
