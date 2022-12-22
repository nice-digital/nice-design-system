import React from "react";
import classnames from "classnames";

import "../scss/maintain-ratio.scss";

export const ratios = {
	"16:9": "16:9",
	"21:9": "21:9",
	"4:3": "4:3",
	square: "square",
	"1:1": "square"
};

export interface MaintainRatioProps {
	[prop: string]: unknown;
	ratio?: keyof typeof ratios;
	className?: string;
	stretchFirstChild?: boolean;
	children: React.ReactNode;
}

export const MaintainRatio: React.FC<MaintainRatioProps> = (
	props: MaintainRatioProps
) => {
	const {
		ratio = "16:9",
		stretchFirstChild = false,
		className,
		children,
		...attributes
	} = props;

	const classNames = classnames({
		"maintain-ratio": true,
		"maintain-ratio--16-9": ratio === "16:9",
		"maintain-ratio--21-9": ratio === "21:9",
		"maintain-ratio--4-3": ratio === "4:3",
		"maintain-ratio--square": ratio === "square" || ratio === "1:1",
		"maintain-ratio--stretch": stretchFirstChild,
		[`${className}`]: className && true
	});

	return (
		<div className={classNames} {...attributes}>
			{children}
		</div>
	);
};
