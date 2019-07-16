import React from "react";

import "../scss/card.scss";

export const Card = props => {
	// TODO: Create proper render method
	return (
		<article className="card">
			<header className="card__header">
				<h3 className="card__heading">
					<a href="https://www.nice.org.uk/">
						<span
							className="card__icon icon icon--pathways"
							aria-hidden="true"
						/>
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
};

export default Card;
