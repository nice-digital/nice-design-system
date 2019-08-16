declare module "@nice-digital/nds-radio" {
	import React = require("react");

	export interface Props {
		children: JSX.Element[] | JSX.Element | string;
		//  todo: add types
	}

	export const Radio: React.FC<Props>;
}
