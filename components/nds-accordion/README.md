# `@nice-digital/nds-accordion`

Accordion component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
	- [React](#react)
		- [Props](#props)
			- [title](#title)
			- [open](#open)
			- [showLabel](#showlabel)
			- [hideLabel](#hidelabel)
			- [children](#children)
			- [variant](#variant)
			- [className](#classname)
	- [SCSS](#scss)
	- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-accordion --save
```

## Usage

### React

Import the `Accordion` components from the package and use within JSX:

```jsx
import React from "react";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";

<Accordion title="Accordion title">
	<p>Accordion content </p>
</Accordion>

<Accordion title="Accordion caution title" variant="caution">
	<p>Caution accordion content</p>
</Accordion>

<AccordionGroup>
	<Accordion key="1" title="Accordion 1">
		Accordion 1 body
	</Accordion>
	<Accordion key="2" title="Accordion 2">
		Accordion 2 body
	</Accordion>
</AccordionGroup>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### title

- Type: `string`

The title of the accordion summary

##### open

- Type: boolean

The default state of the details element and whether the accordion is open and closed.

##### showLabel

- Type: `string`

The label of the accordion toggle label when the is accordion closed 

##### hideLabel

- Type: `string`

The label of the accordion toggle label when the is accordion open

##### children

- Type: `ReactNode`

The body of the accordion

##### variant

The variant of the accordion. Leave blank for the default variant.
- Type: `"caution"` | `"default"`
- Default: `""`


##### className

- Type: `string`
- Default: `""`

Additional CSS classes to apply to the accordion, e.g. `mt--e` to add a top margin.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-accordion/scss/accordion';
@forward '@nice-digital/nds-accordion/scss/accordion-group';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<details class="accordion__details ">
	<summary class="accordion__summary" data-tracking="Show">
		<span class="accordion__toggleLabel toggle__label">
			<svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="toggle__icon" aria-hidden="true" focusable="false">
				<path d="M478.152 174c0 10.091-3.525 18.661-10.576 25.712l-186 186c-7.243 7.243-15.909 10.864-26 10.864-10.283 0-18.853-3.621-25.712-10.864l-186-186C36.621 192.853 33 184.283 33 174c0-10.091 3.621-18.757 10.864-26L65 126.576C72.424 119.525 81.09 116 91 116c10.091 0 18.661 3.525 25.712 10.576L255.576 265.44 394.44 126.576c7.051-7.051 15.621-10.576 25.712-10.576 9.909 0 18.576 3.525 26 10.576L467.576 148c7.051 7.424 10.576 16.091 10.576 26Z" fill="currentColor"></path>
			</svg>
			Show
		</span>
		<div class="accordion__title">
			<span>Accordion title</span>
		</div>
	</summary>
	<div class="accordion__content">
		<p>This is some content with <a href="#">a link</a></p>
	</div>
</details>
```
