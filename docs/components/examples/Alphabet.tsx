import { Alphabet, Letter } from "@nice-digital/nds-alphabet";

export const DefaultAlphabet = () => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

	return (
		<Alphabet>
			{allLetters.map((letter) => (
				<Letter
					key={letter}
					to={`#${letter}`}
					label={`Letter ${letter.toUpperCase()}`}
				>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	);
};

export const ChunkyAlphabet = () => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

	return (
		<Alphabet chunky>
			{allLetters.map((letter) => (
				<Letter
					key={letter}
					to={`#${letter}`}
					label={`Letter ${letter.toUpperCase()}`}
				>
					{letter.toUpperCase()}
				</Letter>
			))}
		</Alphabet>
	);
};
