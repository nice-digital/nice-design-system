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
}

export const ActionBanner: React.FC<ActionBannerProps> = (
	props
): JSX.Element | null => {
	const { variant, title, children, cta, className, image, ...rest } = props;

	const kebabCaseVariantClassName = variant
		? `${variant.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
		: "";

	const classes = {
		"action-banner": true,
		[`action-banner--${kebabCaseVariantClassName}`]: variant,
		[`${className}`]: className
	};

	return (
		<section
			className={classnames(classes)}
			data-component={`action-banner${variant ? `--${variant}` : ""}`}
			{...rest}
		>
			{image && variant === "fullWidth" ? (
				<div
					className="action-banner--full-width__image-container"
					style={{ backgroundImage: `url(${image})` }}
				></div>
			) : null}
			<div className="action-banner__container">
				<div className="action-banner__inner">
					<div className="action-banner__text">
						<h2 className="action-banner__title">{title}</h2>
						{children && <div className="action-banner__intro">{children}</div>}
					</div>
					{cta && <div className="action-banner__actions">{cta}</div>}
				</div>
			</div>
		</section>
	);
};
