# `@nice-digital/nds-tabs`

> Tabs component for the NICE Design System, based on the <a target="_blank" rel="noopener" href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">W3C WAI-ARIA Authoring Practices 1.1</a>.

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

##### onTabChange

- Type: `function`
- Returns: string

A callback function that will be called when a tab is changed. Passes back a slugified version of the active tab's title.

##### className

- Type: `string`

Any additional className value that should be merged with the container.

#### `Tab` Props

##### children

- Type: `React.node`

Children supplied to the `Tab` component will be displayed as the content of the tab panel.

##### title

- Type: `string` (required)

The title of the tab button.

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

- Type: `string`

Use a custom ID attribute for tab button. If no ID is supplied, the title will be slugified to generate an ID.

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

Any other props will be cascaded to the tab panel, not the button.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-tabs/scss/tabs";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML as below. Tab controls and panels, along with their respective ARIA roles and states will be applied by the plugin.

```html
<div data-tabs>
	<div>
		<h3>Tab 1 Title</h3>
		<p>Tab 1 panel</p>
	</div>
	<div>
		<h3>Tab 2 Title</h3>
		<p>Tab 2 panel</p>
	</div>
	<div>
		<h3>Tab 3 Title</h3>
		<p>Tab 3 panel</p>
	</div>
</div>
```

### JavaScript

> TODO: JavaScript jQuery plugin
