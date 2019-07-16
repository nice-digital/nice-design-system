import React from "react";
import PropTypes from "prop-types";

import { Breadcrumb } from "./Breadcrumb";
import "../scss/breadcrumbs.scss";

export { Breadcrumb };

export const Breadcrumbs = props => {
	return (
		<nav aria-label="Breadcrumbs" role="navigation">
			<ol className="breadcrumbs">{props.children}</ol>
		</nav>
	);
};

Breadcrumbs.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(Breadcrumb), Breadcrumb])
		.isRequired
};

export default Breadcrumbs;
