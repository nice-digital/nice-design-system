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
    elementType="li"
	headingText="Card title"
	headingElementType="h1"
    image={<img src="image.png" alt=""/>}
	link={
		destination: "/destination",
		elementType: "a"
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
>
    <p>Card children</p>
</Card>

<Card
	headingText="Card title"
	headingElementType="h1"
	link={
		destination: "/destination",
		elementType: "a"
	}
/>

// The mimimum to be supplied is headingText

<Card headingText="Card title" />

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `ReactNode`

Child elements when provided are rendered inside card body when the Card component wraps them

##### summary

- Type: `React.ReactNode`

Provide a valid React node that will be passed into a `p` tag for the card summary. To conform with the design system, don't pass any block level elements in.

```jsx
<Card headingText="Card title" summary="My card summary" />
<Card headingText="Card title" summary={<span>My <b>lightly formatted</b> summary</span>} />

```

##### headingText

- Type: `React.ReactNode` (required)

The text that appears as the card's heading. Markup can be passed in for additional formatting.

##### elementType

- Type: `React.ElementType`
- Default: `article`

This can be used if you wish the card container tag to be more structurally meaningful tag. By default it's an `article` tag. You could for example set the card to be an `li` tag if your card is nested inside a `ul`.

```jsx
<ul>
	<Card elementType="li" headingText="My list card" />
</ul>
```

##### image

- Type: `React.ReactNode`

Pass in the image tag directly, or if using a framework, the containing image component or wrapper.

```jsx
<Card elementType="li" headingText="My list card" image={<img alt="" src="image.png" />} />
```

##### headingElementType

- Type: `React.ElementType`
- Default: `p`

This can be used if you wish the card heading tag to be more structurally meaningful tag. By default it's a `p` tag, so `<p>Card heading text</p>` but you can pass another tag such as a `h3` to result in `<h3>Card heading text</h3>`.

##### link.destination

- Type: `string`
- Default: `null`

A string to represent the destination if the card heading is a link.

##### link.elementType

- Type: `React.ElementType`
- Default: `a`

The tag that you would like to use for the heading link. By default it's an HTMLAnchorElement and will result in something like `<a href="/destination">Card heading text</a>` but you can pass a custom router link tag such as `Link` to result in `<Link to="/destination">Card heading text</Link>`.

##### link.method

- Type: `string`
- Default: `to`

The method of activating the link. By default a link is an anchor with `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

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

###### visibleLabel

- Type: `boolean`
- Default: `false`

By default the key side of the key-value pairs of metadata are visually hidden but present in the markup. Set `visibleLable` to `true` to show the key.
### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-card/scss/card";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<article class="card">
    <div class="card__image">
        <img src="image.png" alt="">
    </div>
    <div class="card__text">
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
    </div>
</article>
```

If you're not including an image, exclude the `.card__text` div as shown here:

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
