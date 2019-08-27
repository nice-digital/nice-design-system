import React, { Component } from "react";
import Faker from "faker";

import { Tag } from "@nice-digital/nds-tag";
import { Card } from "@nice-digital/nds-card";
import { CardProps } from "@nice-digital/nds-card";
import { Radio } from "@nice-digital/nds-radio";
import "./App.scss";

const data = (): Array<CardProps> => {
	let data = [];
	for (let index = 0; index < 5; index++) {
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
				<h1>Radio</h1>
				<Radio value="yes" label="Yes, please." group="my-group" />
				<Radio value="no" label="No, thank you." group="my-group" />
				<Radio value="error" label="Error!" error={true} group="my-group" />
				<Radio
					value="disabled"
					label="Disabled"
					disabled={true}
					group="my-group"
				/>
				<hr />
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
