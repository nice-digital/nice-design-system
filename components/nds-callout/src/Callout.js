import React from "react";
import PropTypes from "prop-types";
import "../scss/callout.scss";
import classnames from "classnames";
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

export const Callout = ({ className, children, ...rest }) => {
	return (
		<div className={classnames("callout", className)} {...rest}>
			{children}
		</div>
	);
};

export const Body = ({ children, ...rest }) => {
	return (
		<div className="callout__body" {...rest}>
			{children}
		</div>
	);
};

export const Image = ({ src, alt, className, ...rest }) => {
	const imageProps = {
		src,
		alt,
		className: classnames("callout__image", className),
		...rest
	};
	return (
		<MaintainRatio ratio="16:9">
			<img {...imageProps} />
		</MaintainRatio>
	);
};

Callout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	rest: PropTypes.object
};

Body.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};
