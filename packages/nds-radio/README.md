# `@nice-digital/nds-radio`

> Radio component for the NICE Design System

- [`@nice-digital/nds-radio`](#nice-digitalradio) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-radio --save
```

## Usage

### React

Import the `Radio` component from the package and use within JSX:

```jsx
import React from "react";
import { Radio } from "@nice-digital/nds-radio";

// The mimimum to be supplied for the input to render is a value and a name

<Radio value="yes" name="my-group" />;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### value

- Type: `string` (required)

The value for the single input.

```js
<Radio label="yes" name="my-group" />
```

##### name

- Type: `string` (required)

The name attribute on the single input, to put radio controls into single-choice groups.

```js
<Radio label="yes" name="my-group" />
```

##### label

- Type: `string`

The label for the single input.

```js
<Radio label="yes" name="my-group" label="Yes, please." />
```

##### hint

- Type: `string`

Any hint or help text that should be rendered underneath the radio and label

```js
<Radio
	value="yes"
	name="my-group"
	label="Yes, please."
	hint="You can unsubscribe at any time"
/>
```

##### disabled

- Type: `boolean`

Prop to control whether the disabled attribute is present on the input.

```js
<Radio label="yes" name="my-group" disabled={true} />
```

##### error

- Type: `string` | `boolean`

Prop to control whether an error class (and styling) is applied to the input, label and container. If `true` is supplied then the error styling is applied, if a `string` is supplied, the error styling is applied and an error message is rendered.

```js
<Radio label="yes" name="my-group" error={true} />
<Radio label="yes" name="my-group" error="Please check the terms and conditions" />
```

##### inline

- Type: `boolean`

Prop to control whether the container recieves a class to set it inline. All radios in the group would need this prop.

```js
<div>
	<Radio label="yes" name="my-group" inline={true} />
	<Radio label="no" name="my-group" inline={true} />
</div>
```

##### anything else

You can pass any other props to the component that will be added to the `input` tag

```js
const otherProps = {
	"data-testing": true,
	"qa-selection": "radio button"
}
<Radio label="yes" name="my-group" {...otherProps}  />
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-radio/scss/radio";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="radio">
	<input class="radio__input" name="my-group" type="radio" id="my-group_yes" />
	<label class="radio__label" for="my-group_yes">
		Yes, please.
	</label>
</div>
```

Error example:

```html
<p class="radio__error-message">Error message text here.</p>
<div class="radio radio--error">
	<input
		class="radio__input"
		type="radio"
		id="my-group_error"
		name="my-group"
	/>
	<label class="radio__label" for="my-group_error">
		Error!
	</label>
</div>
```
