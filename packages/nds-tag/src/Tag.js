import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/tag.scss";

export const Tag = props => {
	const {
		children,
		alpha,
		beta,
		live,
		isNew,
		updated,
		consultation,
		impact,
		flush,
		outline
	} = props;

	const classNames = classnames({
		tag: true,
		"tag--alpha": alpha,
		"tag--beta": beta,
		"tag--live": live,
		"tag--new": isNew,
		"tag--updated": updated,
		"tag--consultation": consultation,
		"tag--impact": impact,
		"tag--flush": flush,
		"tag--outline": outline
	});

	return <span className={classNames}>{children}</span>;
};

Tag.propTypes = {
	alpha: PropTypes.bool,
	beta: PropTypes.bool,
	live: PropTypes.bool,
	isNew: PropTypes.bool,
	updated: PropTypes.bool,
	consultation: PropTypes.bool,
	impact: PropTypes.bool,
	flush: PropTypes.bool,
	outline: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Tag.defaultProps = {};

export default Tag;
