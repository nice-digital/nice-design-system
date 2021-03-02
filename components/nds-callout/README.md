# `@nice-digital/nds-callout`

> Callout element for the NICE Design System

- [`@nice-digital/nds-callout`](#nice-digitalcallout)
- [Installation](#installation)
- [Usage](#usage)
- [React](#react)
- [Props](#props) - [Props for Callout](#props-for-callout) - [Props for CalloutImage](#props-for-calloutimage)
- [Props for CalloutBody](#props-for-calloutbody)
- [SCSS](#scss)
- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-callout
```

## Usage

### React

Import the `Callout`, `CalloutImage` and `CalloutBody` components from the package and use with JSX:

```jsx
import React from "react";
import { Link } from "react-router-dom";
import { Callout, CalloutImage, CalloutBody } from "@nice-digital/nds-callout";

<Callout>
	<CalloutImage>
		<img src="image.jpg" alt="Description of image" />
	</CalloutImage>
	<CalloutBody>
		<h2 className="h4">
			<Link to="/about-us/">Find out more about our services</Link>
		</h2>
	</CalloutBody>
</Callout>;
```

### Props

#### Props for `Callout`

##### className

- Type: `string`

Any additional classes you would like applied to the container.

##### Children

- Type: `React.ReactNode`

`Callout` wrapper expects only both of `CalloutImage` and `CalloutBody`, as shown in the [React example](#react)

##### Other props

Any additional props will be spread across the component container.

```jsx
<Callout data-track="track-this">...</Callout>
```

#### Props for `CalloutImage`

##### Children

- Type: `React.ReactNode`

The only child supplied should be a HTML `img` element or an equivalent React component that renders an image element.

```jsx
import myPhoto from "./photo.jpg";
<CalloutImage>
	<img src={myPhoto} alt="Description of image" />
</CalloutImage>;
```

```jsx
import Img from "gatsby-image";
<CalloutImage>
	<Img fixed={data.file.childImageSharp.fixed} />
</CalloutImage>;
```

##### className

- Type: `string`

Any additional classes you would like applied to the `div` around the image.

##### Other props

Any additional props will be spread across the surrounding `div`.

#### Props for `CalloutBody`

##### Children

- Type: `React.ReactNode`

The body of the card, any markup is valid but you should supply at least a header with an anchor.

```jsx
<CalloutBody>
	<h2>
		<a href="/about-us">About our services</a>
	</h2>
</CalloutBody>
```

##### className

- Type: `string`

Any additional classes you would like applied to the `div` around the image.

##### Other props

Any additional props will be spread across the surrounding `div`.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-callout/scss/callout";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="callout">
	<div class="callout__image">
		<div class="maintain-ratio maintain-ratio--16-9">
			<img alt="" src="https://placehold.it/800x450?text=Callout" />
		</div>
	</div>
	<div class="callout__body">
		<h2>
			<a href="/">
				This is the title
			</a>
		</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
			facilis.
		</p>
	</div>
</div>
```
