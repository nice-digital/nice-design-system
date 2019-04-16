// @flow
import React, { Component } from "react";
import "../scss/hero.scss";

type HeroProps = {
	title: string
};

export default class Hero extends Component<HeroProps> {
	render() {
		return (
			<div className="hero">
				<div className="hero__container">
					<div className="hero__body">
						<div className="hero__copy">
							<h1 className="hero__title">Hero title</h1>
							<p className="hero__intro">
								This is a hero intro that should explain in a few words what the
								site is about
							</p>
							<div className="hero__actions">
								<a
									href="/nice-design-system/about/getting-started/"
									className="btn btn--cta"
								>
									Primary CTA
								</a>
								<a
									href="https://github.com/nhsevidence/nice-design-system"
									className="btn"
									target="_blank"
									rel="noopener noreferrer external"
								>
									Secondary cta
								</a>
							</div>
						</div>
						<div className="hero__extra">
							<h2 className="h4 mt--0-md">Quick links</h2>
							<ul className="list list--unstyled list--loose">
								<li>
									<a href="/nice-design-system/foundations/">Show links here</a>
								</li>
								<li>
									<a href="/nice-design-system/components/">Maximum of 6</a>
								</li>
								<li>
									<a href="/nice-design-system/technical/">
										Show the most frequent
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
