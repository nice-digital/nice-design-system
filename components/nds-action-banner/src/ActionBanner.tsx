import React, { ReactNode, useState } from "react";
// import classnames from "classnames";
// import RemoveIcon from "@nice-digital/icons/lib/Remove";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import "../scss/action-banner.scss";

interface ActionBannerProps {
	[prop: string]: unknown;
	heading: React.ReactNode;
	description: React.ReactNode;
	variant?: "default" | "subtle" | "fullWidth" | "fullWidthSubtle";
	cta?: ReactNode;
}

export const ActionBanner: React.FC<ActionBannerProps> = (
	props
): JSX.Element | null => {
	const { heading, description, variant, cta, ...rest } = props;

	const variantClasses = {
		subtle: "action-banner--subtle",
		fullWidthSubtle: "action-banner--full-width-subtle",
		fullWidth: "action-banner--full-width"
	};

	// Figure out variant
	const isFullWidth =
		variant === "fullWidth" || props.variant === "fullWidthSubtle";

	// TODO: Refactor this into some sort of conditional component
	// e.g. https://dev.to/dailydevtips1/conditional-wrapping-in-react-46o5
	const ActionBannerContent: React.FC = () => (
		<Grid>
			<GridItem md={{ cols: 12 }}>
				<h1 className="action-banner__heading">{heading}</h1>

				{description && (
					<div className="action-banner__description">{description}</div>
				)}

				{cta && <p className="action-banner__cta">{cta}</p>}
			</GridItem>
		</Grid>
	);

	return (
		<div
			className={`action-banner ${
				variant ? variantClasses[variant as keyof typeof variantClasses] : ""
			}`}
			data-component="action-banner"
			{...rest}
		>
			{isFullWidth ? (
				<div className="container">
					<ActionBannerContent />
				</div>
			) : (
				<ActionBannerContent />
			)}
		</div>
	);

	// return (
	// 	<section
	// 		className={classnames(classes)}
	// 		data-component={`action-banner${
	// 			props.variant ? `--${props.variant}` : ""
	// 		}`}
	// 		{...rest}
	// 	>
	// 		<div className="action-banner__container">
	// 			<div className="action-banner__inner">
	// 				<div className="action-banner__text">
	// 					<h2 className="action-banner__heading">{heading}</h2>
	// 					{children && <div className="action-banner__intro">{children}</div>}
	// 				</div>
	// 				{cta && <div className="action-banner__actions">{cta}</div>}
	// 				{onClosing && (
	// 					<button
	// 						type="button"
	// 						className="action-banner__close"
	// 						onClick={closeClickHandler}
	// 					>
	// 						<RemoveIcon />
	// 						<span className="visually-hidden">Close {heading}</span>
	// 					</button>
	// 				)}
	// 			</div>
	// 		</div>
	// 	</section>
	// );
};
