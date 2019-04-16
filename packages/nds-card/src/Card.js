// @flow
import React, { Component } from "react";
import "../scss/card.scss";

type CardProps = {
	id: ?string,
	title: string
};

export default class Card extends Component<CardProps> {

	// TODO: Create proper render method
	render() {
		return (
			<article className="card">
				<header className="card__header">
					<h3 className="card__heading">
						<a href="https://www.nice.org.uk/">
							<span className="card__icon icon icon--pathways" aria-hidden="true" />
							Advanced breast cancer: diagnosis and treatment
						</a>
					</h3>
				</header>
				<dl className="card__metadata">
					<div className="card__metadatum">
						<dt className="visually-hidden">Product type:</dt>
						<dd>Pathway</dd>
					</div>
				</dl>
			</article>
		);
	}
}
