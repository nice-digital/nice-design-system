declare module "@nice-digital/nds-button" {
	import React = require("react");

	interface ButtonProps
		extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
		/** The destination URL if this is an anchor */
		to?: string;
		variant?: "primary" | "cta" | "secondary" | "inverse" | "unstyled";
		buttonType?: "button" | "submit" | "reset";
		/** A custom element type to be rendered as the tag, useful for custom routing */
		elementType?: React.ElementType;
		/** Additional classes e.g. margin modifiers like "mt--0" */
		className?: string;
		children: React.ReactNode;
	}

	interface ButtonComponent extends React.FC<ButtonProps> {
		types: {
			button: "button";
			submit: "submit";
			reset: "reset";
		};
		variants: {
			cta: "cta";
			primary: "primary";
			secondary: "secondary";
			inverse: "inverse";
			unstyled: "unstyled";
		};
	}

	export const Button: ButtonComponent;
}
