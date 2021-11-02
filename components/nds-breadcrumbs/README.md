# `@nice-digital/nds-breadcrumbs`

> Breadcrumbs component for the NICE Design System

- [`@nice-digital/nds-breadcrumbs`](#nice-digitalnds-breadcrumbs) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Routing](#routing) - [Props](#props) - [Breadcrumbs](#breadcrumbs) - [children](#children) - [Breadcrumb](#breadcrumb) - [to](#to) - [elementType](#elementtype) - [children](#children-1) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-breadcrumbs --save
```

## Usage

### React

Import the `Breadcrumbs` and `Breadcrumb` components from the package and use within JSX:

```jsx
import React from "react";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

<Breadcrumbs>
	<Breadcrumb to="https://www.nice.org.uk">NICE</Breadcrumb>
	<Breadcrumb to="/">CKS</Breadcrumb>
	<Breadcrumb>Topics</Breadcrumb>
</Breadcrumbs>;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Routing

To use breadcrumbs with custom routing like [React Router](https://reacttraining.com/react-router/) or [Reach Router](https://reach.tech/router) you can pass in a tag prop. For example to use the `Link` component from [Gatsby](https://www.gatsbyjs.org/docs/gatsby-link/), you can do:

```jsx
import React from "react";
import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

<Breadcrumbs>
	<Breadcrumb to="https://www.nice.org.uk">NICE</Breadcrumb>
	<Breadcrumb to="/" tag={Link}>
		CKS
	</Breadcrumb>
	<Breadcrumb>Topics</Breadcrumb>
</Breadcrumbs>;
```

#### Props

##### Breadcrumbs

###### children

- Type: `Breadcrumb`, `Array<Breadcrumb>`

The indvidual breadcrumb items

###### rest

Any additional props will be spread across the containing `nav`, including any additional classNames

##### Breadcrumb

###### to

- Type: `string`

The URL the breadcrumb links to

###### elementType

- Type: `null`, `React.ElementType`
- Default: `"a"`

A custom tag type. Defaults to a normal HTMLAnchorElement. Use this prop to use custom routing.

##### method

- Type: `string`
- Default: `href`

The method of activating the link. By default a link is an anchor with `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

###### children

- Type: `React.ReactNode`

The text of the breadcrumb. Can accept any valid React node, but should be limited to a string to conform with the design system.

###### className

- Type: `string`

Any additional className will be merged on to the container

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-breadcrumbs/scss/breadcrumbs";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<nav aria-label="Breadcrumbs" role="navigation">
	<ol class="breadcrumbs">
		<li class="breadcrumbs__crumb">
			<a href="https://www.nice.org.uk">NICE</a>
		</li>
		<li class="breadcrumbs__crumb">
			<span>CKS</span>
		</li>
	</ol>
</nav>
```
