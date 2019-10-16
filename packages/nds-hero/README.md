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

##### header

- Type: `React.ReactNode`

Optional space at the top of the component to allow the insertion of `Breadcrumb` or `PhaseBanner` components.

```js
<Hero title="The title" header={<PhaseBanner phase="alpha" />}>
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

##### children

- Type: `React.ReactNode`

If you supply child markup it will render in the extra space on the right-hand side of the component.

```js
<Hero title="Page title">
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
</Hero>
```

##### footer

- Type: `React.ReactNode`

Content for the footer. Accepts any valid react node.

```js
const myFooter = <p>Here is some footer content</p>;

<Hero title="The title" footer={myFooter}>
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
			<div class="hero__footer" aria-labelledby="new-updated">
				<h2 class="h5 mv--0 show--ib mr--d" id="new-updated">
					New&nbsp;and updated products:
				</h2>
				<ul class="list list--piped show--ib">
					<li>
						<a href="/guidance/date"
							><span class="visually-hidden">New and updated products </span
							><span class="text-uppercase">t</span>his month</a>
					</li>
					<li>
						<a href="/guidance/lastmonth"
							><span class="visually-hidden">New and updated products </span
							><span class="text-uppercase">l</span>ast month</a>
					</li>
					<li>
						<a href="/guidance/last6months"
							><span class="visually-hidden"
								>New and updated products in the </span
							><span class="text-uppercase">l</span>ast 6 months</a>
					</li>
				</ul>
			</span>
		</div>
	</div>
</div>
```
