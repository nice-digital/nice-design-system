import React, { ReactNode } from "react";
import classnames from "classnames";

import "../scss/action-banner.scss";

export interface ActionBannerProps {
	title: string;
	variant?: "default" | "subtle" | "fullWidth" | "fullWidthSubtle";
	children: ReactNode[] | ReactNode;
	cta: ReactNode;
	className?: string;
	image?: string;
	headingLevel?: number | string;
}

export const ActionBanner: React.FC<ActionBannerProps> = (
	props
): JSX.Element | null => {
	const {
		variant,
		title,
		children,
		cta,
		className,
		image,
		headingLevel = 2,
		...rest
	} = props;

	const kebabCaseVariantClassName = variant
		? `${variant.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
		: "";

	const classes = {
		"action-banner": true,
		[`action-banner--${kebabCaseVariantClassName}`]: variant,
		[`${className}`]: className
	};

	const parsedHeadingLevel =
		typeof headingLevel === "string"
			? parseInt(headingLevel, 10)
			: headingLevel;

	const validHeadingLevel =
		parsedHeadingLevel >= 2 && parsedHeadingLevel <= 6 ? parsedHeadingLevel : 2;

	const HeadingLevel = `h${validHeadingLevel}` as keyof JSX.IntrinsicElements;

	return (
		<section
			className={classnames(classes)}
			data-component={`action-banner${variant ? `--${variant}` : ""}`}
			{...rest}
		>
			{(variant === "fullWidth" || variant === "fullWidthSubtle") && image && (
				<div
					className={`action-banner--${kebabCaseVariantClassName}__image-container`}
					style={{ backgroundImage: `url(${image})` }}
				></div>
			)}
			<div className="action-banner__container">
				<div className="action-banner__inner">
					<div className="action-banner__text">
						<HeadingLevel className="action-banner__title">
							{title}
						</HeadingLevel>
						{children && <div className="action-banner__intro">{children}</div>}
					</div>
					{cta && <div className="action-banner__actions">{cta}</div>}
				</div>
			</div>
		</section>
	);
};
