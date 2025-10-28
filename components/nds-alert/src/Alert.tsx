import React from "react";
import classnames from "classnames";

import "../scss/alert.scss";

const allowedTypes = ["info", "caution", "error", "success"];

interface AlertProps {
	[prop: string]: unknown;
	type?: "info" | "caution" | "error" | "success";
	children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
	children,
	type = "info",
	...rest
}: AlertProps) => {
	const classNames = classnames({
		alert: true,
		[`alert--${type}`]: true
	});
	return (
		<div
			className={classNames}
			data-component={`alert${type ? `--${type}` : ""}`}
			role="alert"
			{...rest}
		>
			{children}
		</div>
	);
};
