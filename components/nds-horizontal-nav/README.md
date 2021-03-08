﻿# `@nice-digital/nds-horizontal-nav`

> Horizontal navigation component for the NICE Design System

- [`@nice-digital/nds-horizontal-nav`](#nice-digitalhorizontalnav)
- [Installation](#installation)
- [Usage](#usage)
- [React](#react)
- [Props](#props) - [Props for HorizontalNav](#props-for-horizontalnav) - [Props for HorizontalNavLink](#props-for-horizontalnavlink)
- [SCSS](#scss)
- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-horizontal-nav --save
```

## Usage

### React

Import the `HorizontalNav` and `HorizontalNavLink` components from the package and use with JSX:

```jsx
import React from "react";
import { Link } from "react-router-dom";
import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

<HorizontalNav aria-label="My navigation">
	<HorizontalNavLink isCurrent="true" destination="/about-us">
		About
	</HorizontalNavLink>
	<HorizontalNavLink destination="/contact">Contact</HorizontalNavLink>
	<HorizontalNavLink destination="/" elementType={Link} title="Homepage" />
</HorizontalNav>;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

### Props

#### Props for HorizontalNav

##### className

- Type: `string`

Any additional classes you would like applied to the container.

##### Other props

Any additional props will be spread across the container.

```jsx
<HorizontalNav data-track="track-this" aria-label="Secondary navigation">
	...
</HorizontalNav>
```

#### Props for HorizontalNavLink

##### destination

- Type: `string` (required)
- Default: `null`

Required! A string to represent the destination if the element is a link.

```jsx
<HorizontalNavLink destination="/about-us" />
```

will result in

```html
<li class="horizontal-nav__item">
	<a class="horizontal-nav__link" href="/about-us">/about-us</a>
</li>
```

##### children

- Type: `string`

Can be used instead of the title property for the link text

##### title

- Type: `React.ElementType`

The value that appears as the link's text, takes precedence over a supplied child.

```jsx
<HorizontalNavLink title="This will appear!">
	This won't appear
</HorizontalNavLink>
```

##### elementType

- Type: `React.ElementType`
- Default: `a`

The tag that you would like to use for the link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Destination</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Destination</Link>`.

##### isCurrent

- Type: `boolean`
- Default: `false`

A boolean value to determine whether the link should have style and ARIA attributes to show that it is currently active.

##### additional props

Any additional props are spread on to the `li` element, useful for accessibility or data attributes.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-horizontal-nav/scss/horizontal-nav";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<nav class="horizontal-nav">
	<ul class="horizontal-nav__list">
		<li class="horizontal-nav__item">
			<a aria-current="true" class="horizontal-nav__link" href="#">Guidance</a>
		</li>
		<li class="horizontal-nav__item">
			<a class="horizontal-nav__link" href="#">
				Tools and resources
			</a>
		</li>
		<li class="horizontal-nav__item">
			<a class="horizontal-nav__link" href="#">
				Information for the public
			</a>
		</li>
		<li class="horizontal-nav__item">
			<a class="horizontal-nav__link" href="#">Evidence</a>
		</li>
		<li class="horizontal-nav__item">
			<a class="horizontal-nav__link" href="#">History</a>
		</li>
	</ul>
</nav>
```
