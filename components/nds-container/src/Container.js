import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "../scss/container.scss";

export const Container = (props) => {
	const {
		children,
		className,
		elementType: ElementType = "div",
		fullWidth,
		...rest
	} = props;

	const classes = classnames([
		"container",
		fullWidth && "container--full",
		className
	]);

	return (
		<ElementType className={classes} {...rest}>
			{children}
		</ElementType>
	);
};

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string,
	elementType: PropTypes.elementType,
	fullWidth: PropTypes.bool
};
