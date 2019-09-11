﻿# `@nice-digital/nds-stacked-nav`

> Stacked navigation component for the NICE Design System

- [`@nice-digital/nds-stacked-nav`](#nice-digitalstackednav) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-stacked-nav --save
```

## Usage

### React

Import the `StackedNav` component from the package and use with JSX:

```jsx
import React from "react";
import { StackedNav } from "@nice-digital/nds-stacked-nav";
import { Link } from "react-router-dom";

<StackedNav
	heading={
		label: "Find other content",
		labelTag: "h2"
	}
	links={
		[
			{
				label: "About",
				linkTag: "a", // a regular anchor tag
				destination: "/about/"
			},
			{
				label: "Internal router page",
				linkTag: Link, // as imported above
				isCurrent: true,
				destination: "/internal-router-page",
			}
		]
	}
/>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### heading

- Type: `object`

An object to construct the title of the stacked nav component. The only required field is `label`.

```js
const heading = {
	label: "Stacked Nav Heading",
	labelTag: "h2",
	link: {
		linkTag: "a",
		destination: "/about/",
		isCurrent: true
	}
};
```

##### heading.label

- Type: `string` (required)

The text that appears as the component's heading.

##### heading.labelTag

- Type: `string`
- Default: `p`

The tag that you would like to use to wrap the label for the heading. The default is a paragraph tag which implies no heirarchial structure.

##### heading.link

- Type: `object`
- Default: `null`

An object to describe an optional link for the heading of the stacked nav component.

##### heading.link.linkTag

- Type: `string`
- Default: `a`

The tag that you would like to use for the heading link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Stacked Nav Heading</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Stacked Nav Heading</Link>`.

##### heading.link.destination

- Type: `string`
- Default: `null`

A string to represent the destination if the heading is a link.

##### heading.link.isCurrent

- Type: `boolean`
- Default: `false`

A boolean value to determine whether the link should have style and ARIA attributes to show that it is currently active.

##### links

- Type `Array<link>`

The links prop should be an array of items to render in a single column in the body of the stacked nav component. Each link item can consist of the following properties:

##### links[].label

- Type: `string` (required)

The value that appears as the link's text.

##### links[].linkTag

- Type: `string`
- Default: `a`

The tag that you would like to use for the link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Destination</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Destination</Link>`.

##### links[].destination

- Type: `string`
- Default: `null`

A string to represent the destination if the element is a link.

##### links[].isCurrent

- Type: `boolean`
- Default: `false`

A boolean value to determine whether the link should have style and ARIA attributes to show that it is currently active.

##### links[].hint

- Type: `string`
- Default: `null`

A string can be passed to the `hint` property to display some additional text underneath the main label (but still inside the link element).

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-stacked-nav/scss/stacked-nav";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<nav class="stacked-nav" aria-label="Stacked Nav Heading">
	<h1 class="stacked-nav__root">
		<a href="/heading-link/">Stacked Nav Heading</a>
	</h1>
	<ul class="stacked-nav__list">
		<li class="stacked-nav__list-item">
			<a aria-current="page" href="/page-one/">Link One</a>
		</li>
		<li class="stacked-nav__list-item">
			<a href="/page-two/">Link Two</a>
		</li>
		<li class="stacked-nav__list-item">
			<a href="/page-three/">Link Three</a>
		</li>
	</ul>
</nav>
```
