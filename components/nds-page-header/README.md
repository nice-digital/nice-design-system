# `@nice-digital/nds-page-header`

> Page header component for the NICE Design System

- [`@nice-digital/nds-page-header`](#nice-digitalpageheader) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-page-header --save
```

## Usage

### React

Import the `PageHeader` component from the package and use within JSX:

```jsx
import React from "react";
import { PageHeader } from "@nice-digital/nds-page-header";

// The minimum to be supplied to render the component is a heading string

<PageHeader heading="Welcome to the page" />;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### heading

- Type: `React.node` (required)

The main title that is rendered into a H1 with H1 styling.

```jsx
<PageHeader heading="Welcome to the page" />
```

#### useAltHeading

- Type: `boolean` (optional)

Whether to use the `h1-alt` alternative (smaller) heading 1 style.

```jsx
<PageHeader useAltHeading ... />
```

##### preheading

- Type: `React.node`

For occasions when the main title might be too long, a smaller H3 styled `span` that is rendered just above the main title.

```jsx
<PageHeader heading="Products" preheading="Systemic lupus erythematosus" />
```

##### lead

- Type: `React.node`

Lead text serves as a short introduction to the page, rendered as a paragraph.

```jsx
<PageHeader
	heading="Products"
	lead="A list of all our products on systemic lupus erythematosus"
/>
```

##### metadata

- Type: `Array<React.node>`

```jsx
<PageHeader
	heading="Cerliponase alfa for treating neuronal ceroid lipofuscinosis type 2"
	metadata={[
		"Highly specialised technologies guidance",
		"HST12",
		"Last updated: 29 October 2019",
		"Last updated: 29 October 2019"
	]}
/>
```

##### cta

- Type: `React.node`

Room for a button or other call-to-action.

```jsx
const CtaButton = <button onclick={()=>false}>
	Find out more about this topic
</button>

<PageHeader heading="Products" cta={CtaButton} />
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-page-header/scss/page-header";
```

#### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="page-header">
	<h1 class="page-header__heading page-header__heading--alt">
		<span class="page-header__pre-heading">
			Systemic lupus erythematosus
		</span>
		Products
	</h1>
	<p class="page-header__lead">
		A list of all our products on systemic lupus erythematosus
	</p>
	<ul class="page-header__metadata" aria-label="Some relevant label for the metadata">
		<li>Highly specialised technologies guidance</li>
		<li>HST12</li>
		<li>Last updated: 29 October 2019</li>
		<li>Last updated: 29 October 201</li>
	</ul>
	<p class="page-header__cta">
		<button>Find out more now</button>
	</p>
</div>
```
