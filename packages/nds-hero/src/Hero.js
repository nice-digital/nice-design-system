import React from "react";
import PropTypes from "prop-types";

import "../scss/hero.scss";

export const Hero = props => {
	const { title, intro, actions, extra } = props;
	return (
		<div className="hero">
			<div className="hero__container">
				<div className="hero__body">
					<div className="hero__copy">
						<h1 className="hero__title">{title}</h1>
						{intro && <p className="hero__intro">{intro}</p>}
						{actions && <div className="hero__actions">{actions}</div>}
					</div>
					{extra && <div className="hero__extra">{extra}</div>}
				</div>
			</div>
		</div>
	);
};

Hero.propTypes = {
	actions: PropTypes.node,
	title: PropTypes.node,
	intro: PropTypes.node,
	extra: PropTypes.node
};
