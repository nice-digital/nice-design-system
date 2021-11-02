import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Tag } from "@nice-digital/nds-tag";

import "./../scss/phase-banner.scss";

export const PhaseBanner = props => {
	const { alpha, beta, children, className, ...rest } = props;

	return (
		<p className={classnames(["phase-banner", className])} {...rest}>
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
	]).isRequired,
	className: PropTypes.string
};

PhaseBanner.defaultProps = {};
