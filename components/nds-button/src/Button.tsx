import * as React from "react";
import classnames from "classnames";

import "../scss/button.scss";

interface ButtonProps
	extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
	[prop: string]: unknown;
	/** The destination URL if this is an anchor */
	to?: string;
	variant?: "primary" | "cta" | "secondary" | "inverse";
	buttonType?: "button" | "submit" | "reset";
	/** A custom element type to be rendered as the tag, useful for custom routing */
	elementType?: React.ElementType;
	/** Additional classes e.g. margin modifiers like "mt--0" */
	className?: string;
	children: React.ReactNode;
	method?: string;
}

type customButtonProps = Omit<ButtonProps, "children">;

const ButtonTypes = {
	button: "button",
	submit: "submit",
	reset: "reset"
};

const ButtonVariants = {
	cta: "cta",
	primary: "primary",
	secondary: "secondary",
	inverse: "inverse"
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
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

	const possibleVariants = Object.keys(ButtonVariants);
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
		buttonProps.type = buttonType || ButtonTypes.button;
	}

	buttonProps.className = classnames({
		btn: true,
		[`btn--${variant}`]: variant !== ButtonVariants.primary,
		[`${className}`]: !!className
	});

	return (
		<ButtonTagType {...buttonProps} {...attributes}>
			{children}
		</ButtonTagType>
	);
};
