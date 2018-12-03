// @flow
import React from "react";
import "../scss/button.scss";

type ButtonType = "anchor" | "button" | "submit" | "reset";

type ButtonPropsType = {
	text: ?string,
	href: ?string,
	modifier: string,
	type: ButtonType
};

const Button = (props: ButtonPropsType ) => {

	const { modifier, text, href, children, type, ...renderProps} = {...props };

	const modifierClass = modifier ? ` btn--${modifier}` : "",
		className = `btn${modifierClass}`;

	const content = text ? text : children;

	return (type === "anchor" ? (
		<a href={href}
			className={className}
			{...renderProps}>
			{ content }
		</a>
	) : (
		<button type={type}
			className={className}
			{...renderProps}>
			{ content }
		</button>
	));
};

Button.defaultProps = {
	type: "button"
};

export default Button;
