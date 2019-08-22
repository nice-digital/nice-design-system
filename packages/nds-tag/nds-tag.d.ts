declare module "@nice-digital/nds-tag" {
	import React = require("react");

	export interface TagProps {
		children: React.ReactNode;
		/** Use tags to denote service phase */
		alpha?: boolean;
		/** Use tags to denote service phase */
		beta?: boolean;
		/** Use tags to denote the status of guidance in lists etc */
		consultation?: boolean;
		/**	Tags have a small margin by default. Use the .tag--flush modifier to remove the margin */
		flush?: boolean;
		/** Use impact tags sparingly, e.g. within phase banners */
		impact?: boolean;
		/** Use tags to denote the status of guidance in lists etc */
		isNew?: boolean;
		/** Use tags to denote service phase */
		live?: boolean;
		/** Use the .tag--outline modifier for a tag with a border. Use outline tags with filtered lists to show the currently applied filters. */
		outline?: boolean;
		/** Use tags to denote the status of guidance in lists etc */
		updated?: boolean;
		/** Use removeable tags when users need to be able to remove or dismiss a tag. Use with outline tags at the top of filtered lists to show the currently applied selections. */
		removeable?: boolean;
	}

	export const Tag: React.FC<TagProps>;
}
