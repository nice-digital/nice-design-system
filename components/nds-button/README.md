# `@nice-digital/nds-button`

> Button component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
	- [React](#react)
		- [Props](#props)
			- [children](#children)
			- [variant](#variant)
			- [buttonType](#buttontype)
			- [to](#to)
			- [elementType](#elementtype)
			- [method](#method)
			- [className](#classname)
	- [SCSS](#scss)
	- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-button --save
```

## Usage

### React

Import the `Button` components from the package and use within JSX:

```jsx
import React from "react";
import { Button } from "@nice-digital/nds-button";

<Button>
	A default (primary) button
</Button>

<Button variant="cta" buttonType="submit">
	A CTA submit button
</Button>

<Button variant="secondary" className="mt--e">
	A secondary button, with an additional class
</Button>

<Button variant="inverse">
	Am inverse button
</Button>

<Button to="/test">
	An anchor button
</Button>

<Button to="/test" elementType={Link}>
	An anchor button, with custom routing
</Button>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `ReactNode`

The body of the button

##### variant

- Type: `"primary"` | `"cta"` | `"secondary"` | `"inverse"`
- Default: `"primary"`

The variant of the button. Leave blank to default to a primary button.

##### buttonType

- Type: `"button"` | `"submit"` | `"reset"`
- Default: `"button"`

The type of the button. Leave blank to default to _button_ or if you're using the to attribute for a link.

##### to

- Type: `string`
- Default: `null`

Destination URL if this is an anchor button. If you're using custom routing, use the `elementType` prop to pass in a custom tag type.

##### elementType

- Type: `React.ElementType`
- Default: `null`

A custom tag type for the button, when it's an anchor. Defaults to a normal HTMLAnchorElement. Use this prop to use custom routing e.g. `<Button to="/test" elementType={Link}>Text</Button>`.

##### method

- Type: `string | null`
- Default: `null`

If the button is a link or element with a navigation purpose, this allows the specifying of a method to activate the link. If an canchose is supplied, the default method is a `href` attribute for the destination. Other routers may use another prop, such as `to`. This allows you to stipulate any possible required attribute name. If no `method` is provided and the `elementType` is an anchor (or an `elementType` is not supplied) then the `method` will default to `href`. If the `elementType` is not an anchor and no method is supplied, the `method` will default to `to`.

##### className

- Type: `string`
- Default: `""`

Additional CSS classes to apply to the button, e.g. `mt--e` to add a top margin.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-button/scss/button';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<button type="button" class="btn">
	Default (primary) button
</button>
<button type="submit" class="btn btn--cta">
	CTA submit button
</button>
<button type="reset" class="btn btn--secondary">
	Secondary reset button
</button>
<a href="/test" class="btn btn--inverse">
	Inverse anchor button
</a>
```
