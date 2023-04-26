import React from "react";
import classnames from "classnames";
import { Tag } from "@nice-digital/nds-tag";

import "./../scss/phase-banner.scss";

interface BaseProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
}

interface PhaseBannerAlpha {
	alpha: boolean;
}

interface PhaseBannerBeta {
	beta: boolean;
}

export type PhaseBannerProps = BaseProps & (PhaseBannerAlpha | PhaseBannerBeta);

export const PhaseBanner: React.FC<PhaseBannerProps> = (
	props: PhaseBannerProps
) => {
	const { alpha, beta, children, className, ...rest } = props;

	return (
		<p
			className={classnames(["phase-banner", className])}
			data-component="phase-banner"
			{...rest}
		>
			<span className="phase-banner__tag">
				<Tag impact alpha={alpha} beta={beta}>
					{alpha ? "Alpha" : "Beta"}
				</Tag>
			</span>
			<span className="phase-banner__label">{children}</span>
		</p>
	);
};
