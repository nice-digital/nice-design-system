import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/tag.scss";

interface BaseTagProps {
	/** Allow any additional props to be passed and applied to the tag */
	[prop: string]: unknown;
	/** Content of the tag */
	children: React.ReactNode;
	/**	Tags have a small margin by default. Use the .tag--flush modifier to remove the margin */
	flush?: boolean;
	/** Use impact tags sparingly, e.g. within phase banners */
	impact?: boolean;
	/** Use the .tag--outline modifier for a tag with a border. Use outline tags with filtered lists to show the currently applied filters. */
	outline?: boolean;
	/** Use removeable tags when users need to be able to remove or dismiss a tag. Use with outline tags at the top of filtered lists to show the currently applied selections. */
	remove?: React.ReactElement;
}

interface UpdatedColour {
	/** Use tags to denote the status of guidance in lists etc */
	updated: boolean;
}

interface AlphaColour {
	/** Use tags to denote service phase */
	alpha: boolean;
}

interface BetaColour {
	/** Use tags to denote service phase */
	beta: boolean;
}

interface ConsultationColour {
	/** Use tags to denote the status of guidance in lists etc */
	consultation: boolean;
}

interface IsNewColour {
	/** Use tags to denote the status of guidance in lists etc */
	isNew: boolean;
}

interface InfoColour {
	/** Use tags to denote status of information */
	info: boolean;
}

interface ErrorColour {
	/** Use tags to denote status of error */
	error: boolean;
}

interface SuccessColour {
	/** Use tags to denote status of success */
	success: boolean;
}
interface CautionColour {
	/** Use tags to denote status of caution */
	caution: boolean;
}

export type TagProps = BaseTagProps &
	(
		| {}
		| UpdatedColour
		| AlphaColour
		| BetaColour
		| ConsultationColour
		| IsNewColour
		| InfoColour
		| ErrorColour
		| SuccessColour
		| CautionColour
	);

export const Tag: React.FC<TagProps> = (props: TagProps) => {
	const {
		children,
		alpha,
		beta,
		isNew,
		updated,
		consultation,
		impact,
		flush,
		outline,
		info,
		error,
		success,
		caution,
		remove,
		...rest
	} = props;

	const classNames = classnames({
		tag: true,
		"tag--alpha": alpha,
		"tag--beta": beta,
		"tag--new": isNew,
		"tag--updated": updated,
		"tag--consultation": consultation,
		"tag--impact": impact,
		"tag--flush": flush,
		"tag--outline": outline,
		"tag--info": info,
		"tag--error": error,
		"tag--success": success,
		"tag--caution": caution
	});

	return (
		<span className={classNames} data-component="tag" {...rest}>
			{children}
			{remove
				? cloneElement(
						remove,
						{ className: classnames(remove.props.className, "tag__remove") },
						<span className="visually-hidden">{remove.props.children}</span>
				  )
				: null}
		</span>
	);
};
