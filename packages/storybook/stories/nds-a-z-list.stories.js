import React from "react";

import { storiesOf } from "@storybook/react";

import { AZList, AZListItem } from "@nice-digital/nds-a-z-list";
import { ColumnList } from "@nice-digital/nds-column-list";

const mockAlphabet = () => (
	<ol>
		<li>
			<a href="#a">A</a>
		</li>
		<li>
			<a href="#b">B</a>
		</li>
	</ol>
);
const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const MockColumnListContent = () => (
	<>
		<li>Item one</li>
		<li>Item two</li>
		<li>Item three</li>
		<li>Item four</li>
		<li>Item five</li>
		<li>Item six</li>
	</>
);

storiesOf("Components/A-Z List", module)
	.add("Default, implicit item ID, simple paragraph content", () => (
		<AZList alphabet={mockAlphabet}>
			{allLetters.map((letter) => (
				<AZListItem key={letter} title={letter.toUpperCase()}>
					<p className="test-class">{letter}: lorem ipsum dolor sit amet</p>
				</AZListItem>
			))}
		</AZList>
	))
	.add("Default, column lists as content", () => (
		<AZList alphabet={mockAlphabet} className="test">
			{allLetters.map((letter) => (
				<AZListItem key={letter} title={letter.toUpperCase()}>
					<ColumnList className="test-class">
						<MockColumnListContent />
					</ColumnList>
				</AZListItem>
			))}
		</AZList>
	));
