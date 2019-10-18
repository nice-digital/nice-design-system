# `@nice-digital/nds-tabs`

> Tabs component for the NICE Design System

- [`@nice-digital/nds-tabs`](#nice-digitalnds-tabs) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-tabs --save
```

## Usage

### React

Import the `Tabs` and `Tab` components from the package and use within JSX:

```jsx
import React from "react";
import { Tabs, Tab } from "@nice-digital/nds-tabs";

<Tabs>
	<Tab title="Tab one">
		<p>Tab one content here</p>
	</Tab>
	<Tab title="Tab two">
		<p>Tab one content here</p>
	</Tab>
</Tabs>;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### `Tabs` Props

##### children

- Type: `React.node`

The `Tabs` component will only accept children of type `Tab`. Any other supplied children will be discarded.

```jsx
<Tabs>
	<Tab></Tab>
	<Tab></Tab>
</Tabs>
```

##### other props

The `Tabs` component will spread any props across the containing `div` element.

#### `Tab` Props

##### children

- Type: `React.node`

Children supplied to the `Tab` component will be displayed as the content of the tab.

##### title

- Type: `string` (required)

The label of the tab button. If no ID is supplied, the title will be slugified to generate an ID.

```jsx
<Tabs>
	<Tab title="My first tab">
		<h1>First Tab</h1>
		<p>...</p>
	</Tab>
	<Tab title="My second tab">
		<h2>First Tab</h2>
		<p>...</p>
	</Tab>
</Tabs>
```

##### id

- Type: `string` (required)

Use a custom ID attribute for tab button.

```jsx
<Tabs>
	<Tab title="My first tab" id="tab1">
		<h1>First Tab</h1>
		<p>...</p>
	</Tab>
	<Tab title="My second tab" id="tab2">
		<h2>First Tab</h2>
		<p>...</p>
	</Tab>
</Tabs>
```

##### other props

Any other props will be cascaded to the tab area container, not the button.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-tabs/scss/tabs";
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

### JavaScript

> Todo
