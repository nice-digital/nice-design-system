import React from "react";
import { AZList, AZListItem } from "@nice-digital/nds-a-z-list";

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

export const AZListView = () => {
	return (
		<>
			<h2>Standard</h2>
			<AZList alphabet={mockAlphabet}>
				{allLetters.map(letter => (
					<AZListItem key={letter} title={letter.toUpperCase()}>
						<p className="test-class">{letter}: lorem ipsum dolor sit amet</p>
					</AZListItem>
				))}
			</AZList>
		</>
	);
};
