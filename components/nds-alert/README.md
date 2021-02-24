# `@nice-digital/nds-alert`

> Alert component for the NICE Design System

- [`@nice-digital/nds-alert`](#nice-digitalalert) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-alert --save
```

## Usage

### React

Import the `Alert` component from the package and use within JSX:

```jsx
import React from "react";
import { Alert } from "@nice-digital/nds-alert";

<Alert type="caution">
	<h3>Important Notice</h3> // type defaults to 'info' if not supplied
	<p>Please read the below for more information.</p>
</Alert>;
```

#### Props

##### children

- Type: `ReactNode` (required)

The body content of the alert. Can receive any markup.

```jsx
<Alert>
	<p>Here is some addition content.</p>
</Alert>
```

##### type

- Type: `string`

The styling to apply to the alert box. Defaults to `info` if not supplied. Can be one of `info`, `success`, `caution` and `error`

```jsx
<Alert type="success">
	<p>Thank you for your submission.</p>
</Alert>
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
