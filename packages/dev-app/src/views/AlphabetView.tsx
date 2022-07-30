import React, { PropsWithChildren } from "react";
import { Alphabet, Letter } from "@nice-digital/nds-alphabet";

export const AlphabetView = () => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
	const letterElements = allLetters.map((letter) => (
		<Letter
			key={letter}
			to={["j", "q", "x"].includes(letter) ? "" : `#${letter}`}
			label={`Letter ${letter}`}
		>
			{letter.toUpperCase()}
		</Letter>
	));
	const FakeLink = (props: PropsWithChildren<Record<string, unknown>>) => {
		return (
			<a data-test="example-non-standard-element" {...props}>
				{props.children}
			</a>
		);
	};

	return (
		<>
			<h2>Standard</h2>
			<Alphabet>{letterElements}</Alphabet>
			<h2>Chunky (links on same page)</h2>
			<Alphabet chunky style={{ maxWidth: "560px" }}>
				{letterElements}
			</Alphabet>
			<h2>No links</h2>
			<Alphabet>
				{allLetters.map((letter) => (
					<Letter key={letter} label={`Letter ${letter}`}>
						{letter.toUpperCase()}
					</Letter>
				))}
			</Alphabet>
			<h2>Custom link type</h2>
			<Alphabet aria-label="test-label">
				{allLetters.map((letter) => (
					<Letter
						key={letter}
						elementType={FakeLink}
						to={`#${letter}`}
						label={`Letter ${letter}`}
					>
						{letter.toUpperCase()}
					</Letter>
				))}
			</Alphabet>
		</>
	);
};
