import React, { ReactNode, useState } from "react";
import classnames from "classnames";
import RemoveIcon from "@nice-digital/icons/lib/Remove";

import "../scss/action-banner.scss";

interface ActionBannerProps {
	title: string;
	variant?: "default" | "subtle" | "fullWidth" | "fullWidthSubtle";
	children: ReactNode[] | ReactNode;
	cta?: ReactNode;
	onClosing?: Function;
	className?: string;
	image?: string;
}

export const ActionBanner: React.FC<ActionBannerProps> = (
	props
): JSX.Element | null => {
	const {
		variant,
		onClosing,
		title,
		children,
		cta,
		className,
		image,
		...rest
	} = props;

	const [isClosed, setIsClosed] = useState(false);

	const closeClickHandler = () => {
		setIsClosed(true);
		if (typeof onClosing === "function") onClosing();
		else throw new Error("The onClosing prop should be a function");
	};

	const kebabCaseVariantClassName = variant
		? `${variant.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
		: "";

	const classes = {
		"action-banner": true,
		"action-banner--closeable": onClosing,
		[`action-banner--${kebabCaseVariantClassName}`]: variant,
		[`${className}`]: className
	};

	if (isClosed) return null;

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
					{onClosing && (
						<button
							type="button"
							className="action-banner__close"
							onClick={closeClickHandler}
						>
							<RemoveIcon />
							<span className="visually-hidden">Close {title}</span>
						</button>
					)}
				</div>
			</div>
		</section>
	);
};
