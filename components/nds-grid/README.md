# `@nice-digital/nds-grid`

> Grid component for the NICE Design System

- [`@nice-digital/nds-grid`](#nice-digitalnds-grid)
	- [Installation](#installation)
	- [Usage](#usage)
		- [React](#react)
			- [Props](#props)
				- [Grid](#grid)
					- [children](#children)
					- [reverse](#reverse)
					- [horizontalAlignment](#horizontalalignment)
					- [verticalAlignment](#verticalalignment)
					- [gutter](#gutter)
					- [debug](#debug)
					- [className](#classname)
					- [elementType](#elementtype)
				- [GridItem](#griditem)
					- [children](#children-1)
					- [cols](#cols)
					- [push](#push)
					- [pull](#pull)
					- [xs, sm, md, lg, xl](#xs-sm-md-lg-xl)
					- [className](#classname-1)
					- [elementType](#elementtype-1)
		- [SCSS](#scss)
		- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-grid --save
```

## Usage

### React

Import the `Grid` and `GridItem` components from the package and use within JSX:

```jsx
import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";

<Grid>
	<GridItem cols={12} sm={{ cols: 6, push: 2 }}>
		Some grid content
	</GridItem>
</Grid>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### Grid

###### children

- Type: `GridItem` | `GridItem[]` (required)

The grid items to render within the grid

###### reverse

- Type: `boolean` | `null`
- Default: `false`

Reverses the rendered order of grid items from their natural DOM order. Can be useful for rendering a menu first on mobile, but on the right hand side on side devices. Leave blank to default to the natual DOM order.

> Use with caution! Be careful not to introduce an illogical, confusing tab order when using a reverse grid.

###### horizontalAlignment

- Type: `left` | `center` | `right` | `null`
- Default: `left`

The horizontal alignment of items within the grid, when there are empty columns. Useful for creating interesting layouts. Leave blank to default to left alignment.

###### verticalAlignment

- Type: `top` | `middle` | `bottom` | `null`
- Default: `top`

The vertical alignment of items within the grid. Useful for creating interesting layouts. Leave blank to default to top alignment.

###### gutter

- Type: `standard` | `none` | `compact` | `loose` | `null`
- Default: `standard`

The horizontal alignment of items within the grid, when there are empty columns. Useful for creating interesting layouts. Leave blank to default to standard gutters.

###### debug

- Type: `boolean`
- Default: `false`

Puts coloured debug outlines round grid and grid items to enable debugging layouts.

###### className

- Type: `string`
- Default: `""`

Additional classes to render on the grid element. Useful for margin classes e.g. `mt--d`.

###### elementType

- Type: `React.ElementType`
- Default: `div`

A custom tag type for the grid. Useful if semantically your grid is a `ul` or `ol`. Defaults to a normal HTMLDivElement. Example: `<Grid elementType="ul"></Grid>`.

##### GridItem

###### children

- Type: `React.Node` | `React.Node[]` (required)

The contents of the grid item.

###### cols

- Type: `Number` (required)

The number of columns (1-12) this grid item spans on the smallest screen size.

###### push

- Type: `Number`

The number of columns (1-11) to push this grid item on the smallest screen size.

###### pull

- Type: `Number`

The number of columns (1-11) to pull this grid item on the smallest screen size.

###### xs, sm, md, lg, xl

- Type: `Number` | `{ cols: Number, push: Number, pull: Number }`

The grid definition at the breakpoint. Use a number to span that number of columns, or pass an object to configure cols, push and/or pull.

###### className

- Type: `string`
- Default: `""`

Additional classes to render on the grid item element. Useful for margin classes e.g. `mt--d`.

###### elementType

- Type: `React.ElementType`
- Default: `div`

A custom tag type for the grid item. Useful if semantically your grid is a `ul` or `ol`. Defaults to a normal HTMLDivElement. Example: `<GridItem elementType="ul"></GridItem>`.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-grid/scss/grid";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML, for example:

```html
<div class="grid grid-reverse grid--middle">
	<div data-g="12 xs:6 xs:push:2">Some grid item content</div>
	<div data-g="12 xs:6 xs:push:2 sm:12">Some grid item content</div>
</div>
```
