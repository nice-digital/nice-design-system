// @flow
import React, { Component } from "react";
import "../scss/action-banner.scss";

type ActionBannerProps = {
	title: string,
	modifier: "subtle",
	children: *,
	cta: Element,
	closeable: boolean
};

const ActionBanner = (props: ActionBannerProps) => {

	let classes = ["action-banner"];

	if(props.modifier)
		classes.push(`action-banner--${props.modifier}`);

	if(props.closeable)
		classes.push("action-banner--closeable");

	return <section className={classes.join(" ")}>
		<div className="action-banner__container">
			<div className="action-banner__inner">
				<div className="action-banner__text">
					<h2 className="action-banner__title">
						{props.title}
					</h2>
					<p className="action-banner__intro">
						{props.children}
					</p>
				</div>
				<div className="action-banner__actions">
					{props.cta}
				</div>
				{props.closeable &&
					<button type="button" className="action-banner__close">
						<span className="icon icon--remove" ara-hidden="true"></span>
						<span className="visually-hidden">Close</span>
					</button>
				}
			</div>
		</div>
	</section>;
};

export default ActionBanner;
