import React from "react";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export interface FullBleedProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
	backgroundImage?: string;
	padding?: "small" | "medium" | "large";
	light?: boolean;
}

export const FullBleed = ({
	backgroundImage = undefined,
	className,
	children,
	padding = "small",
	light,
	...rest
}: FullBleedProps) => {
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
