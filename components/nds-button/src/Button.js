import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/button.scss";

export const Button = (props) => {
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

	const possibleVariants = Object.keys(Button.variants);
	if (variant && !possibleVariants.some((m) => m === variant)) {
		throw new Error(
			`Expected variant to be one of '${possibleVariants.join(
				"', '"
			)}' but found '${variant}'`
		);
	}

	const ButtonTagType = elementType || (to ? "a" : "button");
	const buttonProps = {};

	if (to) {
		buttonProps[method || (ButtonTagType === "a" && "href") || "to"] = to;
	} else if (ButtonTagType === "button") {
		buttonProps.type = buttonType || Button.types.button;
	}

	buttonProps.className = classnames({
		btn: true,
		[`btn--${variant}`]: variant !== Button.variants.primary,
		[className]: !!className
	});

	return (
		<ButtonTagType {...buttonProps} {...attributes}>
			{children}
		</ButtonTagType>
	);
};

Button.types = {
	button: "button",
	submit: "submit",
	reset: "reset"
};

Button.variants = {
	cta: "cta",
	primary: "primary",
	secondary: "secondary",
	inverse: "inverse"
};

Button.propTypes = {
	to: PropTypes.string,
	variant: PropTypes.oneOf([
		Button.variants.primary,
		Button.variants.cta,
		Button.variants.secondary,
		Button.variants.inverse
	]),
	buttonType: PropTypes.oneOf([
		Button.types.button,
		Button.types.submit,
		Button.types.reset
	]),
	elementType: PropTypes.elementType,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	method: PropTypes.string
};
