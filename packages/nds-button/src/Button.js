// @flow
import * as React from "react";
import "../scss/button.scss";

type ButtonType = "anchor" | "button" | "submit" | "reset";
type ModifierClassType = "secondary" | "cta" | "inverse";

type ButtonPropsType = {
	href: ?string,
	modifier: ?ModifierClassType,
	type: ?ButtonType,
	children: React.Node
};

const Button = (props: ButtonPropsType ) => {

	const { modifier, href, children, type, ...renderProps} = {...props };

	if(modifier && !Button.modifiers[modifier]) {
		const allowedModifiers: string = Object.keys(Button.modifiers).join(", ");
		throw new Error(`Expected modifier to be one of ${allowedModifiers} but found '${ modifier }'`);
	}

	const modifierClass: string = modifier ? ` btn--${modifier}` : "",
		className: string = "btn" + modifierClass;

	if(type === "anchor")
		return <a href={href}
			className={className}
			{...renderProps}>
			{ children }
		</a>;

	return <button type={type}
		className={className}
		{...renderProps}>
		{ children }
	</button>;
};

Button.modifiers = {
	"cta": "cta",
	"secondary": "secondary",
	"inverse": "inverse"
};

Button.defaultProps = {
	type: "button"
};

export default Button;
