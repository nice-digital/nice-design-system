import React, { ReactNode } from "react";
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

interface ActionBannerState {
	isClosed: boolean;
}

export class ActionBanner extends React.Component<
	ActionBannerProps,
	ActionBannerState
> {
	constructor(props: ActionBannerProps) {
		super(props);

		this.state = {
			isClosed: false
		};

		this.closeClickHandler = this.closeClickHandler.bind(this);
	}

	closeClickHandler() {
		this.setState({
			isClosed: true
		});

		if (typeof this.props.onClosing === "function") this.props.onClosing(this);
		else throw new Error("The onClosing prop should be a function");
	}

	render() {
		if (this.state.isClosed) return null;

		const { variant, onClosing, title, children, cta, className, ...rest } =
			this.props;

		const classes = {
			"action-banner": true,
			"action-banner--closeable": onClosing,
			[`action-banner--${variant}`]: variant,
			[`${className}`]: className
		};

		return (
			<section className={classnames(classes)} {...rest}>
				<div className="action-banner__container">
					<div className="action-banner__inner">
						<div className="action-banner__text">
							<h2 className="action-banner__title">{title}</h2>
							{children && (
								<div className="action-banner__intro">{children}</div>
							)}
						</div>
						{cta && <div className="action-banner__actions">{cta}</div>}
						{onClosing && (
							<button
								type="button"
								className="action-banner__close"
								onClick={this.closeClickHandler}
							>
								<RemoveIcon />
								<span className="visually-hidden">Close {title}</span>
							</button>
						)}
					</div>
				</div>
			</section>
		);
	}
}
