import React from "react";
import PropTypes from "prop-types";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export const FullBleed = ({
	backgroundImage = null,
	className,
	children,
	padding,
	light,
	...rest
}) => {
	const {
		src,
		elementType: ElementType = "img",
		className: imgClassName,
		...imgRest
	} = backgroundImage;
	return (
		<div
			style={
				src && {
					backgroundImage: `url("${src}")`
				}
			}
			className={classnames(
				"full-bleed",
				className,
				light && "full-bleed--light"
			)}
			{...rest}
		>
			{backgroundImage && (
				<ElementType
					src={src}
					className={classnames("full-bleed__image", imgClassName)}
					aria-hidden="true"
					{...imgRest}
				/>
			)}
			<div
				className={classnames([
					"full-bleed__content",
					padding && "full-bleed__content--padding-" + padding
				])}
			>
				{children}
			</div>
		</div>
	);
};

FullBleed.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	backgroundImage: PropTypes.shape({
		src: PropTypes.string,
		elementType: PropTypes.elementType,
		className: PropTypes.string
	}),
	padding: PropTypes.oneOf(["small", "medium", "large"]),
	light: PropTypes.bool
};
