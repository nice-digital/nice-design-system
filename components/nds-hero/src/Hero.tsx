import React from "react";
import classnames from "classnames";
import "../scss/hero.scss";

export interface HeroProps {
	[prop: string]: unknown;
	header?: React.ReactNode;
	title: React.ReactNode;
	intro?: React.ReactNode;
	actions?: React.ReactNode;
	image?: string;
	isDark?: boolean;
	className?: string;
}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
	const {
		actions,
		header,
		intro,
		title,
		image,
		isDark = false,
		className,
		...rest
	} = props;
	return (
		<div
			className={classnames(["hero", { "hero--dark": isDark }, className])}
			data-component="hero"
			{...rest}
		>
			<div className="hero__container">
				{header && header}
				<div className="hero__body">
					<h1 className="hero__title">{title}</h1>
					{intro && <p className="hero__intro">{intro}</p>}
					{actions && <div className="hero__actions">{actions}</div>}
				</div>
			</div>
			{image && (
				<div
					className="hero__image-container"
					style={{ backgroundImage: `url(${image})` }}
				></div>
			)}
		</div>
	);
};
