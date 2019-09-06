declare module "@nice-digital/nds-alert" {
	import React = require("react");

	interface AlertProps {
		type?: "info" | "caution" | "error" | "success";
		children: React.ReactNode;
	}

	export const Alert: React.FC<AlertProps>;
}
