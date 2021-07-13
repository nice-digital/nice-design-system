﻿﻿# `@nice-digital/nds-stacked-nav`

> Stacked navigation component for the NICE Design System

- [`@nice-digital/nds-stacked-nav`](#nice-digitalstackednav) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-stacked-nav --save
```

## Usage

### React

Import the `StackedNav` and `StackedNavLink` components from the package and use with JSX:

```jsx
import React from "react";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { Link } from "react-router-dom";

<StackedNav label="Explore our site" elementType="h2">
	<StackedNavLink to="/about">About Page</StackedNavLink>
	<StackedNavLink to="/contact">Contact Page</StackedNavLink>
</StackedNav>

<StackedNav
	label="Explore our site"
	elementType="h3"
	link={{ destination: "/sitemap", isCurrent: true, elementType: Link }}
>
	<StackedNavLink to="/about" label="About Page"/>
	<StackedNavLink to="/contact" label="Contact Page"/>
</StackedNav>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### `<StackedNav />`

###### label

- Type: `string`

The text that appears as the component's heading. If the `label` is omitted, the heading section of the component will not render at all.

###### className

- Type: `string`

Any additional classes that you would like applied to the `nav` container

###### elementType

- Type: `React.ElementType`
- Default: `p`

The tag that you would like to use to wrap the label for the heading. The default is a paragraph tag which implies no heirarchial structure.

###### link

- Type: `object`
- Default: `null`

An object to describe an optional link for the heading of the stacked nav component.

##### additional props

Any additional props are spread on to the `nav` element,useful for accessibility or data attributes.

###### link.elementType

- Type: `React.ElementType`
- Default: `a`

The tag that you would like to use for the heading link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Stacked Nav Heading</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Stacked Nav Heading</Link>`.

###### link.destination

- Type: `string`
- Default: `null`

A string to represent the destination if the heading is a link.

###### link.isCurrent

- Type: `boolean`
- Default: `false`

A boolean value to determine whether the link should have style and ARIA attributes to show that it is currently active.

##### link.method

- Type: `string`
- Default: `href`

The method of activating the link. By default a link is an anchor with `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

##### `<StackedNavLink />`

###### nested

- Type: `StackedNavLink` | `Array<StackedNavLink>`

Pass one or more `<StackedNavLink>` elements into the `nested` property to create a visually and semantically nested block of links. Only styling provision for two levels deep, avoid nesting further and look into separating the blocks of nav into multiple units.

###### children

- Type: `string`

Can be used instead of the label property.

> The label property takes precedence over a child string, and if using TypeScript it will prevent you from supplying both.

```jsx
<StackedNavLink>About Page</StackedNavLink>
```

###### label

- Type: `React.ElementType`

The value that appears as the link's text, takes precedence over a supplied child.

```jsx
<StackedNavLink label="This will appear!">This won't appear</StackedNavLink>
```

###### elementType

- Type: `React.ElementType`
- Default: `a`

The tag that you would like to use for the link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Destination</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Destination</Link>`.

###### destination

- Type: `string`
- Default: `null`

A string to represent the destination if the element is a link.

###### isCurrent

- Type: `boolean`
- Default: `false`

A boolean value to determine whether the link should have style and ARIA attributes to show that it is currently active.

###### method

- Type: `string`
- Default: `href`

The method of activating the link. By default a link is an anchor with `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

###### hint

- Type: `React.ReactNode`
- Default: `null`

A string can be passed to the `hint` property to display some additional text underneath the main label (but still inside the link element).

##### additional props

Any additional props are spread on to the `li` element, useful for accessibility or data attributes.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-stacked-nav/scss/stacked-nav";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<nav class="stacked-nav" aria-label="Stacked Nav Heading">
	<p class="stacked-nav__root">
		<a href="/heading-link/">Stacked Nav Heading</a>
	</p>
	<ul class="stacked-nav__list">
		<li class="stacked-nav__list-item">
			<a aria-current="true" href="/page-one/">Link One</a>
			<span class="stacked-nav__hint">
				This is some hint text and this page is current.
			</span>
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
