# `@nice-digital/nds-in-page-nav`

> In page navigation component for the NICE Design System

- [`@nice-digital/nds-in-page-nav`](#nice-digitalnds-in-page-nav)
	- [Installation](#installation)
	- [Usage](#usage)
		- [React](#react)
		- [Props](#props)
			- [className](#classname)
			- [headingsContainerSelector](#headingscontainerselector)
			- [headingsSelector](#headingsselector)
			- [headingsExcludeSelector](#headingsexcludeselector)
			- [scrollTolerance](#scrolltolerance)
			- [Other props](#other-props)
		- [SCSS](#scss)
		- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-in-page-nav --save
```

## Usage

### React

Import the `InPageNav` component from the package and use with JSX:

```jsx
import React from "react";
import { Link } from "react-router-dom";
import { InPageNav } from "@nice-digital/nds-in-page-nav";

<InPageNav />;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

### Props

#### className

- Type: `string`

Any additional classes you would like applied to the container.

#### headingsContainerSelector

- Type: `string`
- Default: `"body"`

A selector for the container in which to look for headings.

#### headingsSelector

- Type: `string`
- Default: `"h2, h3"`

A selector for headings to use for the navigation.

#### headingsExcludeSelector

- Type: `string`
- Default: `""`

A selector for any headigns to exclude from the navigation.

#### scrollTolerance

- Type: `number`
- Default: `50`

The number of pixels from the top of the screen that's used to determine if a heading is considered to current/active.

#### Other props

Any additional props will be spread across the container.

```jsx
<InPageNav data-track="track-this">
	...
</InPageNav>
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-in-page-nav/scss/in-page-nav";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) but you'll have to provide your own implentation.

The exception to this is within [niceorg client](https://github.com/nice-digital/niceorg-client). That includes a wrapper around the react component so the in page nav can be loaded declaratively, for example:

```html
<div data-in-page-nav data-in-page-nav-headings-container-selector="body"></div>
```
