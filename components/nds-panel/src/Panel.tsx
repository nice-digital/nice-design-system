import React from "react";
import classnames from "classnames";

import "./../scss/panel.scss";

export interface PanelProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
	variant?: "supporting" | "primary" | "impact" | "inverse" | "impact-alt";
}

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {
	const { children, variant, className, ...rest } = props;

	const classes = classnames([
		"panel",
		variant && "panel--" + variant,
		className
	]);

	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
};
