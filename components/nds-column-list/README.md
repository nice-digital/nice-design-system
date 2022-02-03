# `@nice-digital/nds-column-list`

> Column List component for the NICE Design System

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-column-list --save
```

## Usage

### React

Import the `ColumnList` component from the package and use within JSX:

```jsx
import React from "react";
import { ColumnList } from "@nice-digital/nds-column-list";

<ColumnList>
	<li>Item one</li>
	<li>Item two</li>
	<li>Item three</li>
</ColumnList>

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### plain

- Type: `boolean` (default: false)

Whether to render a plain list (as opposed to a boxed one)

```js
<ColumnList plain>
	<li>Item one</li>
	<li>Item two</li>
	<li>Item three</li>
</ColumnList>
```

##### columns

- Type: `number` (default: 3)

The maximum number of columns to render. The only permitted values are 2 or 3.

```js
<ColumnList columns={2}>
	<li>Item one</li>
	<li>Item two</li>
	<li>Item three</li>
</ColumnList>
```

##### children

- Type: `React.ReactNode`

As the ColumnList component renders an `ol` element, it must have at least one `<li>`
child.

```js
<ColumnList>
	<li>Item one</li>
	<li>Item two</li>
	<li>Item three</li>
</ColumnList>
```

###### className

- Type: `string`

Any additional className will be merged on to the containing `<ol>` element.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-column-list/scss/column-list";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:


#### Standard variant (3 columns, boxed layout)
```html
<ol class="column-list column-list--boxed">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ol>
```

#### Alternative variant (2 columns, plain layout)
```html
<ol class="column-list column-list--plain column-list--two-columns">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ol>
```
