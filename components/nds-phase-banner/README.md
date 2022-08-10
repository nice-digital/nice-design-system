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

##### className

- Type: `string`

Any additional className will be merged on to the container.

##### Other props

Any additional props will be spread across the container.

```jsx
<PhaseBanner alpha data-track="track-this">...</PhaseBanner>
```


### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-phase-banner/scss/phase-banner';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<p class="phase-banner">
  <span class="phase-banner__tag">
    <span class="tag tag--alpha tag--impact">Alpha</span>
  </span>
  <span class="phase-banner__label">
    This is a new service - your feedback will help us to improve it.
  </span>
</p>
```
