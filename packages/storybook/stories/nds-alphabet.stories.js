import React from "react";

import { storiesOf } from "@storybook/react";

import {
	Alphabet,
	Letter
} from "../../../components/nds-alphabet/src/Alphabet";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

storiesOf("Components/Alphabet", module)
	.add("Default (anchors)", () => (
		<Alphabet>
			{alphabet.map(letter => (
				<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	))
	.add("Chunky (anchors)", () => (
		<Alphabet chunky>
			{alphabet.map(letter => (
				<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	))
	.add("No links", () => (
		<Alphabet>
			{alphabet.map(letter => (
				<Letter key={letter} label={`Letter ${letter}`}>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	))
	.add("External links", () => (
		<Alphabet>
			{alphabet.map(letter => (
				<Letter key={letter} to="/example-url" label={`Letter ${letter}`}>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	));
