import React from "react";
import PropTypes from "prop-types";

import "../scss/page-header.scss";

export const PageHeader = props => {
	const { heading, lead, cta } = props;

	return (
		<div className="page-header">
			<h1 className="page-header__heading">{heading}</h1>
			<p className="page-header__lead">{lead}</p>
			{cta && <p className="page-header__cta">{cta}</p>}
		</div>
	);
};

PageHeader.propTypes = {
	heading: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	lead: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	cta: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

PageHeader.defaultProps = {};

export default PageHeader;
