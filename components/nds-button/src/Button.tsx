import * as React from "react";
import classnames from "classnames";

import "../scss/button.scss";

export const buttonVariants = {
	cta: "cta",
	primary: "primary",
	secondary: "secondary",
	inverse: "inverse"
} as const;

export const buttonTypes = {
	button: "button",
	submit: "submit",
	reset: "reset"
} as const;

export interface ButtonProps
	extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
	[prop: string]: unknown;
	/** The destination URL if this is an anchor */
	to?: string;
	variant?: keyof typeof buttonVariants;
	buttonType?: keyof typeof buttonTypes;
	/** A custom element type to be rendered as the tag, useful for custom routing */
	elementType?: React.ElementType;
	/** Additional classes e.g. margin modifiers like "mt--0" */
	className?: string;
	children: React.ReactNode;
	method?: string;
}

type customButtonProps = Omit<ButtonProps, "children">;

export const Button = (props: ButtonProps) => {
	const {
		variant = "primary",
		to,
		elementType,
		children,
		buttonType,
		className,
		method,
		...attributes
	} = props;

	const possibleVariants = Object.keys(buttonVariants);
	if (variant && !possibleVariants.some((m) => m === variant)) {
		throw new Error(
			`Expected variant to be one of '${possibleVariants.join(
				"', '"
			)}' but found '${variant}'`
		);
	}

	const ButtonTagType = elementType || (to ? "a" : "button");
	const buttonProps: customButtonProps = {};

	if (to) {
		buttonProps[method || (ButtonTagType === "a" && "href") || "to"] = to;
	} else if (ButtonTagType === "button") {
		buttonProps.type = buttonType || buttonTypes.button;
	}

	buttonProps.className = classnames({
		btn: true,
		[`btn--${variant}`]: variant !== buttonVariants.primary,
		[`${className}`]: !!className
	});

	return (
		<ButtonTagType {...buttonProps} {...attributes}>
			{children}
		</ButtonTagType>
	);
};

// Legacy references - deprecated!
Button.types = buttonTypes;
Button.variants = buttonVariants;
