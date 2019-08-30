# `@nice-digital/nds-checkbox`

> Checkbox component for the NICE Design System

- [`@nice-digital/nds-checkbox`](#nice-digitalcheckbox) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-checkbox --save
```

## Usage

### React

Import the `Checkbox` component from the package and use within JSX:

```jsx
import React from "react";
import { Checkbox } from "@nice-digital/nds-checkbox";

// The mimimum to be supplied for the input to render is a value and a name

<Checkbox value="yes" name="contact-permission" />;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### value

- Type: `string` (required)

The value for the single input.

```js
<Checkbox value="yes" name="contact-permission" />
```

##### name

- Type: `string` (required)

The name attribute on the single input

```js
<Checkbox label="yes" name="contact-permission" />
```

##### label

- Type: `string`

The label for the single input.

```js
<Checkbox label="yes" name="contact-permission" label="Yes, please." />
```

##### disabled

- Type: `boolean`

Prop to control whether the disabled attribute is present on the input.

```js
<Checkbox label="yes" name="contact-permission" disabled={true} />
```

##### error

- Type: `boolean`

Prop to control whether an error class (and styling) is applied to the input, label and container.

```js
<Checkbox label="yes" name="contact-permission" error={true} />
```

##### inline

- Type: `boolean`

Prop to control whether the container recieves a class to set it visually inline. All checkboxes in the group would need this prop.

```js
<div>
	<Checkbox label="yes" name="contact-permission" inline={true} />
	<Checkbox label="no" name="contact-permission" inline={true} />
</div>
```

##### anything else

You can pass any other props to the component that will be added to the `input` tag

```js
const otherProps = {
	"data-testing": true,
	"qa-selection": "checkbox control"
}
<Checkbox label="yes" group="my-group" {...otherProps}  />
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-checkbox/scss/checkbox";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="checkbox">
	<input
		type="checkbox"
		class="checkbox__input"
		id="contact-preference_email"
		name="contact-preference"
		value="email"
	/>
	<label class="checkbox__label" for="contact-preference_email">
		Email
	</label>
</div>
```

Error state:

```html
<div class="checkbox checkbox--error">
	<input
		type="checkbox"
		class="checkbox__input"
		id="contact-preference_email"
		name="contact-preference"
		value="email"
	/>
	<label class="checkbox__label" for="contact-preference_email">
		Email
	</label>
</div>
```
