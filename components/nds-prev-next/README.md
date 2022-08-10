# `@nice-digital/nds-prev-next`

> Previous and next navigation component for the NICE Design System

- [`@nice-digital/nds-prev-next`](#nice-digitalnds-prev-next) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-prev-next --save
```

## Usage

### React

The only required property is `destination`. The destination will be used as the link text if no `text` property is supplied.

Import the `PrevNext` component from the package and use within JSX:

```jsx
import React from "react";
import { PrevNext } from "@nice-digital/nds-prev-next";
import { Link } from "react-router-dom";

<PrevNext
	nextPageLink={{
		text: "Page Header",
		destination: "/pageheader",
		elementType: Link
	}}
	previousPageLink={{
		text: "Alert",
		destination: "/alert",
		elementType: Link
	}}
/>;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### nextPageLink & previousPageLink

- Type: `object`

An object to represent the link.

```jsx
<PrevNext
	nextPageLink={{
		text: "Page Header",
		destination: "/pageheader",
		elementType: Link
	}}
/>
```

##### nextPageLink.destination

- Type: `string` (required)

A string to represent the destination of the link.

##### nextPageLink.text

- Type: `string` (required)

The text that the link will be applied to. Usually the title of the resource the link will go to.

##### nextPageLink.elementType

- Type: React.ElementType
- Default: `a`

The tag that you would like to use for the link. By default it's an HTMLAnchorElement and will result in something like `<a href="/about-page">About page</a>` but you can pass a custom router element such as `Link` to result in `<Link to="/about-page">About page</Link>`.

##### nextPageLink.method

- Type: `string`
- Default: `href`

The method of activating the link. By default a link is an anchor with `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

##### nextPageLink.intro

- Type: `string`
- Default: "Previous page" or "Next page"

Text that you would like to appear if different from "Next page" or "Previous page".

```jsx
<PrevNext
	nextPageLink={{
		text: "About us",
		destination: "/about-us",
		intro: "Find out more"
	}}
/>
```

##### className

- Type: `string`

Any additional classes that will be applied to the containing `div`.

##### additional props

Any additional props are spread on to the containing `div` element, useful for accessibility or data attributes.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-prev-next/scss/prev-next';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="prev-next">
	<nav aria-label="Previous and next pages">
		<a class="prev-next__link" href="#">
			<span class="prev-next__link-intro">Next page</span>
			<span class="prev-next__link-text">To the next page</span>
		</a>
		<a class="prev-next__link" href="#">
			<span class="prev-next__link-intro">Previous page</span>
			<span class="prev-next__link-text">To the previous page</span>
		</a>
	</nav>
</div>
```
