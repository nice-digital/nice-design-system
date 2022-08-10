import React from "react";
import PropTypes from "prop-types";

import "../scss/page-header.scss";

export const PageHeader = (props) => {
	const {
		heading,
		useAltHeading = false,
		lead,
		metadata,
		cta,
		preheading,
		...rest
	} = props;

	return (
		<div className="page-header" {...rest}>
			<h1
				className={`page-header__heading ${
					useAltHeading ? "page-header__heading--alt" : ""
				}`}
			>
				{preheading && (
					<span className="page-header__pre-heading">{preheading}</span>
				)}
				{heading}
			</h1>

			{lead && <p className="page-header__lead">{lead}</p>}

			{metadata && (
				<ul className="page-header__metadata">
					{metadata.map((metadatum, i) => (
						<li key={i}>{metadatum}</li>
					))}
				</ul>
			)}

			{cta && <p className="page-header__cta">{cta}</p>}
		</div>
	);
};

PageHeader.propTypes = {
	heading: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	useAltHeading: PropTypes.bool,
	lead: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	metadata: PropTypes.arrayOf(PropTypes.node),
	preheading: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	cta: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
