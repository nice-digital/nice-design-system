# `@nice-digital/nds-input`

> Form input component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
	- [React](#react)
		- [Props](#props)
			- [defaultValue](#defaultvalue)
			- [error](#error)
			- [errorMessage](#errormessage)
			- [hint](#hint)
			- [inputRef](#inputref)
			- [label](#label)
			- [name](#name)
			- [type](#type)
			- [className](#classname)
			- [Anything else](#anything-else)
	- [SCSS](#scss)
	- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-input --save
```

## Usage

### React

Import the `Input` components from the package and use within JSX:

```jsx
import React from "react";
import { Input } from "@nice-digital/nds-input";

<Input label="First name" name="firstname" />

<Input
    label="Surname"
    name="surname"
    error={true}
    errorMessage="This field is required"
/>

<Input
    label="Age on 1st September"
    name="age"
    hint="Please enter in full years"
/>

import { register } from "react-hook-form";
<Input label="With ref" name="ref" inputRef={register} />

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### defaultValue

- Type: `string`

Pass a value for the input to be initially populated with.

##### error

- Type: `boolean`
- Default: `false`

Whether the component is in its error state. Adds classes to apply styling.

##### errorMessage

- Type: `string`

Error message to display inline.

##### hint

- Type: `string`

Display extra help text above the input field.

##### inputRef

- Type: `React.Ref`
- Default: `null`

Allow parent access to the ref property of the `input` element.

##### label

- Type: `React.ReactNode` | `null` (required)

The content of the `label` element. If `null` is passed, the `label` element will not be rendered. **Only use this if you are supplying your own `label` in the markup!**

##### name

- Type: `string` (required)

Input element `name` property.

##### type

- Type: `string`
- Default: "text"

##### className

- Type: `string`
- Default: `""`

A className that will be merged with the component's container className.

##### Anything else

Any other props passed to `<Input />` will be cascaded to the input element.x

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-input/scss/input';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="input input--error">
    <label class="input__label">
        First name
    </label>
    <p class="form__hint">
        Please enter your name
    </p>
    <p class="form__error">
        This field is required
    </p>
    <input  name="firstname" 
            class="input__input" 
            type="text"
    >
</div>
```
