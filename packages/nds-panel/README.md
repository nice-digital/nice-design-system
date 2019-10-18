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
	<h2>A default (supporting) panel</h2>
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

#### Tabs Props

- none

##### children

- Type: `ReactNode`

The body of the panel

##### variant

- Type: `"impact"` | `"primary"`
- Default: `""`

The type of panel. Leave blank to default to a supporting panel.

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
<div class="tabs" data-tabs>
	<ul class="tabs__list" role="tablist">
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 1
			</button>
		</li>
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 2
			</button>
		</li>
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 3
			</button>
		</li>
	</ul>
	<div class="tabs__content">
		<div class="tabs__pane" role="tabpanel">
			Content for tab 1
		</div>
		<div class="tabs__pane" role="tabpanel">
			Content for tab 2
		</div>
		<div class="tabs__pane" role="tabpanel">
			Content for tab 3
		</div>
	</div>
</div>
```

### JAVASCRIPT

For the tabs to function you must import the `Tabs` module from `nds-jquery`

```js
const Tabs = require("@nice-digital/nds-jquery");
```

The `data-tabs` attribute present on the containing div will initialise the plugin on page load.
