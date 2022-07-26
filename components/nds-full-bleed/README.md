# `@nice-digital/nds-full-bleed`

> Full bleed (edge-to-edge viewport) element for the NICE Design System

- [`@nice-digital/nds-full-bleed`](#nice-digitalfullbleed)
- [Installation](#installation)
- [Usage](#usage)
- [React](#react)
- [Props](#props)
- [SCSS](#scss)
- [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-full-bleed
```

## Usage

### React

Import the `FullBleed` component from the package and use with JSX:

```jsx
import { FullBleed } from "@nice-digital/nds-full-bleed";
<FullBleed>
	<p>Content here</p>
</FullBleed>
```

The component doesn't have any internal spacing or structure, and any supplied markup will align to the left of the viewport by default. Include structural markup if you need to, for example:

```jsx
import { FullBleed } from "@nice-digital/nds-full-bleed";
import { Grid, GridItem } from "@nice-digital/nds-grid";
<FullBleed>
	<div className="container">
		<Grid>
			<GridItem cols={12}>
				<p>This content is aligned to the grid</p>
			</GridItem>
		</Grid>
	</div>
</FullBleed>
```

### Props

#### children

- Type: `React.ReactNode`

The children will make up the contents of the full bleed component.

#### className

- Type: `string`
- Default: `"default"`

Any additional classes you would like to apply to the container.

#### backgroundImage

- Type: `string`
- Default: `undefined`

The url or path for the image to be loaded into the background of the full bleed. The image will be set to `background-size: cover` and will be positioned in both vertical and horizontal center.

#### padding

- Type: `"small"` | `"medium"` | `"large"`
- Default: `"small"`

The amount of padding added to the top and bottom of the full bleed area.

#### light

- Type: `boolean`
- Default: `false`

If set to `true`, the `light` setting will change the colour of the text content to white text and without a background image, display solid primary background.

By default the text content is NICE black and the background is NICE white.

##### Other props

Any additional props will be spread across the component container.

```jsx
<FullBleed data-track="track-this">
	<p>Content here</p>
</FullBleed>
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-full-bleed/scss/full-bleed';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div
  class="full-bleed full-bleed--padding-small full-bleed--light"
  style='background-image: url("path/to/my/image.jpg");'
>
	<p>Here is my content</p>
</div>

```
