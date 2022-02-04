declare module "@nice-digital/nds-alphabet" {
	import React = require("react");

	export interface AlphabetProps {
		id?: string;
		children: React.ReactElement<LetterProps>[];
		chunky?: boolean;
		[key: string]: unknown;
	}

	export interface LetterProps {
		children: React.ReactNode;
		label?: string;
		chunky?: boolean;
		to?: string | false;
		[key: string]: unknown;
	}
}
