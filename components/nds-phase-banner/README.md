# `@nice-digital/nds-phase-banner`

> Phase banner component for the NICE Design System

- [`@nice-digital/nds-phase-banner`](#nice-digitalphasebanner) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-phase-banner --save
```

## Usage

### React

Import the `PhaseBanner` component from the package and use within JSX:

```jsx
import React from "react";
import { PhaseBaner } from "@nice-digital/nds-phase-banner";

<PhaseBanner alpha>
	This is a new service - your <a href='#'>feedback</a> will help us to improve it.
</PhaseBanner>;
```

#### Props

##### children

- Type: `ReactNode` (required)

The body content of the phase banner. The phase banner itself is a paragraph so only text content should be supplied.

```jsx
<PhaseBanner alpha>
	This is a new service - your <a href='#'>feedback</a> will help us to improve it.
</PhaseBanner>
```

##### alpha

- Type: `boolean` (one of 'alpha' or 'beta' is required)

Mark the phase of the banner display as "alpha".

```jsx
<PhaseBanner alpha>
	This is a new service - your <a href='#'>feedback</a> will help us to improve it.
</PhaseBanner>;
```

##### beta

- Type: `boolean` (one of 'alpha' or 'beta' is required)

Mark the phase of the banner display as "beta".

```jsx
<PhaseBanner beta>
	This is a new service - your <a href='#'>feedback</a> will help us to improve it.
</PhaseBanner>;
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-alert/scss/alert";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="alert alert--info">
	<h3>Alert title</h3>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet inventore
		maxime repellendus dolorem incidunt tempora a aspernatur sapiente quas
		quidem quia dolores, molestiae, accusamus, libero dicta! Explicabo
		recusandae, exercitationem iure ad asperiores tenetur quaerat, animi in quae
		numquam velit nostrum!
	</p>
</div>
```
