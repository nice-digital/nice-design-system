import React from "react";
import PropTypes from "prop-types";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export const FullBleed = ({
	backgroundImage = undefined,
	className,
	children,
	padding = "small",
	light,
	...rest
}) => {
	const style = backgroundImage
		? { style: { backgroundImage: `url("${backgroundImage}")` } }
		: undefined;
	return (
		<div
			{...style}
			className={classnames(
				"full-bleed",
				className,
				light && "full-bleed--light",
				padding && "full-bleed--padding-" + padding
			)}
			{...rest}
		>
			{children}
		</div>
	);
};

FullBleed.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	backgroundImage: PropTypes.string,
	padding: PropTypes.oneOf(["small", "medium", "large"]),
	light: PropTypes.bool
};
