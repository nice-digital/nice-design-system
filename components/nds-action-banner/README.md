# `@nice-digital/nds-action-banner`

> Action banner component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
	- [React](#react)
		- [Props](#props)
			- [children](#children)
			- [title](#title)
			- [variant](#variant)
			- [cta](#cta)
			- [onClosing](#onclosing)
				- [className](#classname)
	- [SCSS](#scss)
	- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-action-banner --save
```

## Usage

### React

Import the `ActionBanner` components from the package and use within JSX:

```jsx
import React from "react";
import { ActionBanner } from "@nice-digital/nds-action-banner";

<ActionBanner title="A title">
	Some <a href="/test">body</a>
</ActionBanner>

<ActionBanner title="A title" variant="subtle">
	A subtle action banner
</ActionBanner>

import { Button } from "@nice-digital/nds-button";
<ActionBanner title="A title" cta={<Button>some text</Button>}>
	Some <a href="/test">body</a>
</ActionBanner>

<ActionBanner title="A title" onClosing={() => { console.log("Closing"); }}>
	Some <a href="/test">body</a>
</ActionBanner>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `ReactNode`

The body text of the action banner

##### title

- Type: `string`

The title of the action banner

##### variant

- Type: `"default"` | `"subtle"`
- Default: `"default"`

The type of action banner.

##### cta

- Type: `React.ReactNode`
- Default: `null`

The main, call to action button.

##### onClosing

- Type: `function`
- Default: `null`

The callback function to be called when this action banner is closed. Leave blank to default to a non-closable banner.

###### className

- Type: `string`

Any additional className will be merged on to the container.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-action-banner/scss/action-banner';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<section className="action-banner action-banner--subtle action-banner--closeable">
	<div className="action-banner__container">
		<div className="action-banner__inner">
			<div className="action-banner__text">
				<h2 className="action-banner__title">
					Title here
				</h2>
				<p className="action-banner__intro">
					Body here
				</p>
			</div>
			<div className="action-banner__actions">
				<a href="/test" class="btn">Some CTA</a>
			</div>
			<button type="button" className="action-banner__close">
					<span className="icon icon--remove" ara-hidden="true"></span>
					<span className="visually-hidden">Close and then put the title here</span>
				</button>
		</div>
	</div>
</section>
```
