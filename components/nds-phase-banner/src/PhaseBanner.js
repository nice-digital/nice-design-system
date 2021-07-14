import React from "react";
import PropTypes from "prop-types";
import { Tag } from "@nice-digital/nds-tag";

import "./../scss/phase-banner.scss";

export const PhaseBanner = props => {
	const { alpha, beta, children, ...rest } = props;

	return (
		<p className="phase-banner" {...rest}>
			<span className="phase-banner__tag">
				<Tag impact alpha={alpha} beta={beta}>
					{alpha ? "Alpha" : "Beta"}
				</Tag>
			</span>
			<span className="phase-banner__label">{children}</span>
		</p>
	);
};

PhaseBanner.propTypes = {
	alpha: PropTypes.bool,
	beta: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

PhaseBanner.defaultProps = {};
