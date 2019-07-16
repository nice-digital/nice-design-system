import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/maintain-ratio.scss";

export const MaintainRatio = props => {
	const { ratio, className, children, ...attributes } = props;

	const classNames = classnames({
		"maintain-ratio": true,
		"maintain-ratio--16-9": ratio === "16:9",
		"maintain-ratio--21-9": ratio === "21:9",
		"maintain-ratio--4-3": ratio === "4:3",
		"maintain-ratio--square": ratio === "square" || ratio === "1:1",
		[className]: true
	});

	return (
		<div className={classNames} {...attributes}>
			{children}
		</div>
	);
};

MaintainRatio.propTypes = {
	ratio: PropTypes.oneOf(["16:9", "21:9", "4:3", "square", "1:1"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};

MaintainRatio.defaultProps = {
	ratio: "16:9"
};

export default MaintainRatio;
