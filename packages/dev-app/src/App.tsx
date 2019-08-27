import React, { Component } from "react";
import Faker from "faker";

import { Tag } from "@nice-digital/nds-tag";
import { Card } from "@nice-digital/nds-card";
import { CardProps } from "@nice-digital/nds-card";
import "./App.scss";

const data = (): Array<CardProps> => {
	let data = [];
	for (let index = 0; index < 15; index++) {
		data.push({
			heading: {
				headingText: Faker.company.catchPhrase()
			},
			metadata: [
				{
					value: <Tag>{Faker.database.engine()}</Tag>
				},
				{
					value: Faker.company.bsBuzz()
				},
				{
					value: Faker.company.bsNoun()
				}
			]
		});
	}
	return data;
};

class App extends Component {
	render() {
		return (
			<main>
				<h1>Card</h1>
				<ul className="list--unstyled">
					{data().map((item: CardProps) => (
						<Card {...item} />
					))}
				</ul>
			</main>
		);
	}
}

export default App;
