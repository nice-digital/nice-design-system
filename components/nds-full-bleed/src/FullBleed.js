import React from "react";
import PropTypes from "prop-types";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export const FullBleed = ({
	backgroundImage: BackgroundImage,
	className,
	children,
	padding,
	light,
	...rest
}) => {
	const contentClasses = classnames([
		"full-bleed__content",
		padding && "full-bleed--padding-" + padding
	]);
	return (
		<div
			className={classnames(
				"full-bleed",
				className,
				light && "full-bleed--light"
			)}
			{...rest}
		>
			{BackgroundImage && (
				<div className="full-bleed__image" aria-hidden="true">
					{BackgroundImage}
				</div>
			)}
			<div className={contentClasses}>{children}</div>
		</div>
	);
};

FullBleed.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	backgroundImage: PropTypes.node,
	padding: PropTypes.oneOf(["small", "medium", "large"]),
	light: PropTypes.bool
};
