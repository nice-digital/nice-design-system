# `@nice-digital/nds-container`

> Container component for the NICE Design System

- [`@nice-digital/nds-grid`](#nice-digitalnds-container)
	- [Installation](#installation)
	- [Usage](#usage)
		- [React](#react)
			- [Props](#props)
				- [Container](#container)
					- [children](#children)
					- [className](#classname)
					- [elementType](#elementtype)
					- [fullWidth](#fullwidth)
		- [SCSS](#scss)
		- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-container --save
```

## Usage

### React

Import the `Container` component from the package and use within JSX:

```jsx
import React from "react";
import { Container } from "@nice-digital/nds-container";

<Container>
	...
</Container>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### Container

###### children

- Type: `React.Node` | `React.Node[]` (required)

The content to render inside the container.

###### className

- Type: `string`
- Default: `""`

Additional classes to render on the container element. Useful for margin classes e.g. `mt--d`.

###### elementType

- Type: `React.ElementType`
- Default: `div`

A custom tag type for the container. Useful if the container covers the whole of the page's unique content, i.e. `elementType="main"`.

###### fullWidth

- Type: `boolean`
- Default: `false`

An option to override the default `max-width` of the container (`$nds-container-max-width`), and set it to 98% of the parent (or viewport's) width.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-container/scss/container";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML, for example:

```html
<div class="container">
	...
</div>

<div class="container container--full">
	<p>Full width content here</p>
</div>
```
