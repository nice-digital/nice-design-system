import React from "react";
import PropTypes from "prop-types";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export const FullBleed = ({
	backgroundImage: BackgroundImage,
	className,
	children,
	...rest
}) => {
	return (
		<div className={classnames("full-bleed", className)} {...rest}>
			{BackgroundImage && (
				<div className="full-bleed__image">{BackgroundImage}</div>
			)}
			{children}
		</div>
	);
};

FullBleed.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	backgroundImage: PropTypes.node,
	padding: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};
