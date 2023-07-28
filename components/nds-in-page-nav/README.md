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
			- [headingsExcludeContainer](#headingsexcludecontainer)
			- [scrollTolerance](#scrolltolerance)
			- [noScroll](#noScroll)
			- [twoColumns](#twoColumns)
			- [Other props](#other-props)
		- [SCSS](#scss)
		- [HTML](#html)
			- [niceorg client](#niceorg-client)

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

A selector for any headings to exclude from the navigation.

#### headingsExcludeContainer

- Type: `string`
- Default: `""`

A selector for a container that will be completely ignored, i.e. all headings
within that container will be excluded. Useful in cases where it's not easy
to exclude or select individual headings.

#### scrollTolerance

- Type: `number`
- Default: `50`

The number of pixels from the top of the screen that's used to determine if a heading is considered to current/active.

#### noScroll

- Type: `boolean`
- Default: `false`

If true, the in-page-nav will no longer scroll along with the user's current position (i.e. it won't be sticky).

#### twoColumns

- Type: `boolean`
- Default: `false`

If true, the in-page-nav will render as two columns instead of just one. This will only work if `noScroll` is set to `true`.

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
@forward '@nice-digital/nds-in-page-nav/scss/in-page-nav';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) but you'll have to provide your own implentation. The exception to this is within [niceorg client (NOC)](https://github.com/nice-digital/niceorg-client):

#### niceorg client

[niceorg client (NOC)](https://github.com/nice-digital/niceorg-client) is a library of front-end assets (both CSS and JS) shared between Guidance Web and the 'corporate' website (front-end of Orchard). Load the NOC JavaScript (see NOC readme) to include a wrapper around the in-page-nav react component. This allows the in page nav component to be loaded declaratively, for example:

```html
<div data-in-page-nav></div>
```

The `data-in-page-nav` attribute is all that's needed to render a default in page nav. This will look inside `main` for `h2` and `h3` headings by default. Use data attributes to configiure the props to be passed in. For example `data-in-page-nav-headings-container-selector` maps to the `headingsContainerSelector` prop.

> Note: This renders a React component under the hood and parses kebab-case data attributes into a props object.

A basic customisation might be to change the target element:

```html
<div data-in-page-nav data-in-page-nav-headings-container-selector="main"></div>
```

Or with all possible options:

```html
<div
	data-in-page-nav
	data-in-page-nav-headings-container-selector="main"
	data-in-page-nav-headings-selector="h2, h3"
	data-in-page-nav-headings-exclude-selector=".js-ignore"
	data-in-page-nav-scroll-tolerance="50"></div>
```
