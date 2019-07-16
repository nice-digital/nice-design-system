import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/button.scss";

const Button = props => {
	const { modifier, href, children, type, ...attributes } = { ...props };

	if (modifier && !Button.modifiers.some(m => m === modifier)) {
		throw new Error(
			`Expected modifier to be one of '${Button.modifiers.join(
				"', '"
			)}' but found '${modifier}'`
		);
	}

	const Tag = type === "anchor" || href ? "a" : "button";

	if (Tag === "button") attributes.type = type;
	else {
		attributes.href = href;
	}

	attributes.className = classnames({
		btn: true,
		[`btn--${modifier}`]: modifier
	});

	return <Tag {...attributes}>{children}</Tag>;
};

Button.modifiers = ["cta", "secondary", "inverse"];

Button.propTypes = {
	href: PropTypes.string,
	modifier: PropTypes.oneOf(Button.modifiers),
	type: PropTypes.oneOf(["anchor", "button", "submit", "reset"]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Button.defaultProps = {
	type: "button"
};

export default Button;
