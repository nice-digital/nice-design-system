import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import RemoveIcon from "@nice-digital/icons/lib/Remove";

import "../scss/action-banner.scss";

export class ActionBanner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isClosed: false
		};

		this.closeClickHandler = this.closeClickHandler.bind(this);
	}

	closeClickHandler() {
		this.setState({
			isClosed: true
		});

		if (typeof this.props.onClosing === "function") this.props.onClosing(this);
		else throw new Error("The onClosing prop should be a function");
	}

	render() {
		if (this.state.isClosed) return null;

		const { variant, onClosing, title, children, cta, className, ...rest } =
			this.props;

		const classes = {
			"action-banner": true,
			"action-banner--closeable": onClosing,
			[`action-banner--${variant}`]: variant,
			[className]: className
		};

		return (
			<section className={classnames(classes)} {...rest}>
				<div className="action-banner__container">
					<div className="action-banner__inner">
						<div className="action-banner__text">
							<h2 className="action-banner__title">{title}</h2>
							{children && <p className="action-banner__intro">{children}</p>}
						</div>
						{cta && <div className="action-banner__actions">{cta}</div>}
						{onClosing && (
							<button
								type="button"
								className="action-banner__close"
								onClick={this.closeClickHandler}
							>
								<RemoveIcon />
								<span className="visually-hidden">Close {title}</span>
							</button>
						)}
					</div>
				</div>
			</section>
		);
	}
}

ActionBanner.propTypes = {
	title: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(["default", "subtle"]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	cta: PropTypes.node,
	onClosing: PropTypes.func,
	className: PropTypes.string
};

ActionBanner.defaultProps = {
	variant: "default"
};
