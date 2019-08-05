declare module "@nice-digital/nds-panel" {
	import React = require("react");

	export interface PanelProps {
		children: JSX.Element[] | JSX.Element;
	}

	const Panel: React.FC<PanelProps>;

	export default Panel;
}
