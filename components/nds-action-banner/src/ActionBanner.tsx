import React, { ReactNode, useState } from "react";
import classnames from "classnames";
import RemoveIcon from "@nice-digital/icons/lib/Remove";

import "../scss/action-banner.scss";

interface ActionBannerProps {
	title: string;
	variant?: "default" | "subtle";
	children: ReactNode[] | ReactNode;
	cta?: ReactNode;
	onClosing?: Function;
	className?: string;
}

export const ActionBanner: React.FC<ActionBannerProps> = (props) => {
	const { variant, onClosing, title, children, cta, className, ...rest } =
		props;

	const [isClosed, setIsClosed] = useState(false);

	const closeClickHandler = () => {
		setIsClosed(true);
		if (typeof onClosing === "function") onClosing();
		else throw new Error("The onClosing prop should be a function");
	};

	const classes = {
		"action-banner": true,
		"action-banner--closeable": onClosing,
		[`action-banner--${variant}`]: variant,
		[`${className}`]: className
	};

	if (isClosed) return null;

	return (
		<section
			className={classnames(classes)}
			data-component={`action-banner${variant ? `--${variant}` : ""}`}
			{...rest}
		>
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
