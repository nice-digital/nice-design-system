import React from "react";
import classnames from "classnames";
import "../scss/hero.scss";

export interface HeroProps {
	[prop: string]: unknown;
	actions?: React.ReactNode;
	extra?: React.ReactNode;
	footer?: React.ReactNode;
	header?: React.ReactNode;
	intro?: React.ReactNode;
	title: React.ReactNode;
	className?: string;
	children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
	const {
		actions,
		children,
		footer,
		header,
		intro,
		title,
		className,
		...rest
	} = props;
	return (
		<div className={classnames(["hero", className])} {...rest}>
			<div className="hero__container">
				{header && header}
				<div className="hero__body">
					<div className="hero__copy">
						<h1 className="hero__title">{title}</h1>
						{intro && <p className="hero__intro">{intro}</p>}
						{actions && <div className="hero__actions">{actions}</div>}
					</div>
					{children && <div className="hero__extra">{children}</div>}
				</div>
				{footer && <div className="hero__footer">{footer}</div>}
			</div>
		</div>
	);
};
