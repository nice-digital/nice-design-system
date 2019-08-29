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

// The mimimum to be supplied for the input to render is a value

<Radio value="yes" />;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### value

- Type: `string` (required)

The value for the single input.

```js
<Radio label="yes" group="my-group" />
```

##### group

- Type: `string` (required)

The name attribute on the single input, to put radio controls into single-choice groups.

```js
<Radio label="yes" group="my-group" />
```

##### label

- Type: `string`

The label for the single input.

```js
<Radio label="yes" group="my-group" label="Yes, please." />
```

##### disabled

- Type: `boolean`

Prop to control whether the disabled attribute is present on the input.

```js
<Radio label="yes" group="my-group" disabled={true} />
```

##### error

- Type: `boolean`

Prop to control whether an error class (and styling) is applied to the input, label and container.

```js
<Radio label="yes" group="my-group" error={true} />
```

##### inline

- Type: `boolean`

Prop to control whether the container recieves a class to set it inline. All radios in the group would need this prop.

```js
<div>
	<Radio label="yes" group="my-group" inline={true} />
	<Radio label="no" group="my-group" inline={true} />
</div>
```

##### anything else

You can pass any other props to the component that will be added to the `input` tag

```js
const otherProps = {
	"data-testing": true,
	"qa-selection": "radio button"
}
<Radio label="yes" group="my-group" {...otherProps}  />
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
