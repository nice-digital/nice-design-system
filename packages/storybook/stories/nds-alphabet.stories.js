/* eslint-disable react/prop-types */
import React from "react";

import { storiesOf } from "@storybook/react";

import {
	Alphabet,
	Letter
} from "../../../components/nds-alphabet/src/Alphabet";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const FakeLink = props => {
	return (
		<a data-test="example-non-standard-element" {...props}>
			{props.children}
		</a>
	);
};

storiesOf("Components/Alphabet", module)
	.add("Default (links on same page)", () => (
		<Alphabet>
			{alphabet.map(letter => (
				<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	))
	.add("Chunky (links on same page)", () => (
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
	))
	.add("Custom link type", () => (
		<Alphabet aria-label="test-label">
			{alphabet.map(letter => (
				<Letter
					key={letter}
					elementType={FakeLink}
					to="/example-url"
					label={`Letter ${letter}`}
				>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	));
