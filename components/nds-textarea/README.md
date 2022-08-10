# `@nice-digital/nds-textarea`

> Form textarea component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
	- [React](#react)
		- [Props](#props)
			- [defaultValue](#defaultvalue)
			- [error](#error)
			- [errorMessage](#errormessage)
			- [hint](#hint)
			- [textareaRef](#textarearef)
			- [label](#label)
			- [name](#name)
			- [Anything else](#anything-else)
	- [SCSS](#scss)
	- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-textarea --save
```

## Usage

### React

Import the `Textarea` components from the package and use within JSX:

```jsx
import React from "react";
import { Textarea } from "@nice-digital/nds-textarea";

<Textarea label="Your address" name="address" />

<Textarea
    label="Your address"
    name="address"
    error={true}
    errorMessage="There is a problem with this field"
/>

<Textarea
    label="Your address"
    name="address"
    hint="Enter your full address including post code"
/>

import { register } from "react-hook-form";
<Textarea label="With ref" name="ref" textareaRef={register} />

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### defaultValue

- Type: string

String that the textarea will be prepopulated with.

##### error

- Type: `boolean`
- Default: `false`

Whether the component is in its error state. Adds classes to apply styling.

##### errorMessage

- Type: `string`

Error message to display inline.

##### hint

- Type: `string`

Display extra help text above the textarea field.

##### textareaRef

- Type: `React.Ref`
- Default: `null`

Allow parent access to the ref property of the `textarea` element.

##### label

- Type: `React.ReactNode` (required)

The content of the `label` element.

##### name

- Type: `string` (required)

Textarea element `name` property.

##### Anything else

Any other props passed to `<Textarea />` will be cascaded to the `<textarea />` element.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-textarea/scss/textarea';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="textarea textarea--error">
    <label 
        class="textarea__label" 
        for="textarea">
            Your address
    </label>
    <p class="textarea__hint">
        Enter your full address including post code
    </p>
    <p class="textarea__error">
        This field is required
    </p>
    <textarea class="textarea__textarea" id="textarea" name="textarea">Default value</textarea>
</div>
```
