import React from "react";
import "../scss/full-bleed.scss";
import classnames from "classnames";

export const fullBleedVariants = {
	dark: "dark",
	light: "light",
	transparent: "transparent",
	imageDark: "imageDark",
	imageLight: "imageLight"
} as const;

export interface FullBleedProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
	backgroundImage?: string;
	padding?: "small" | "medium" | "large";
	variant?: keyof typeof fullBleedVariants;
}

export const FullBleed = ({
	backgroundImage = undefined,
	className,
	children,
	padding = "small",
	variant,
	...rest
}: FullBleedProps) => {
	const style = backgroundImage
		? { style: { backgroundImage: `url("${backgroundImage}")` } }
		: undefined;
	return (
		<div
			data-component={`full-bleed${variant ? `--${variant}` : ""}`}
			{...style}
			className={classnames(
				"full-bleed",
				className,
				variant && `full-bleed--${variant}`,
				padding && "full-bleed--padding-" + padding
			)}
			{...rest}
		>
			{children}
		</div>
	);
};
