import { create } from "@storybook/theming";

export default create({
	base: "light",

	colorPrimary: "#004650",
	colorSecondary: "#451551",

	// UI
	appBg: "#fff",
	appContentBg: "#e9e9e9",
	appBorderColor: "#d6d6d6",
	appBorderRadius: 4,

	// Typography
	fontBase: '"Inter", sans-serif',
	fontCode: "monospace",

	// Text colors
	textColor: "#222",
	textInverseColor: "#fff",

	// Toolbar default and active colors
	barTextColor: "#d6d6d6",
	barSelectedColor: "#fff",
	barBg: "#004650",

	// Form colors
	inputBg: "white",
	inputBorder: "#adadad",
	inputTextColor: "#222",
	inputBorderRadius: 2,

	brandTitle: "NICE Design System storybook",
	brandUrl: "https://github.com/nice-digital/nice-design-system",
	brandImage:
		"https://www.nice.org.uk/Media/Default/About/Branding-guidelines/Logos/logo-short3.png"
});
