declare module "@nice-digital/nds-tag" {
	import React = require("react");

	interface BaseTagProps {
		/** Content of the tag */
		children: React.ReactNode;
		/**	Tags have a small margin by default. Use the .tag--flush modifier to remove the margin */
		flush?: boolean;
		/** Use impact tags sparingly, e.g. within phase banners */
		impact?: boolean;
		/** Use the .tag--outline modifier for a tag with a border. Use outline tags with filtered lists to show the currently applied filters. */
		outline?: boolean;
		/** Use removeable tags when users need to be able to remove or dismiss a tag. Use with outline tags at the top of filtered lists to show the currently applied selections. */
		removeable?: boolean;
	}

	interface UpdatedColour extends BaseTagProps {
		/** Use tags to denote the status of guidance in lists etc */
		updated?: boolean;
	}

	interface AlphaColour extends BaseTagProps {
		/** Use tags to denote service phase */
		alpha?: boolean;
	}

	interface BetaColour extends BaseTagProps {
		/** Use tags to denote service phase */
		beta?: boolean;
	}

	interface ConsultationColour extends BaseTagProps {
		/** Use tags to denote the status of guidance in lists etc */
		consultation?: boolean;
	}

	interface IsNewColour extends BaseTagProps {
		/** Use tags to denote the status of guidance in lists etc */
		isNew?: boolean;
	}

	interface LiveColour extends BaseTagProps {
		/** Use tags to denote service phase */
		live?: boolean;
	}

	interface InfoColour extends BaseTagProps {
		/** Use tags to denote status of information */
		info?: boolean;
	}

	interface ErrorColour extends BaseTagProps {
		/** Use tags to denote status of error */
		error?: boolean;
	}

	interface SuccessColour extends BaseTagProps {
		/** Use tags to denote status of success */
		success?: boolean;
	}
	interface CautionColour extends BaseTagProps {
		/** Use tags to denote status of caution */
		caution?: boolean;
	}

	type TagProps = (UpdatedColour
		| AlphaColour
		| BetaColour
		| ConsultationColour
		| IsNewColour
		| LiveColour
		| InfoColour
		| ErrorColour
		| SuccessColour
		| CautionColour);

	export const Tag: React.FC<TagProps>;
}
