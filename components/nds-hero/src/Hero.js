import React from "react";
import PropTypes from "prop-types";

import "../scss/hero.scss";

export const Hero = props => {
	const { actions, children, footer, header, intro, title } = props;
	return (
		<div className="hero">
			<div className="hero__container">
				{header && header}
				<div className="hero__body">
					<div className="hero__copy">
						<h1 className="hero__title">{title}</h1>
						{intro && <p className="hero__intro">{intro}</p>}
						{actions && <div className="hero__actions">{actions}</div>}
					</div>
					{children && <div className="hero__extra">{children}</div>}
				</div>
				{footer && <div className="hero__footer">{footer}</div>}
			</div>
		</div>
	);
};

Hero.propTypes = {
	actions: PropTypes.node,
	children: PropTypes.node,
	footer: PropTypes.node,
	header: PropTypes.node,
	intro: PropTypes.node,
	title: PropTypes.node.isRequired
};
