# `@nice-digital/nds-formgroup`

> Form Group component for the NICE Design System

- [`@nice-digital/nds-formgroup`](#nice-digitalformgroup) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-formgroup --save
```

## Usage

### React

Import the `FormGroup` component from the package and use within JSX:

```jsx
import React from "react";
import { FormGroup } from "@nice-digital/nds-formgroup";

<FormGroup
	legend="How would you like us to contact you?"
	name="contact-preference"/>
	// pass in children as required
	<Radio label="Telephone" />
	<Radio label="Email" />
	// ---
</FormGroup>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `React.node` (required)

Pass through the child components that should be enclosed by the fieldset.

```jsx
<FormGroup>
	<Radio value="yes" />
	<Radio value="no" />
</FormGroup>
```

##### legend

- Type: `string`

The legend for the fieldset tag. If not supplied, styling for the visual box that wraps the fieldset won't be applied.

```jsx
<FormGroup legend="Would you like us to contact you in the future?">
	<Radio value="yes" />
	<Radio value="no" />
</FormGroup>
```

##### name

- Type: `string`

The name attribute that will be passed down to the child inputs. Name attributes are then not required for the child components directly.

```jsx
<FormGroup
	legend="Would you like us to contact you in the future?"
	name="contact-permission"
>
	<Radio value="yes" />
	<Radio value="no" />
</FormGroup>
```

##### inline

- Type: `boolean`

If supplied, the inline attribute will be passed down to children to apply the styling for left-to-right inline form inputs.

```jsx
<FormGroup inline>
	<Radio value="yes" />
	<Radio value="no" />
</FormGroup>
```

##### hint

- Type: `string`

Any hint or help text that should be rendered beneath the legend but above the inputs.

```jsx
<FormGroup hint="We promise not to contact you too frequently!">
	<Radio value="yes" />
	<Radio value="no" />
</FormGroup>
```

##### groupError

- Type: `boolean`

Render styled error text below the legend and above the inputs. Use the `error` attribute on the child components for additional error information specific to a single input.

```jsx
<FormGroup groupError="Please choose at least one contact method.">
	<Checkbox value="email" />
	<Checkbox value="telephone" />
</FormGroup>
```

```jsx
<FormGroup groupError="Please choose at least one contact method.">
	<Checkbox value="email" />
	<Checkbox value="telephone" error="Telephone is not available at this time" />
</FormGroup>
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-formgroup/scss/formgroup";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

Legend example:

```html
<fieldset class="formgroup">
	<legend class="formgroup__legend">
		Are you happy for us to contact you in the future?
	</legend>
	<input type="checkbox" />
</fieldset>
```

Error example:

```html
<fieldset class="formgroup">
	<legend class="formgroup__legend">
		Are you happy for us to contact you in the future?
	</legend>
	<p class="formgroup__error-message">
		Please choose at least one contact method
	</p>
	<input type="checkbox" />
</fieldset>
```

Hint example:

```html
<fieldset class="formgroup">
	<legend class="formgroup__legend">
		Are you happy for us to contact you in the future?
	</legend>
	<p class="formgroup__hint">We promise not to contact you too often!</p>
	<p class="formgroup__error-message">
		Please choose at least one contact method
	</p>
	<input type="checkbox" />
</fieldset>
```
