declare module "@nice-digital/nds-forms" {
	import React from "react";
	import { InputProps } from "@nice-digital/nds-input";
	import { TextareaProps } from "@nice-digital/nds-textarea";
	export const Input: React.FC<InputProps>;
	export const Textarea: React.FC<TextareaProps>;
}
