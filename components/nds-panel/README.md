# `@nice-digital/nds-panel`

> Panel component for the NICE Design System

- [`@nice-digital/nds-panel`](#nice-digitalnds-panel) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [children](#children) - [variant](#variant) - [className](#classname) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-panel --save
```

## Usage

### React

Import the `Panel` components from the package and use within JSX:

```jsx
import React from "react";
import { Panel } from "@nice-digital/nds-panel";

<Panel>
	<h2>A default panel</h2>
	<p>For signposting supporting or additional information</p>
</Panel>

<Panel variant="impact">
	<h2>Impact panel</h2>
	<p>Any body copy</p>
</Panel>

<Panel variant="primary">
	<h2>A primary panel</h2>
	<p>For grouping and separating content and for visual interest.</p>
</Panel>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `ReactNode`

The body of the panel

##### variant

- Type: `"impact"` | `"primary"` | `"inverse"` | `"impact-alt"`
- Default: `""`

The type of panel.

##### className

- Type: `string`
- Default: `""`

Additional CSS classes to apply to the panel, e.g. `mt--0` to remove the top margin.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-panel/scss/panel";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="panel">
	Default panel
</div>
<div class="panel panel--impact">
	Impact panel
</div>
<div class="panel panel--primary">
	Primary panel
</div>
```
