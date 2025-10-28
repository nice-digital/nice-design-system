import React from "react";
import classnames from "classnames";

import "../scss/alert.scss";

const allowedTypes = ["info", "caution", "error", "success"];

interface AlertProps {
	[prop: string]: unknown;
	type?: "info" | "caution" | "error" | "success";
	nonIntrusive?: boolean;
	children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
	children,
	type = "info",
	nonIntrusive = false,
	...rest
}: AlertProps) => {
	const classNames = classnames({
		alert: true,
		[`alert--${type}`]: true
	});
	const ariaBehaviour = nonIntrusive
		? { "aria-live": "polite" as "polite" }
		: { role: "alert" };
	return (
		<div
			className={classNames}
			data-component={`alert${type ? `--${type}` : ""}`}
			{...ariaBehaviour}
			{...rest}
		>
			{children}
		</div>
	);
};
