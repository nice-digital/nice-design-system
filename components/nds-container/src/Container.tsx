import React from "react";
import classnames from "classnames";
import "../scss/container.scss";

export interface ContainerProps {
	/** Allow any additional props to be passed and applied to the container */
	[prop: string]: unknown;
	/** Contents for the container element */
	children: React.ReactNode;
	/** Additional classes to add to the container */
	className?: string;
	/** Allow the container to defy the max-width and extend to the edges of the viewport */
	fullWidth?: boolean;
	/** The type of DOM node to render for the container item. Leave blank to default to div. */
	elementType?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
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
