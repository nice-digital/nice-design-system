# `@nice-digital/nds-hero`

> Page hero component for the NICE Design System

- [`@nice-digital/nds-card`](#nice-digitalnds-hero) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-hero --save
```

## Usage

### React

Import the `Hero` component from the package and use within JSX:

```jsx
import React from "react";
import { Hero } from "@nice-digital/nds-hero";

<Hero title="This is the page title">

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### title

- Type: `React.ReactNode` (required)

Will be rendered into the `h1` tag on in the hero component.

```js
<Hero title="This is the title" />;

const formattedTitle = (
	<>
		This is <i>the title</i>
	</>
);
<Hero title={formattedTitle} />;
```

##### intro

- Type: `React.ReactNode`

The lead text that will be rendered into a paragraph below the main title.

```js
<Hero title="Page title" intro="Intro text for the page" />
```

##### actions

- Type: `React.ReactNode`

A space to place important buttons or call to actions.

```js
const myCallsToAction = (
	<>
		<button className="btn btn--cta">Button One</button>
		<button className="btn btn--cta">Button Two</button>
	</>
);
<Hero title="Page title" actions={myCallsToAction} />;
```

##### extra

- Type: `React.ReactNode`

Extra space on the right-hand side of the component for up to 6 links, or other supporting text.

```js
const secondaryLinks = (
	<ul>
		<li>
			<a href="#">Page One</a>
		</li>
		<li>
			<a href="#">Page Two</a>
		</li>
		<li>
			<a href="#">Page Three</a>
		</li>
		<li>
			<a href="#">Page Four</a>
		</li>
		<li>
			<a href="#">Page Five</a>
		</li>
		<li>
			<a href="#">Page Six</a>
		</li>
	</ul>
);
<Hero title="Page title" extra={secondaryLinks} />;
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-hero/scss/hero";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="hero">
	<div class="hero__container">
		<div class="hero__body">
			<div class="hero__copy">
				<h1 class="hero__title">This is the title</h1>
				<p class="hero__intro">
					This is a hero intro that should explain in a few words what the site
					is about
				</p>
				<div class="hero__actions">
					<button type="button" class="btn btn--cta">Hello!</button>
				</div>
			</div>
			<div class="hero__extra">
				<h2 class="h4">Extras column</h2>
				<ul>
					<li>A list item</li>
					<li>Another list item</li>
					<li><a href="#">A link</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
```
