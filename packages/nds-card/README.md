# `@nice-digital/nds-card`

> Card component for the NICE Design System

- [`@nice-digital/nds-card`](#nice-digitalcard) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-card --save
```

## Usage

### React

Import the `Card` component from the package and use within JSX:

```jsx
import React from "react";
import { Card } from "@nice-digital/nds-card";
import { MySuperComponent } from "./components/MySuperComponent";

<Card
	heading={
		headingText: "Card title",
		destination: "/about/",
		linkTag "a",
		headingTag: "h1",
	}
	metadata=[
		{
			label: "Email address",
			value: "jsmith@email.com"
		},
		{
			value: <MySuperComponent />
		}
	]
/>

<Card
	heading={
		headingText: "Card title",
		destination: "/about/",
		linkTag "a",
		headingTag: "h1",
	}
/>

// The mimimum to be supplied is heading.headingText

<Card heading={headingText: "Card title"} />

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### heading

- Type: `object`

An object to describe the structure of the heading part of the card, the props of which are described below.

```js
const heading = {
	headingText: "Card heading text",
	destination: "/destination",
	linkTag: "a",
	headingTag: "h1"
};
```

##### heading.headingText

- Type: `string` (required)

The text that appears as the card's heading.

##### heading.destination

- Type: `string`
- Default: `null`

A string to represent the destination if the card heading is a link.

##### heading.linkTag

- Type: `string`
- Default: `a`

The tag that you would like to use for the heading link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Card heading text</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Card heading text</Link>`.

##### heading.headingTag

- Type: `string`
- Default: `p`

This can be used if you wish the card heading tag to be more structurally suggestive tag. By default it's a `p` tag, so `<p>Card heading text</p>` but you can pass another tag such as a `h3` to result in `<h3>Card heading text</h3>`.

##### metadata

- Type: `Metadata`, `Array<Metadata>`

The indvidual metadata items that are listed underneath the card heading text.

##### Metadata

###### label

- Type: `string`

This is the key of the key-value pair that describe the metadata item. An example would be "Email address" if the `value` was "jsmith@example.com". This is visually hidden on the page.

###### value

- Type: `string`, `React.ReactNode` (required)

This is the value of the metadata that is printed to the page. This will accept a string or any valid React node, such as another component.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-card/scss/card";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<article class="card">
	<header class="card__header">
		<p class="card__heading">Full card with component in metadata</p>
	</header>
	<dl class="card__metadata">
		<div class="card__metadatum">
			<dd>
				<marquee>Custom HTML</marquee>
			</dd>
		</div>
		<div class="card__metadatum">
			<dd>Value</dd>
		</div>
		<div class="card__metadatum">
			<dt class="visually-hidden">Email address</dt>
			<dd>Value with a label</dd>
		</div>
	</dl>
</article>
```
